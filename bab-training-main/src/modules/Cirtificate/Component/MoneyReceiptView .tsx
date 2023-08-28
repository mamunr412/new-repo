import { useRef } from 'react';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, PrinterOutlined } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import SingleCirtificate from '../Pages/SingleCirtificate';

const buttonStyle = {
	backgroundColor: '#01796f',
	color: '#fff',
	minHeight: '40px',
};

const MoneyReceiptView = () => {
	const cashiercomponentRef = useRef(null);
	const handleCashierPrint = useReactToPrint({
		content: () => cashiercomponentRef.current,
		documentTitle: `Cirtificate`,
	});

	return (
		<div>
			<Card style={{ margin: '1rem 0' }}>
				<Link style={{ marginRight: '200px' }} to='/cirtificates'>
					<Button style={buttonStyle} type='primary'>
						<ArrowLeftOutlined />
						Return to Cirtificates List
					</Button>
				</Link>

				<Button style={buttonStyle} type='primary' onClick={handleCashierPrint}>
					<PrinterOutlined />
					Print
				</Button>
			</Card>
			<div ref={cashiercomponentRef}>
				<SingleCirtificate />
			</div>
		</div>
	);
};
export default MoneyReceiptView;
