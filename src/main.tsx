import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import PubSub from "pubsub-js";

import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { TOPIC_API_ERROR } from "./constants/eventTopic";
import { ConfigProvider, Toast } from "@douyinfe/semi-ui-19";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// 全局配置 Toast 组件
Toast.config({
  theme: "light",
});

// 监听 API 错误事件
PubSub.subscribe(TOPIC_API_ERROR, (_, msg: string) => {
  Toast.error({ content: msg });
});

// Render the app
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ConfigProvider>
        <RouterProvider router={router} />
      </ConfigProvider>
    </StrictMode>
  );
}
