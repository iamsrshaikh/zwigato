import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ContactUsPage from "./pages/contact-us";
import PageError from "./components/PageError/PageError";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/home"));
const AboutPage = lazy(() => import("./pages/about"));
const RecipiesPage = lazy(() => import("./pages/recipies"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageError />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            {" "}
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            {" "}
            <AboutPage />
          </Suspense>
        ),
      },
      { path: "contact", element: <ContactUsPage /> },
      {
        path: "recipies/:resId",
        element: (
          <Suspense fallback={<Loader />}>
            {" "}
            <RecipiesPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
