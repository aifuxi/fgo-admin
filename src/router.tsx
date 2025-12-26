import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/main-layout";
import Login from "@/routes/login";
import Index from "@/routes";
import Category from "@/routes/category";
import Tag from "@/routes/tag";
import NiceModal from "@ebay/nice-modal-react";

const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
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
        path: "/category",
        Component: Category,
      },
      {
        path: "/tag",
        Component: Tag,
      },
    ],
  },
]);

export default router;
