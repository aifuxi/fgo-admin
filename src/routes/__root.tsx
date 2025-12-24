import { Layout } from "@douyinfe/semi-ui-19";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <Layout>
    <Outlet />
    <TanStackRouterDevtools />
  </Layout>
);

export const Route = createRootRoute({ component: RootLayout });
