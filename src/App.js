import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactUsPage from "./pages/contact-us";
import PageError from "./components/PageError/PageError";
import Layout from "./components/Layout/Layout";
import RecipiesPage from "./pages/recipies";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageError />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactUsPage /> },
      { path: "recipies/:resId", element: <RecipiesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
