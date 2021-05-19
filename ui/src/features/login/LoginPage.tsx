import { Button, Form, FormItemProps, Input } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useHistory } from "react-router";
import LoginTitle from "./components/login-title";

import "./LoginPage.scss";

const layout: FormItemProps = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout: FormItemProps = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function LoginPage() {
  const history = useHistory();

  return (
    <Content className="harbor-login-page">
      <LoginTitle />
      <Form onFinish={() => history.push("/")}>
        <Form.Item label="ID" name="id" className="login-form-item" {...layout}>
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          className="login-form-item"
          {...layout}
        >
          <Input.Password></Input.Password>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit" type="primary">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
}
