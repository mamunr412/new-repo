import { ArrowDownOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
 

export default function Certificate() {
  const columns: ColumnsType<any> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Course Name",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "Teacher Name",
      dataIndex: "files",
      key: "files",
    },
    {
      title: "Download",
      dataIndex: "details",
      key: "details",
    },
  ];
  interface DataType {
    id: string;
    title: string;
    files: string;
    details: any;
  }
  const data: DataType[] = [
    {
      id: "1",
      title: "Ator Den",
      files: "Jafar Iqbal hariye gelo",
      details: <ArrowDownOutlined style={{ cursor: "pointer" }} />,
    },
    {
      id: "2",
      title: "Ator Khan",
      files: "Karim Khan kaj kore na",
      details: <ArrowDownOutlined style={{ cursor: "pointer" }} />,
    },
    {
      id: "3",
      title: "Ator Black",
      files: "Rafiq Ullah",
      details: <ArrowDownOutlined style={{ cursor: "pointer" }} />,
    },
  ];

  return (
    <div>
      <Card title='Notice' style={{ margin: "1rem auto" }}>
        <Table
          scroll={{ x: "100vh" }}
          pagination={false}
          columns={columns}
          dataSource={data}
        />
      </Card>
    </div>
  );
}
