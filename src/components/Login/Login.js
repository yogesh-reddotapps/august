import React from "react";
import "./Login.css";
import { Form, Input, Checkbox, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function Login() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div
      className="login_background"
      style={{
        backgroundImage: `url(/img/background.jpg)`,
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="login_container">
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img src="/img/logo.png" />
        </div>
        <div style={{ width: "100%" }}>
          <Form
            name="basic"
            layout="vertical"
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="NRIC/FIN Number" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="4 Digit Pin" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <div
              style={{
                textAlign: "center",
                marginTop: "22px",
                marginBottom: "10px",
              }}
            >
              Forgot your Login 4 Digit PIN?
              <br />
              <span style={{ color: "#0068B3" }}>Reset your PIN</span>
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  marginTop: "17px",
                  marginBottom: "12px",
                }}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
          {/* <div style={{ marginBottom: "20px" }}>
            <label className="text-username">Username</label>
            <Input
              style={{ marginTop: "10px" }}
              placeholder="NRIC/FIN Number"
            />
          </div> */}
          {/* <div>
            <label className="text-username">Password</label>
            <Input style={{ marginTop: "10px" }} placeholder="4 Digit PIN" />
          </div>
          <div></div> */}
        </div>
        {/* <Checkbox style={{ marginTop: "5px" }} onChange={onChange}>
          Remember Me
        </Checkbox> */}

        {/* <div>
          <Button
            type="primary"
            style={{ width: "100%", marginTop: "17px", marginBottom: "12px" }}
          >
            <Link to="/">Log In</Link>
          </Button>
        </div> */}
        <div className="belowloginbutton">
          By continuing, you agree to the August International Pte Ltd{" "}
          <span style={{ color: "#0068B3" }}>Terms & Services</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
