import { Button, Col, Form, Input, Row, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import bablogo from "../../assets/bab-logo.png";
import { HttpClient } from "../../app/Api/HTTPClient";
import Cookies from "js-cookie";
import { useAuthContext } from "../../app/Context/AuthContext";
import { AUTH_USER_FAILED, AUTH_USER_SUCCESS } from "../../app/Api/Constant";
import { showToast } from "../../common/Toaster";

type IInputs = {
  email: string;
  password: string;
  remember?: boolean;
};

function Login() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { dispatch, isLoading, setIsLoading } = useAuthContext();

  const onFinish = async (values: IInputs) => {
    const rest = values;
    try {
      setIsLoading?.(true);
      const { data, token, success } = await HttpClient.post<any>(
        "/auth/trainee/login",
        rest
      );

      if (success) {
        dispatch?.({
          type: AUTH_USER_SUCCESS,
          payload: data,
        });

        showToast(`Successfully logged In`, "success");

        Cookies.set("trainee_token", token);
        setIsLoading?.(false);
        navigate("/");
      } else {
        setIsLoading?.(false);
      }
    } catch (err: any) {
      // console.log(err?.response?.data.message);
      dispatch?.({
        type: AUTH_USER_FAILED,
      });
      showToast(`${err?.response?.data.message}`, "error");
      setIsLoading?.(false);
    }
  };

  return (
    <Row
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        background: "#d6e4ff",
      }}
    >
      <Col sm={24} md={12}>
        <div
          className='login-card'
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            minHeight: "500px",
            width: "500px",
            margin: "0 auto",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div>
            <img
              style={{ margin: "1rem auto", display: "block" }}
              width={110}
              src={bablogo}
              alt=''
            />
            <Typography.Title
              level={4}
              style={{ margin: "15px 0", textAlign: "center" }}
            >
              Login
            </Typography.Title>

            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "30vh",
                width: "35vh",
              }}
              layout='vertical'
              onFinish={onFinish}
              form={form}
              className='login-form'
            >
              <Form.Item
                name='email'
                label='Email'
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input
                  prefix={
                    <UserOutlined
                      type='user'
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  placeholder='ex@gmail.com'
                />
              </Form.Item>
              <Form.Item
                name='password'
                label='Password'
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input.Password
                  minLength={8}
                  prefix={
                    <LockOutlined
                      type='lock'
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  type='password'
                  placeholder='Password'
                  iconRender={(visible: unknown) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>

              <Form.Item>
                {isLoading ? (
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
                    Log in
                  </Button>
                )}
              </Form.Item>
              <Form.Item style={{ textAlign: "center" }}>
                <Link to='/forget-password'>Forget password?</Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
