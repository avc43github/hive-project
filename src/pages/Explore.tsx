
import { useState } from "react";
import Layout from "./Layout";
import { Search, Hexagon, User, Hash, TrendingUp, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Cluster {
  id: string;
  name: string;
  description: string;
  members: number;
  color: string;
}

interface Trend {
  id: string;
  name: string;
  posts: number;
}

interface UserProfile {
  id: string;
  name: string;
  username: string;
  bio: string;
}

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const clusters: Cluster[] = [
    {
      id: "1",
      name: "Tech Hive",
      description: "A community for tech enthusiasts and developers",
      members: 3240,
      color: "teal",
    },
    {
      id: "2",
      name: "Creative Swarm",
      description: "For designers, artists and creative minds",
      members: 5100,
      color: "lavender-dark",
    },
    {
      id: "3",
      name: "Gaming Buzz",
      description: "All things gaming - new releases, discussions, streams",
      members: 8700,
      color: "amber",
    },
    {
      id: "4",
      name: "Food Lovers",
      description: "Recipes, restaurant reviews, cooking tips",
      members: 2100,
      color: "orange-dark",
    },
    {
      id: "5",
      name: "Fitness Hub",
      description: "Workouts, nutrition advice, and wellness",
      members: 4500,
      color: "honey-dark",
    },
  ];
  
  const trends: Trend[] = [
    { id: "1", name: "#HiveMindChallenge", posts: 4500 },
    { id: "2", name: "#CreativeCollaboration", posts: 3200 },
    { id: "3", name: "#TechTuesday", posts: 2800 },
    { id: "4", name: "#GamersUnite", posts: 5300 },
    { id: "5", name: "#ArtificialIntelligence", posts: 6700 },
  ];
  
  const users: UserProfile[] = [
    {
      id: "1",
      name: "Alex Johnson",
      username: "@alexj",
      bio: "UX Designer | Tech enthusiast | Coffee lover",
    },
    {
      id: "2",
      name: "Sarah Miller",
      username: "@sarahm",
      bio: "Digital artist | Creative Swarm moderator",
    },
    {
      id: "3",
      name: "James Wilson",
      username: "@jwilson",
      bio: "Full-stack developer | Open source contributor",
    },
    {
      id: "4",
      name: "Emma Taylor",
      username: "@emmat",
      bio: "Game developer | Streaming on Twitch",
    },
    {
      id: "5",
      name: "Michael Brown",
      username: "@michaelb",
      bio: "AI researcher | Tech writer | Speaker",
    },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "teal": return "text-teal";
      case "lavender-dark": return "text-lavender-dark";
      case "amber": return "text-amber";
      case "orange-dark": return "text-orange-dark";
      case "honey-dark": return "text-honey-dark";
      default: return "text-honey";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Explore</h1>
          <div className="max-w-md w-full relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for clusters, users, or topics..."
              className="pl-10 pr-4 py-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Tabs defaultValue="clusters">
            <div className="border-b border-honey/20">
              <TabsList className="w-full justify-start p-0 h-auto bg-transparent">
                <TabsTrigger 
                  value="clusters" 
                  className="py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-honey rounded-none"
                >
                  <Hexagon className="h-4 w-4 mr-2" />
                  Clusters
                </TabsTrigger>
                <TabsTrigger 
                  value="trending" 
                  className="py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-honey rounded-none"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Trending
                </TabsTrigger>
                <TabsTrigger 
                  value="people" 
                  className="py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-honey rounded-none"
                >
                  <Users className="h-4 w-4 mr-2" />
                  People
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="clusters" className="m-0">
              <ScrollArea className="h-[calc(100vh-250px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  {clusters.map((cluster) => (
                    <div
                      key={cluster.id}
                      className="border border-honey/20 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`${getColorClass(cluster.color)} rounded-full bg-honey/10 w-12 h-12 flex items-center justify-center shrink-0`}>
                          <Hexagon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">{cluster.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {cluster.description}
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Users className="h-3 w-3 mr-1" />
                            {cluster.members.toLocaleString()} members
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button className="bg-honey hover:bg-honey-dark text-white">
                          Join Cluster
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="trending" className="m-0">
              <ScrollArea className="h-[calc(100vh-250px)]">
                <div className="p-4 space-y-4">
                  {trends.map((trend) => (
                    <div
                      key={trend.id}
                      className="border border-honey/20 rounded-lg p-4 hover:bg-honey/5 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          <div className="bg-honey/10 rounded-full w-10 h-10 flex items-center justify-center">
                            <Hash className="h-5 w-5 text-honey" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{trend.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {trend.posts.toLocaleString()} posts
                          </p>
                        </div>
                        <Button variant="outline" className="text-honey hover:text-honey-dark hover:bg-honey/10">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="people" className="m-0">
              <ScrollArea className="h-[calc(100vh-250px)]">
                <div className="p-4 space-y-4">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="border border-honey/20 rounded-lg p-4 hover:bg-honey/5 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          <div className="bg-honey/20 w-12 h-12 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-honey" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{user.name}</h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            {user.username}
                          </p>
                          <p className="text-sm line-clamp-2">
                            {user.bio}
                          </p>
                        </div>
                        <Button className="bg-honey hover:bg-honey-dark text-white">
                          Follow
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
