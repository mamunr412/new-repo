import { useParams } from "react-router-dom";
import { GetSingleClass } from "../../../components/Mutations/GetMutations/GetMutations";
import { Descriptions, Card } from "antd";
import type { DescriptionsProps } from "antd";
import moment from "moment";
const SingleClass = () => {
  const { id } = useParams();
  const { singleClass } = GetSingleClass(Number(id));
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Tittle",
      children: singleClass.title,
    },
    {
      key: "2",
      label: "Teacher",
      children: singleClass.teacher,
    },
    {
      key: "3",
      label: "Date",
      children: moment(singleClass.date).format("L"),
    },
    {
      key: "4",
      label: "Time",
      children: singleClass.time,
    },
    {
      key: "5",
      label: "Details",
      children: singleClass.details,
      span: 2,
    },
  ];
  return (
    <>
      <Card title='Single class information ' style={{ margin: "1rem auto" }}>
        <Descriptions bordered items={items} />
      </Card>
    </>
  );
};

export default SingleClass;
