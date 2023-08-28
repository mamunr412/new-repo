import { Col, Row, Typography } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bablogo from "../../assets/bab-logo.png";
import { HttpClient } from "../../app/Api/HTTPClient";
import Cookies from "js-cookie";
import OTP from "../Components/OTP";
import ChangePassword from "../Components/ChangePassword";
import MatchOtp from "../Components/MatchOtp";
import axios from "axios";
import { baseurl } from "../../app/Api/Constant";
import { showToast } from "../../common/Toaster";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [verify, setVerify] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState({
    otp: false,
    match: false,
    changePassword: false,
  });

  const onFinish = async (values: any) => {
    const body: any = {
      email: values?.email,
      type: "forget_trainee",
    };
    setEmail(values?.email);

    try {
      setIsLoading({
        ...isLoading,
        otp: true,
      });
      const { success } = await HttpClient.post<any>(
        "/common/send-email-otp",
        body
      );
      if (success) {
        showToast(`We sent verification code in ${values?.email} `, "success");
        setSuccess(true);
        setIsLoading({
          ...isLoading,
          otp: false,
        });
      } else {
        setIsLoading({
          ...isLoading,
          otp: false,
        });
      }
    } catch (err: any) {
      showToast(err?.response?.data.message, "error");
      setIsLoading({
        ...isLoading,
        otp: false,
      });
    }
  };

  const verifyOTP = async (values: any) => {
    const body: any = {
      email,
      otp: values?.otp.toString(),
      type: "forget_trainee",
    };
    try {
      setIsLoading({
        ...isLoading,
        match: true,
      });
      const { data } = await axios.post(
        `${baseurl}/common/match-email-otp`,
        body
      );
      if (data.success) {
        Cookies.set("trainee_forget_token", data.token);
        setVerify(true);
        setIsLoading({
          ...isLoading,
          match: false,
        });
      } else {
        setIsLoading({
          ...isLoading,
          match: false,
        });
      }
    } catch (err: any) {
      showToast(err?.response?.data.message, "error");

      setIsLoading({
        ...isLoading,
        match: false,
      });
    }
  };

  const SetPassword = async (values: any) => {
    if (values.changePassword1.length < 8) {
      showToast("Password must be at least 8 characters", "error");
      setIsLoading({
        ...isLoading,
        changePassword: false,
      });
      return;
    }
    if (values.changePassword1 !== values.changePassword2) {
      showToast("password does not match", "error");
      setIsLoading({
        ...isLoading,
        changePassword: false,
      });
      return;
    }

    const token = Cookies.get("trainee_forget_token");
    const body: any = {
      token,
      email,
      password: values?.changePassword2,
    };
    try {
      setIsLoading({
        ...isLoading,
        changePassword: true,
      });
      const { data } = await axios.post(
        `${baseurl}/auth/trainee/forget-password`,
        body
      );

      if (data.success) {
        setSuccess(true);
        Cookies.remove("trainee_forget_token");
        setIsLoading({
          ...isLoading,
          changePassword: false,
        });
        showToast(data.message, "success");
        navigate("/login");
      } else {
        setIsLoading({
          ...isLoading,
          changePassword: false,
        });
      }
    } catch (err: any) {
      showToast(err?.response?.data.message, "error");
      setIsLoading({
        ...isLoading,
        changePassword: false,
      });
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
              style={{ margin: "auto", display: "block" }}
              width={100}
              src={bablogo}
              alt=''
            />
            <Typography.Title
              level={4}
              style={{ margin: "15px 0", textAlign: "center" }}
            >
              Forget Password
            </Typography.Title>
            {!success && !verify && (
              <OTP onFinish={onFinish} isLoading={isLoading} />
            )}
            {success && !verify && (
              <MatchOtp verifyOTP={verifyOTP} isLoading={isLoading} />
            )}
            {verify && (
              <ChangePassword SetPassword={SetPassword} isLoading={isLoading} />
            )}

            <div style={{ textAlign: "center" }}>
              <Link to='/login'>Already have account?</Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ForgetPassword;
