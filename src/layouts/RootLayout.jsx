import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
