import { Button, Form } from "@douyinfe/semi-ui-19";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div className="grid place-items-center h-svh">
      <Form layout="vertical" className="w-2xs">
        <Form.Input
          field="phone"
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
          <Button theme="solid" type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Slot>
      </Form>
    </div>
  );
}
