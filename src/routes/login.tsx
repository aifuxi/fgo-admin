import { Button, Form, Layout, Toast, Typography } from "@douyinfe/semi-ui-19";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { login, type LoginRequest } from "../api/auth";
import { setToken } from "../utils/token";
import { useRequest } from "ahooks";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const navigate = useNavigate();

  const { loading, run } = useRequest(login, {
    manual: true,
    onSuccess(res) {
      setToken(res.data.token);
      navigate({ to: "/", replace: true });
      Toast.success({ content: "登录成功" });
    },
  });

  return (
    <Layout className="relative h-svh flex flex-col">
      <Layout.Header className="px-8 py-6">
        <Typography.Title heading={4}>Your Logo</Typography.Title>
      </Layout.Header>
      <Layout.Content className="flex-1 h-full grid grid-cols-12">
        <div className="col-span-7 flex flex-col h-full justify-center items-center">
          <div className="flex flex-col">
            <Typography.Title heading={2}>Sign In to</Typography.Title>
            <Typography.Paragraph className="text-2xl">
              Lorem lpssum is simply
            </Typography.Paragraph>
            <div className="flex flex-col pt-8">
              <Typography.Text>
                If you dont have an account register
              </Typography.Text>
              <Typography.Text>
                You can <Typography.Text link>Register here!</Typography.Text>
              </Typography.Text>
            </div>
          </div>
        </div>
        <div className="col-span-5 flex flex-col h-full justify-center">
          <Typography.Title heading={2}>Sign In</Typography.Title>

          <Form<LoginRequest>
            disabled={loading}
            layout="vertical"
            className="w-2xs"
            initValues={{ email: "admin@example.com", password: "123456" }}
            onSubmit={(values) => {
              run({
                email: values.email,
                password: values.password,
              });
            }}
          >
            <Form.Input
              field="email"
              label="邮箱"
              placeholder="请输入邮箱"
              rules={[
                { required: true, message: "请输入邮箱" },
                { type: "email", message: "请输入正确的邮箱格式" },
              ]}
            ></Form.Input>
            <Form.Input
              field="password"
              label="密码"
              placeholder="请输入密码"
              rules={[
                { required: true, message: "请输入密码" },
                { min: 6, message: "密码长度不能小于6位" },
                { max: 20, message: "密码长度不能大于20位" },
              ]}
            ></Form.Input>

            <Form.Slot noLabel>
              <Button
                theme="solid"
                type="primary"
                htmlType="submit"
                block
                loading={loading}
              >
                登录
              </Button>
            </Form.Slot>
          </Form>
        </div>
      </Layout.Content>
    </Layout>
  );
}
