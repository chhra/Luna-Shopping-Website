import React from "react";
import { useAuth } from "./contexts/AuthContext";
import { Navigate } from "react-router-dom";
function AdminRoute({ children }) {
  const { user } = useAuth();
  if (!user || !user.isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default AdminRoute;
