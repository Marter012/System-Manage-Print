
import NavBar from "../NavBar/NavBar.tsx";
import Router from "../Router/Routes.tsx";
import { LayoutContainer } from "./LayoutStyles.ts";
const Layout = () => {
  

  return (
    <LayoutContainer>
      <NavBar />
      <Router />
    </LayoutContainer>
  );
};

export default Layout;
