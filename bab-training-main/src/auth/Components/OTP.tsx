import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export default function OTP({ onFinish, isLoading }: any) {
  const [form] = Form.useForm();
  return (
    <Form
      style={{ marginTop: "20px" }}
      onFinish={onFinish}
      form={form}
      className='login-form'
    >
      <Form.Item
        name='email'
        rules={[
          {
            required: true,
            message: "Please input your username/email!",
          },
        ]}
      >
        <Input
          style={{ width: "35vh" }}
          prefix={
            <UserOutlined type='user' style={{ color: "rgba(0,0,0,.25)" }} />
          }
          placeholder='ex@gmail.com'
        />
      </Form.Item>

      <Form.Item>
        {isLoading.otp ? (
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
            Get OTP
          </Button>
        )}

        <br />
      </Form.Item>
    </Form>
  );
}
