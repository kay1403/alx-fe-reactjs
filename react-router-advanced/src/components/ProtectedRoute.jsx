import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Simule une vérification d'authentification
const isAuthenticated = true; // mets false pour tester la redirection

function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;
