import ReactDOM from "react-dom/client";
import PubSub from "pubsub-js";

import "./index.css";

import { TOPIC_API_ERROR } from "./constants/eventTopic";
import { ConfigProvider, Toast } from "@douyinfe/semi-ui-19";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes";
import Login from "./routes/login";
import About from "./routes/about";
import MainLayout from "./components/layout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Index,
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);

// 全局配置 Toast 组件
Toast.config({
  theme: "light",
});

// 监听 API 错误事件
PubSub.subscribe(TOPIC_API_ERROR, (_, msg: unknown) => {
  Toast.error({ content: String(msg) });
});

// Render the app
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
