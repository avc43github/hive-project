
import { Button } from "@/components/ui/button";
import Hexagon from "../ui/hexagon";
import { Search, Star, Users } from "lucide-react";

const RightSidebar = () => {
  return (
    <aside className="hidden lg:block w-72 h-[calc(100vh-64px)] border-l border-honey/20 sticky top-16 py-6 px-4 overflow-y-auto">
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Trending</h2>
          <div className="space-y-4">
            {["Web3", "React", "AI", "Design"].map((topic) => (
              <div
                key={topic}
                className="p-3 honey-card hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 hexagon bg-honey/20 flex items-center justify-center">
                    <Star className="h-4 w-4 text-honey" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">#{topic}</p>
                    <p className="text-xs text-muted-foreground">1.2k posts</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Who to Follow</h2>
            <Button variant="link" size="sm" className="text-honey">
              See all
            </Button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-3 honey-card hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 hexagon bg-honey/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-honey" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">User {i}</p>
                      <p className="text-xs text-muted-foreground">
                        @user{i} • Developer
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-honey text-honey hover:bg-honey hover:text-white"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="honey-card p-4">
          <h3 className="text-base font-medium mb-2">
            Find people you know
          </h3>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search contacts..." 
              className="w-full pl-10 py-2 rounded-full bg-muted border border-honey/20 focus:outline-none focus:border-honey focus:ring-1 focus:ring-honey"
            />
          </div>
          <Button variant="outline" className="w-full border-honey text-honey hover:bg-honey hover:text-white">
            Import Contacts
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
