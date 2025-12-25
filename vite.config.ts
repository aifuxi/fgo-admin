import { defineConfig, loadEnv } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import vitePluginImp from "vite-plugin-imp";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  console.log("加载的环境变量：", env); // 打印验证！

  return {
    plugins: [
      // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
      }),

      react({
        babel: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      }),

      tailwindcss(),

      vitePluginImp({
        // 配置 Semi 按需加载，禁用自动导入样式
        libList: [
          {
            libName: "@douyinfe/semi-ui-19",
            style: () => false, // 核心：设置为 false，禁用自动导入样式
            // 若需手动导入 LESS 而非 CSS，可配置 style 路径（可选）
            // style: (name) => `@semi-bot/semi-theme-fgo/semi.css`,
          },
          // 若使用 Semi 图标库，也需禁用自动导入
        ],
      }),
    ],

    server: {
      // 代理配置
      proxy: {
        // 匹配以 /api 开头的请求（前端请求路径）
        "/api": {
          target: env.VITE_API_BASE_URL, // 后端接口的基础域名（真实请求地址）
          changeOrigin: true, // 关键：修改请求头的 Origin 为 target 域名（解决跨域核心）
          // 可选：支持 HTTPS 接口（如后端是 https 域名）
          // secure: false, // 忽略 SSL 证书验证（开发环境用）
          // 可选：自定义请求头
          // headers: {
          //   'X-Real-IP': '127.0.0.1'
          // }
        },
      },
    },
  };
});
