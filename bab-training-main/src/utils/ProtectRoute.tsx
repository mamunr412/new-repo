import { Navigate } from "react-router-dom";
import { useAuthContext } from "../app/Context/AuthContext";
import GlobalLoader from "../common/GlobalLoader";
interface IProps {
  component: JSX.Element;
}

const ProtectedRoute = ({ component }: IProps) => {
  const { user, isLoading } = useAuthContext();
  if (isLoading) {
    return <GlobalLoader />;
  }
  if (!user.id) {
    return <Navigate to='/login' replace />;
  } else {
    return component;
  }
};

export default ProtectedRoute;
