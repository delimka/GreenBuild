import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import { ProductsPage } from "@/pages/products";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/products/:id", element: <ProductsPage /> },
    ],
  },
]);
