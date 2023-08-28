import { Avatar, Card, Col, Descriptions, Divider, Row, Image } from "antd";
import Bird from "../../../assets/bird.jpg";
import Title from "antd/es/typography/Title";
import useWindowSize from "../../../utils/useWindowSize";
import { GetMyInformation } from "../../../components/Mutations/GetMutations/GetMutations";
import { useAuthContext } from "../../../app/Context/AuthContext";
import moment from "moment";
import { imageUrl } from "../../../app/Api/Constant";

export default function MyInfo() {
  const { width } = useWindowSize();
  const { user } = useAuthContext();
  const { myInformation } = GetMyInformation(user.id);
  return (
    <>
      <div
        style={{ margin: "2rem auto", width: "90%" }}
        className='user-profile'
      >
        <Row justify={"center"} align={"middle"} gutter={[12, 16]}>
          <Col xs={12} sm={12} md={2}>
            <Avatar
              src={
                myInformation.photo
                  ? `${imageUrl}/${myInformation.photo}`
                  : Bird
              }
              size={100}
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={2}
            style={{ marginLeft: "auto", order: 2 }}
          ></Col>
        </Row>
        <Divider />
        <Row justify={"space-between"} align={"middle"} gutter={[12, 16]}>
          <Col xs={24} sm={24} md={24}>
            <Card>
              <Descriptions
                className='custom-descriptions'
                title={<Title level={3}>Basic Info.</Title>}
                bordered={width <= 568 ? false : true}
                style={{}}
                column={{ lg: 2, xs: 1 }}
              >
                <Descriptions.Item label='Name (English)'>
                  {myInformation.name_bn}
                </Descriptions.Item>
                <Descriptions.Item label='Name (Bengali)'>
                  {myInformation.name_en}
                </Descriptions.Item>
                <Descriptions.Item label='Date Of Birth'>
                  {moment(myInformation.date_of_birth).format(" DD-MM-YYYY")}
                </Descriptions.Item>
                <Descriptions.Item label='Email'>
                  {myInformation.email}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>

          <>
            <Col xs={24} sm={24} md={24}>
              <Card>
                <Descriptions
                  className='custom-descriptions'
                  title={<Title level={3}>Address & Contact</Title>}
                  bordered={width <= 568 ? false : true}
                  column={{ lg: 2, xs: 1 }}
                >
                  <Descriptions.Item label='Official Address'>
                    {myInformation.official_address}
                  </Descriptions.Item>
                  <Descriptions.Item label='Residential Address'>
                    {myInformation.residential_address}
                  </Descriptions.Item>
                  <Descriptions.Item label='Official Contact No.'>
                    {myInformation.official_contact_number}
                  </Descriptions.Item>
                  <Descriptions.Item label='Residential Contact No.'>
                    {myInformation.residential_contact_number}
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <Card>
                <Descriptions
                  className='custom-descriptions'
                  title={<Title level={3}>Last Educational Info.</Title>}
                  bordered={width <= 568 ? false : true}
                  column={{ lg: 2, xs: 1 }}
                >
                  <Descriptions.Item label='Exam'>
                    {myInformation.exam}
                  </Descriptions.Item>
                  <Descriptions.Item label='Division'>
                    {myInformation.division}
                  </Descriptions.Item>
                  <Descriptions.Item label='Board'>
                    {myInformation.board}
                  </Descriptions.Item>
                  <Descriptions.Item label='Group/Subject'>
                    {myInformation.group_subject}
                  </Descriptions.Item>
                  <Descriptions.Item label='Year'>
                    {myInformation.year}
                  </Descriptions.Item>
                </Descriptions>

                <Descriptions
                  style={{ margin: "1rem auto" }}
                  className='custom-descriptions'
                  title={<Title level={3}>Experience & Qualification</Title>}
                  bordered={width <= 568 ? false : true}
                  column={{ lg: 2, xs: 1 }}
                >
                  <Descriptions.Item label='Total Working Exp. as Banker'>
                    {myInformation.total_work_exp}
                  </Descriptions.Item>
                  <Descriptions.Item label='Professional Qualification'>
                    {myInformation.proffessional_qualification}
                  </Descriptions.Item>
                  <Descriptions.Item label='Number of Workshop Attended'>
                    {myInformation.proffessional_qualification}
                  </Descriptions.Item>
                  <Descriptions.Item label='Signature'>
                    <Image
                      width={55}
                      height={50}
                      src={
                        myInformation.photo
                          ? `${imageUrl}/${myInformation.photo}`
                          : "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                      }
                    />
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
          </>
        </Row>
      </div>
    </>
  );
}
