import React from "react";
import "./styles.css";
import { Router } from "./router/Router";
import { UserProvider } from "./provider/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
