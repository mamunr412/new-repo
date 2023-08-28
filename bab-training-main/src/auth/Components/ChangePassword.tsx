import { Button, Form, Input } from "antd";

export default function ChangePassword({ SetPassword, isLoading }: any) {
  const [form] = Form.useForm();
  return (
    <Form
      style={{ marginTop: "20px" }}
      onFinish={SetPassword}
      form={form}
      layout='vertical'
      className='login-form'
    >
      <Form.Item
        name='changePassword1'
        label='New password'
        rules={[
          {
            required: true,
            message: "Please input password!",
          },
        ]}
      >
        <Input.Password style={{ width: "30vh" }} />
      </Form.Item>
      <Form.Item
        style={{ marginTop: "5px" }}
        name='changePassword2'
        label='Retype password'
        rules={[
          {
            required: true,
            message: "Retype password",
          },
        ]}
      >
        <Input.Password style={{ width: "30vh" }} />
      </Form.Item>

      <Form.Item>
        {isLoading.changePassword ? (
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
            Change Password
          </Button>
        )}
      </Form.Item>
    </Form>
  );
}
