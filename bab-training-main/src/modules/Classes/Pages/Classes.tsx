import { Card, Tooltip } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { GetClass } from "../../../components/Mutations/GetMutations/GetMutations";
import { useAuthContext } from "../../../app/Context/AuthContext";
import moment from "moment";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

export default function Classes() {
  const { user } = useAuthContext();
  const { classes, isLoading } = GetClass(user.id);

  console.log(classes);

  const columns: ColumnsType<any> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Class Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: `Teacher's Name`,
      dataIndex: "teacher",
      key: "teacher",
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (_, { date }) => moment(date).format("L"),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, { id }) => (
        <Tooltip title='View'>
          <Link to={`/classes/${id}`}>
            <EyeOutlined style={{ cursor: "pointer" }} />
          </Link>
        </Tooltip>
      ),
    },
  ];

  return (
    <Card title='Classes ' style={{ margin: "1rem auto" }}>
      <Table
        scroll={{ x: "100vh" }}
        loading={isLoading}
        pagination={false}
        columns={columns}
        dataSource={classes?.length > 0 ? classes : []}
      />
    </Card>
  );
}
