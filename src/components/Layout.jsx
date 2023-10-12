import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "@mui/material/Container";

const Layout = () => {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: "40px", paddingBottom: "40px" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
