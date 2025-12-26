import {
  Layout,
  Nav,
  Button,
  Avatar,
  Dropdown,
  Typography,
} from "@douyinfe/semi-ui-19";
import {
  IconBell,
  IconHelpCircle,
  IconHome,
  IconHistogram,
  IconLive,
  IconSemiLogo,
  IconExit,
  IconUser,
} from "@douyinfe/semi-icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/route";
import { useState } from "react";
import { useMount } from "ahooks";

import LogoutConfirmModal from "./logout-confirm-modal";
import NiceModal from "@ebay/nice-modal-react";

export default function MainLayout() {
  const { Header, Footer, Sider, Content } = Layout;

  const location = useLocation();
  const navigate = useNavigate();

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  console.log("selectedKeys", selectedKeys);
  console.log("navigation.location?.pathname", location.pathname);

  useMount(() => {
    setSelectedKeys([location.pathname ?? ROUTES.Home.href]);
  });

  return (
    <Layout
      className="h-full"
      style={{ border: "1px solid var(--semi-color-border)" }}
    >
      <Sider style={{ backgroundColor: "var(--semi-color-bg-1)" }}>
        <Nav
          style={{ maxWidth: 220, height: "100%" }}
          selectedKeys={selectedKeys}
          items={[
            {
              itemKey: ROUTES.Home.href,
              text: ROUTES.Home.name,
              icon: <IconHome size="large" />,
              onClick: () => {
                setSelectedKeys([ROUTES.Home.href]);
                navigate(ROUTES.Home.href);
              },
            },
            {
              itemKey: ROUTES.Category.href,
              text: ROUTES.Category.name,
              icon: <IconHistogram size="large" />,
              onClick: () => {
                setSelectedKeys([ROUTES.Category.href]);
                navigate(ROUTES.Category.href);
              },
            },
            {
              itemKey: ROUTES.Tag.href,
              text: ROUTES.Tag.name,
              icon: <IconLive size="large" />,
              onClick: () => {
                setSelectedKeys([ROUTES.Tag.href]);
                navigate(ROUTES.Tag.href);
              },
            },
          ]}
          header={{
            logo: <IconSemiLogo style={{ fontSize: 36 }} />,
            text: "Semi Design",
          }}
          footer={{
            collapseButton: true,
          }}
        />
      </Sider>
      <Layout className="relative">
        <Header
          className="sticky top-0 z-10"
          style={{ backgroundColor: "var(--semi-color-bg-1)" }}
        >
          <Nav
            mode="horizontal"
            footer={
              <>
                <Button
                  theme="borderless"
                  icon={<IconBell size="large" />}
                  style={{
                    color: "var(--semi-color-text-2)",
                    marginRight: "12px",
                  }}
                />
                <Button
                  theme="borderless"
                  icon={<IconHelpCircle size="large" />}
                  style={{
                    color: "var(--semi-color-text-2)",
                    marginRight: "12px",
                  }}
                />
                <Dropdown
                  position="bottomLeft"
                  render={
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <div className="flex items-center gap-4">
                          <Avatar color="violet" size="small">
                            FC
                          </Avatar>
                          <div>
                            <Typography.Text strong>aifuxi</Typography.Text>
                            <div>UID: 1000000000</div>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item icon={<IconUser />}>
                        个人设置
                      </Dropdown.Item>
                      <Dropdown.Item
                        icon={<IconExit />}
                        onClick={() => NiceModal.show(LogoutConfirmModal)}
                      >
                        退出登录
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  }
                >
                  <div>
                    <Avatar color="violet" size="small">
                      FC
                    </Avatar>
                  </div>
                </Dropdown>
              </>
            }
          ></Nav>
        </Header>
        <Content
          style={{
            padding: "24px",
            backgroundColor: "var(--semi-color-bg-0)",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            color: "var(--semi-color-text-2)",
            backgroundColor: "rgba(var(--semi-grey-0), 1)",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>Copyright © 2025 fgo. All Rights Reserved. </span>
          </span>
          <span>
            <span style={{ marginRight: "24px" }}>平台客服</span>
            <span>反馈建议</span>
          </span>
        </Footer>
      </Layout>
    </Layout>
  );
}
