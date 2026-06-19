import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext.jsx";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />; // not logged in → redirect
  }

  return children; // logged in → show the page
}
export default ProtectedRoute;
