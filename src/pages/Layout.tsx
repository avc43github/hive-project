
import LeftSidebar from "@/components/layout/LeftSidebar";
import Navbar from "@/components/layout/Navbar";
import RightSidebar from "@/components/layout/RightSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 w-full">
        <LeftSidebar />
        <main className="flex-1">{children}</main>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
