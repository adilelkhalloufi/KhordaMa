import { createBrowserRouter } from "react-router-dom";
import { webRoutes } from "./web";
import loadable from "@loadable/component";
import ProgressBar from "@/components/loader/progressBar";
import RequireAuth from "./requireAuth";
import Layout from "@/components/dashboard/layout";
import Redirect from "./Redirect";
import App from "@/App";
import ErrorPage from "@/components/errors/general-error";

const errorElement = <ErrorPage />;
const fallbackElement = <ProgressBar />;

// const Dashboard = loadable(() => import("../pages/dashboard"), {
//   fallback: fallbackElement,
// });
// const Users = loadable(() => import("../pages/tasks"), {
//   fallback: fallbackElement,
// });

// const Login = loadable(() => import("../pages/auth/sign-in"), {
//   fallback: fallbackElement,
// });

// const Sales = loadable(() => import("../pages/sales"), {
//   fallback: fallbackElement,
// });
// const Company = loadable(() => import('../pages/company'), {
//   fallback: fallbackElement,
// });

export const browserRouter = createBrowserRouter([
  {
    path: webRoutes.home,
    element: <App />,
    errorElement: errorElement,
  },

  // auth routes
  // {
  //   path: webRoutes.login,

  //   element: <Login />,
  //   errorElement: errorElement,
  // },

  // protected routes
  {
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    errorElement: errorElement,
    children: [
      // {
      //   path: webRoutes.Dashboard,
      //   element: <Dashboard />,
      // },
      // {
      //   path: webRoutes.Vente,
      //   element: <Sales />,
      // },
      // {
      //   path: webRoutes.Societe,
      //   element: <Company />,
      // },
      // {
      //   path: webRoutes.Clients,
      //   element: <Users />,
      // },
    ],
  },

  // 404
  {
    path: "*",
    element: <ErrorPage />,
    errorElement: errorElement,
  },
]);
