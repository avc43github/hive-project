
import { Button } from "@/components/ui/button";
import { Bell, Home, MessageSquare, Plus, Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, label, active = false }) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
        active
          ? "bg-honey text-white hover:bg-honey-dark"
          : "hover:bg-honey/10"
      )}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </Link>
  );
};

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-honey/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-honey w-8 h-8 hexagon flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div>
            <span className="text-xl font-poppins font-bold text-honey-dark">Hive</span>
          </Link>
        </div>
        
        <div className="hidden lg:block max-w-md w-full px-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search Hive..." 
              className="w-full pl-10 pr-4 py-2 rounded-full bg-muted border border-honey/20 focus:outline-none focus:border-honey focus:ring-1 focus:ring-honey"
            />
          </div>
        </div>
        
        <nav className="flex items-center gap-1 md:gap-4">
          <NavLink 
            to="/" 
            icon={<Home className="h-5 w-5" />} 
            label="Home" 
            active={location.pathname === "/"} 
          />
          <NavLink 
            to="/messages" 
            icon={<MessageSquare className="h-5 w-5" />} 
            label="Messages" 
            active={location.pathname === "/messages"} 
          />
          <NavLink 
            to="/notifications" 
            icon={<Bell className="h-5 w-5" />} 
            label="Notifications" 
            active={location.pathname === "/notifications"} 
          />
          <Button 
            className="rounded-full bg-honey hover:bg-honey-dark hover:animate-buzz flex items-center justify-center"
            size="icon"
          >
            <Plus className="h-5 w-5" />
          </Button>
          <Link 
            to="/profile" 
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full transition-colors",
              location.pathname === "/profile" 
                ? "bg-honey text-white" 
                : "bg-honey/10 text-honey-dark hover:bg-honey/20"
            )}
          >
            <User className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
