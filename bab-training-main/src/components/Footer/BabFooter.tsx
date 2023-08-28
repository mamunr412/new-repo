import { Button, Col, Input, Row } from "antd";
import footerLogo from '../../assets/footer-logo.png';
export default function BabFooter() {
  return (
    <div style={{ backgroundColor: 'black', color: '#fff',padding:'1rem' }}>
      <Row style={{ width: '80%', display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
        <Col xs={24} md={12} lg={4}>
          <img width={300} height={80} src={footerLogo} alt="" />
          <p style={{ padding: '1rem', textAlign: 'justify' }}>Bangladesh Association of Banks (BAB) is an advisory service organization for the private sector commercial banks. It has now emerged as an effective forum for exchanging views on problems being faced by the banking sector of Bangladesh and for formulating common policy guidelines in addressing such problems.</p>
        </Col>
        <Col xs={24} md={12} lg={4}>
          <h3>Subscribe For Monthly Newsletter</h3>
          <Input style={{ width: 200 }} placeholder="Enter your email address" />
          <Button>primary</Button>
        </Col>
        <Col xs={24} md={12} lg={4}>
          <h3>Contact us</h3>
          <address>Jabbar Tower (16th Floor),
            42 Gulshan Avenue,
            Road-135, Dhaka-1212
            Phone: 02222263478, 02222298885, 02222260301
            Fax : 02222295015
            Email: info@bab-bd.com</address>
        </Col>
        <Col xs={24} md={12} lg={4}>
          <h3>Follow us</h3>

        </Col>
        <span style={{ textAlign: 'center' }}>© 2022 Bangladesh Association of Banks (BAB). All rights reserved. A Collaboration between Alpha Net & CallSoft , Powered By BAB</span>
      </Row>
   </div>
  )
}
