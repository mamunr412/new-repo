import Table, { ColumnsType } from "antd/es/table";
import { EyeOutlined } from "@ant-design/icons";
import { Card, Col, Descriptions, Row } from "antd";

export default function Dashboard() {
  const columns: ColumnsType<any> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
    },
    {
      title: "Type",
      key: "Type",
      dataIndex: "type",
    },
  ];

  interface DataType {
    id: string;
    name: string;
    startDate: number;
    status: string;
    view: any;
  }

  const data: DataType[] = [
    {
      id: "1",
      name: "John Brown",
      startDate: 32,
      status: "New York No. 1 Lake Park",
      view: <EyeOutlined />,
    },
    {
      id: "2",
      name: "Jim Green",
      startDate: 42,
      status: "London No. 1 Lake Park",
      view: <EyeOutlined />,
    },
    {
      id: "3",
      name: "Joe Black",
      startDate: 32,
      status: "Sydney No. 1 Lake Park",
      view: <EyeOutlined />,
    },
    {
      id: "22",
      name: "Joe Black",
      startDate: 32,
      status: "Sydney No. 1 Lake Park",
      view: <EyeOutlined />,
    },
    {
      id: "23",
      name: "Joe Black",
      startDate: 32,
      status: "Sydney No. 1 Lake Park",
      view: <EyeOutlined />,
    },
    {
      id: "3234",
      name: "Joe Black",
      startDate: 32,
      status: "Sydney No. 1 Lake Park",
      view: <EyeOutlined />,
    },
    {
      id: "221",
      name: "Joe Black",
      startDate: 32,
      status: "Sydney No. 1 Lake Park",
      view: <EyeOutlined />,
    },
    {
      id: "232",
      name: "Joe Black",
      startDate: 32,
      status: "Sydney No. 1 Lake Park",
      view: <EyeOutlined />,
    },
    {
      id: "32343",
      name: "Joe Black",
      startDate: 32,
      status: "Sydney No. 1 Lake Park",
      view: <EyeOutlined />,
    },
  ];
  return (
    <Row gutter={[24, 32]} style={{ marginTop: ".5rem" }}>
      <Col xs={24}>
        <Card title='Notice'>
          <Descriptions column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
            <Descriptions.Item>Makin</Descriptions.Item>

            <Descriptions.Item>Ahmed</Descriptions.Item>
            <Descriptions.Item>Makin</Descriptions.Item>
            <Descriptions.Item>Ahmed</Descriptions.Item>
            <Descriptions.Item>Makin</Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>
      <Col xs={24} md={12} lg={12}>
        <Card
          title='Material Overview'
          style={{ maxHeight: "25rem", minHeight: "24rem" }}
        >
          <Descriptions column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}>
            <Descriptions.Item>Makin</Descriptions.Item>
            <Descriptions.Item>Paid</Descriptions.Item>
            <Descriptions.Item>Makin</Descriptions.Item>
            <Descriptions.Item>Paid</Descriptions.Item>
            <Descriptions.Item>Makin</Descriptions.Item>
            <Descriptions.Item>Paid</Descriptions.Item>
            <Descriptions.Item>Makin</Descriptions.Item>
            <Descriptions.Item>Paid</Descriptions.Item>
            <Descriptions.Item>Makin</Descriptions.Item>
            <Descriptions.Item>Paid</Descriptions.Item>
            <Descriptions.Item>Makin</Descriptions.Item>
            <Descriptions.Item>Paid</Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>

      <Col xs={24} md={12} lg={12}>
        <Card title='Class Attendance'>
          <Table
            style={{
              maxHeight: "300px",
              boxShadow: "rgba(149, 157, 165, 0.02) 0px 8px 24px",
            }}
            scroll={{ y: 230 }}
            bordered={false}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
        </Card>
      </Col>
    </Row>
  );
}
