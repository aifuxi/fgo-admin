import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/main-layout";
import Login from "@/routes/login";
import Index from "@/routes";
import Category from "@/routes/category";
import Tag from "@/routes/tag";
import User from "@/routes/user";
import NiceModal from "@ebay/nice-modal-react";
import BlogList from "@/routes/blog/blog-list";
import BlogCreate from "@/routes/blog/blog-create";
import { ROUTES } from "@/constants/route";

const router = createBrowserRouter([
  {
    path: ROUTES.Login.href,
    Component: Login,
  },
  {
    path: ROUTES.Home.href,
    element: (
      <NiceModal.Provider>
        <MainLayout />
      </NiceModal.Provider>
    ),
    children: [
      {
        index: true,
        Component: Index,
      },
      {
        path: ROUTES.Category.href,
        Component: Category,
      },
      {
        path: ROUTES.Tag.href,
        Component: Tag,
      },
      {
        path: ROUTES.User.href,
        Component: User,
      },
      {
        path: ROUTES.BlogList.href,
        Component: BlogList,
      },
      {
        path: ROUTES.BlogCreate.href,
        Component: BlogCreate,
      },
    ],
  },
]);

export default router;
