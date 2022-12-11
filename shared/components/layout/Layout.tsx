import Navbar from "../Navbar/Navbar";

interface IChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: IChildren) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
