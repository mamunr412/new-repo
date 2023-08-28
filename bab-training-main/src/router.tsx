import { createBrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import AppLayout from "./components/AppLayout/AppLayout";
import Dashboard from "./modules/Dashboard/Pages/Dashboard";
import Classes from "./modules/Classes/Pages/Classes";
import Profile from "./modules/Profile/Pages/Profile";
import MyInfo from "./modules/MyInfo/Pages/MyInfo";
import Materials from "./modules/Materials/Page/Materials";
import MoneyReceiptView from "./modules/Cirtificate/Component/MoneyReceiptView ";
import ProtectedRoute from "./utils/ProtectRoute";
import ForgetPassword from "./auth/Pages/ForgetPassword";
import Login from "./auth/Pages/Login";
import Certificate from "./modules/Cirtificate/Pages/Certificate";
import SingleClass from "./modules/Classes/Pages/SingleClass";

export const routes = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/",
    element: <ProtectedRoute component={<AppLayout />} />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "materials",
        element: <Materials />,
      },
      {
        path: "Certificates",
        element: <Certificate />,
      },
      {
        path: "Certificates/single",
        element: <MoneyReceiptView />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "classes/:id",
        element: <SingleClass />,
      },
      {
        path: "my-info",
        element: <MyInfo />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
