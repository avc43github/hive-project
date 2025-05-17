
import { cn } from "@/lib/utils";
import Hexagon from "../ui/hexagon";
import { Hexagon as HexagonIcon, Home, Search, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  icon,
  label,
  to,
  active = false,
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
        active
          ? "bg-honey text-white font-medium"
          : "hover:bg-honey/10 text-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const LeftSidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="hidden md:block w-64 h-[calc(100vh-64px)] border-r border-honey/20 sticky top-16 overflow-y-auto py-6 px-2">
      <div className="space-y-6">
        <div className="space-y-1">
          <SidebarLink
            icon={<Home className="h-5 w-5" />}
            label="Home"
            to="/"
            active={location.pathname === "/"}
          />
          <SidebarLink
            icon={<Search className="h-5 w-5" />}
            label="Explore"
            to="/explore"
            active={location.pathname === "/explore"}
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground px-4 mb-3">
            Your Clusters
          </h3>
          <div className="space-y-1">
            <SidebarLink
              icon={<HexagonIcon className="h-5 w-5 text-teal" />}
              label="Tech Hive"
              to="/cluster/tech"
            />
            <SidebarLink
              icon={<HexagonIcon className="h-5 w-5 text-lavender-dark" />}
              label="Creative Swarm"
              to="/cluster/creative"
            />
            <SidebarLink
              icon={<HexagonIcon className="h-5 w-5 text-amber" />}
              label="Gaming Buzz"
              to="/cluster/gaming"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground px-4 mb-3">
            Suggested Clusters
          </h3>
          <div className="space-y-1">
            <SidebarLink
              icon={<HexagonIcon className="h-5 w-5 text-orange-dark" />}
              label="Food Lovers"
              to="/cluster/food"
            />
            <SidebarLink
              icon={<HexagonIcon className="h-5 w-5 text-honey-dark" />}
              label="Fitness Hub"
              to="/cluster/fitness"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground px-4 mb-3">
            Friends
          </h3>
          <div className="px-4 space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-honey/20 flex items-center justify-center">
                  <Users className="h-4 w-4 text-honey" />
                </div>
                <div>
                  <p className="text-sm font-medium">User {i}</p>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
