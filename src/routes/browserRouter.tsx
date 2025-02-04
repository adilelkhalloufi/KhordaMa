import { createBrowserRouter } from "react-router-dom";
import { webRoutes } from "./web";
import ErrorPage from "@/components/errors/general-error";
import LayoutLanding from "@/components/landing/LayoutLanding";
import loadable from "@loadable/component";
import ProgressBar from "@/components/loader/progressBar";
import SingleProduct from "@/pages/SingleProduct";
import SignIn from "@/pages/SignIn";
import RequireAuth from "./requireAuth";
import Layout from "@/components/dashboard/layout";
import Register from "@/pages/register/index";
import Checkout from "@/pages/checkout";

// import RequireAuth from "./requireAuth";
// import ProgressBar from "@/components/loader/progressBar";
// import loadable from "@loadable/component";

// const errorElement = <ErrorPage />;
const fallbackElement = <ProgressBar />;

// const Dashboard = loadable(() => import("../pages/dashboard"), {
//   fallback: fallbackElement,
// });
// const Users = loadable(() => import("../pages/tasks"), {
//   fallback: fallbackElement,
// });

const Dashboard = loadable(() => import('../pages/dashboard'), {
  fallback: fallbackElement,
});

const Landing = loadable(() => import("../pages/landing"), {
  fallback: fallbackElement,
});
const Stagnant = loadable(() => import("../pages/ProductList"), {
  fallback: fallbackElement,
});

export const browserRouter = createBrowserRouter([
  {
    element: <LayoutLanding />,
    // errorElement: errorElement,
    children: [
      {
        path: webRoutes.home,
        element: <Landing />,
      },
      {
        path: webRoutes.stagnant,
        element: <Stagnant />,
      },
      {
        path: webRoutes.scarp,
        element: <Stagnant />,
      },
      {
        path: webRoutes.SingleProduit,
        element: <SingleProduct />,
      },
      {
        path: webRoutes.register,
        element: <Register />,
      },
  

    ],
  },

  {
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    // errorElement: errorElement,
    children: [
      {
        path: webRoutes.Dashboard,
        element: <Dashboard />,
      },

    ],
  },
  {
    element: (
      <RequireAuth>
        <LayoutLanding />
      </RequireAuth>
    ),
    // errorElement: errorElement,
    children: [
      {
        path: webRoutes.checkout,
        element: <Checkout />,
      },

    ],
  },
  {
    path: webRoutes.login,
    element: <SignIn />,
    // errorElement: errorElement,
  },
 
  {
    path: "*",
    element: <ErrorPage />,
    // errorElement: errorElement,
  },
]);
