import { createBrowserRouter } from "react-router-dom";
import { webRoutes } from "./web";
import ErrorPage from "@/components/errors/general-error";
import LayoutLanding from "@/components/landing/LayoutLanding";
import loadable from "@loadable/component";
import ProgressBar from "@/components/loader/progressBar";
import SingleProduct from "@/pages/SingleProduct";

// import RequireAuth from "./requireAuth";
// import { LayoutSh } from "@/components/dashboard/custom/layout";
// import ProgressBar from "@/components/loader/progressBar";
// import loadable from "@loadable/component";

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

const Landing = loadable(() => import("../pages/landing"), {
  fallback: fallbackElement,
});
const Stagnant = loadable(() => import('../pages/ProductList'), {
  fallback: fallbackElement,
});

export const browserRouter = createBrowserRouter([
  {
    element: (
      <LayoutLanding />
    ),
    errorElement: errorElement,
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
        path: webRoutes.SingleProduit,
        element: <SingleProduct/>,
      }



    ],
  },


  // {
  //   element: (
  //     <RequireAuth>
  //       <LayoutSh />
  //     </RequireAuth>
  //   ),
  //   errorElement: errorElement,
  //   children: [

  //   ],
  // },

  // {
  //   path: "*",
  //   element: <ErrorPage />,
  //   errorElement: errorElement,
  // },
]);