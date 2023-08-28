import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export default function MatchOtp({ verifyOTP, isLoading }: any) {
  const [form] = Form.useForm();
  return (
    <Form
      style={{ marginTop: "20px" }}
      onFinish={verifyOTP}
      form={form}
      className='login-form'
    >
      <Form.Item
        name='otp'
        rules={[
          {
            required: true,
            message: "Please input your valid otp!",
          },
        ]}
      >
        <Input
          style={{ width: "35vh" }}
          prefix={
            <UserOutlined type='user' style={{ color: "rgba(0,0,0,.25)" }} />
          }
          placeholder='0123105'
        />
      </Form.Item>

      <Form.Item>
        {isLoading.match ? (
          <Button
            type='primary'
            loading
            style={{ minWidth: "100%", margin: "5px 0" }}
          >
            Loading
          </Button>
        ) : (
          <Button
            type='primary'
            htmlType='submit'
            style={{ minWidth: "100%", margin: "5px 0" }}
          >
            Verify
          </Button>
        )}
      </Form.Item>
    </Form>
  );
}
