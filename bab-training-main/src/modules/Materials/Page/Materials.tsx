import { Card } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';

export default function Materials() {
	const columns: ColumnsType<any> = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Name',
			dataIndex: 'title',
			key: 'name',
		},
		{
			title: 'File',
			dataIndex: 'files',
			key: 'files',
		},
		{
			title: 'Details',
			dataIndex: 'details',
			key: 'details',
		},
	];
	interface DataType {
		id: string;
		title: string;
		files: string;
		details: string;
	}
	const data: DataType[] = [
		{
			id: '1',
			title: 'Discet math',
			files: 'Jafar Iqbal',
			details: 'New York No. 1 Lake Park',
		},
		{
			id: '2',
			title: 'Jim Green',
			files: 'Karim Khan',
			details: 'London No. 1 Lake Park',
		},
		{
			id: '3',
			title: 'Joe Black',
			files: 'Rafiq Ullah',
			details: 'Sydney No. 1 Lake Park',
		},
	];

	return (
		<Card title='Materials ' style={{ margin: '1rem auto' }}>
			<Table
				scroll={{ x: '100vh' }}
				pagination={false}
				columns={columns}
				dataSource={data}
			/>
		</Card>
	);
}
