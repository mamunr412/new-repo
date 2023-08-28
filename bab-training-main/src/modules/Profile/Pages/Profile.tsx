import { Avatar, Card, Col, Row, Typography } from 'antd';
import man from '../../../assets/man-icon.jpg';

export default function Profile() {
	return (
		<>
			<Card >
				<Row>
					<Col xs={24} sm={24} md={18}>
						<Avatar src={man} size={100} />
					</Col>
					<Col xs={24} sm={24} md={18}>
						<Typography.Title level={5}>Name: John Doe</Typography.Title>
						<Typography.Title level={5}>Email: john@gmail.com</Typography.Title>
						<Typography.Title level={5}>
							Address: Banani,Dhaka,BD
						</Typography.Title>
						<Typography.Title level={5}>Phone: 014785236</Typography.Title>
					</Col>
					{/* <Col xs={24} sm={24} md={18}>
						<Typography.Title level={5}>
							Address: Banani,Dhaka,BD
						</Typography.Title>
						<Typography.Title level={5}>Phone: 014785236</Typography.Title>
					</Col> */}
				</Row>
			</Card>
		</>
	);
}
