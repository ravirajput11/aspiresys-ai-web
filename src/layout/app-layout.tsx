import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="bg-[#FAFAFA]">
        {/* Dynamically renders the child route */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
