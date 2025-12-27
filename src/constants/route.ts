export const ROUTES = {
  Login: {
    href: "/login",
    name: "登录",
  },
  Home: {
    href: "/",
    name: "首页",
  },
  Category: {
    href: "/category",
    name: "博客分类",
  },
  Tag: {
    href: "/tag",
    name: "博客标签",
  },
  Blog: {
    href: "/blog",
    name: "博客",
  },
  BlogList: {
    href: "/blog/list",
    name: "博客列表",
  },
  BlogCreate: {
    href: "/blog/create",
    name: "创建博客",
  },
} as const;
