import styled from "styled-components";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const LayoutStyles = styled.div`
  main {
    min-height: 90vh;
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutStyles>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  );
};

export default Layout;
