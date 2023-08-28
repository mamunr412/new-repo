import { Row, Col, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Meta from 'antd/es/card/Meta';
import { Link } from 'react-router-dom';

const StyledCardList = styled.div`
	width: 100%;
	clear: both;
`;

const StyledCard = styled(Card)`
	&&& {
		border-radius: 8px;
		color: white;
		padding: 10px;
		position: relative;

		.anticon {
			color: white;
			font-size: 28px;
			opacity: 0.3;
			position: absolute;
			right: 13px;
			top: 13px;
		}
		.anticon {
			color: white;
			font-size: 28px;
			opacity: 0.5;
			position: absolute;
			right: 13px;
			top: 13px;
		}

		.stat {
			border-top: 1px solid rgba(255, 255, 255, 0.3);
			font-size: 16px;
			margin-top: 25px;
			padding: 10px 10px 0;
			text-transform: uppercase;
		}

		.title {
			color: white;
			display: inline-block;
			font-size: 18px;
			padding: 10px 10px 0;
			text-transform: uppercase;
		}

		.value {
			font-size: 28px;
			padding: 0 10px;
		}

		&.blue {
			background-color: #2298f1;
		}

		&.green {
			background-color: #66b92e;
		}

		&.orange {
			background-color: rgb(1 158 199);
		}

		&.red {
			background-color: #d65b4a;
		}
	}
`;

const DashCard = () => {
	return (
		<Card>
			<StyledCardList>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12} md={8} lg={8} xl={8}>
						<StyledCard className='blue'>
							<Meta title='Class Attendance' />
							<Link to={`/products/product`}>
								<PlusOutlined className='anticon' />
							</Link>
							<div className='value'>25000</div>
							<div className='stat'>
								<b>13</b>% increase
							</div>
						</StyledCard>
					</Col>
					<Col xs={24} sm={12} md={8} lg={8} xl={8}>
						<StyledCard className='green'>
							<Meta title='Materials Overview' />
							<Link to={`warehouses/client`}>
								{' '}
								<PlusOutlined className='anticon' />
							</Link>
							<div className='value'>5,990</div>
							<div className='stat'>
								<b>4</b>% increase
							</div>
						</StyledCard>
					</Col>
					<Col xs={24} sm={12} md={8} lg={8} xl={8}>
						<StyledCard className='orange'>
							<Meta title='Notice' />
							<Link to={`warehouses/staff`}>
								{' '}
								<PlusOutlined className='anticon' />
							</Link>
							<div className='value'>80,990</div>
							<div className='stat'>
								<b>13</b>% decrease
							</div>
						</StyledCard>
					</Col>
				</Row>
			</StyledCardList>
		</Card>
	);
};

export default DashCard;
