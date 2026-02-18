// src/hooks/useAuth.js
import { useState, useEffect } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("auth") === "true";
    setIsAuthenticated(loggedIn);
  }, []);

  return { isAuthenticated };
}
