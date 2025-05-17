
import { Button } from "@/components/ui/button";
import { Calendar, Link, MapPin, Settings, User } from "lucide-react";
import Layout from "./Layout";
import PostCard from "@/components/post/PostCard";
import Hexagon from "@/components/ui/hexagon";

const dummyPosts = [
  {
    id: "1",
    content: "Just launched a new collaborative open-source project! Looking for developers to join our hive. #WebDev #Collaboration",
    authorName: "Alex Johnson",
    authorUsername: "alexj",
    timestamp: "2h ago",
    likes: 24,
    comments: 5,
  },
  {
    id: "2",
    content: "Working on a new design system with hexagonal patterns. Inspired by nature's perfect structures. #Design #UI",
    authorName: "Alex Johnson",
    authorUsername: "alexj",
    timestamp: "1d ago",
    likes: 42,
    comments: 8,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
];

const skillTags = ["UI/UX Design", "React", "Figma", "JavaScript", "Node.js"];

const Profile = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-honey to-amber rounded-lg"></div>
            <div className="absolute -bottom-12 left-8 border-4 border-white rounded-full bg-honey p-1">
              <Hexagon 
                size={100}
                className="bg-honey flex items-center justify-center animate-hex-pulse"
              >
                <User className="h-12 w-12 text-white" />
              </Hexagon>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Alex Johnson</h1>
              <p className="text-muted-foreground">@alexj</p>
              <p className="mt-2 max-w-2xl">
                UI/UX Designer and Frontend Developer. Creating beautiful interfaces and functional experiences.
              </p>
              
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center">
                  <Link className="mr-1 h-4 w-4" />
                  <a href="https://alexjohnson.dev" className="hover:underline text-honey-dark">
                    alexjohnson.dev
                  </a>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  Joined May 2023
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {skillTags.map((tag) => (
                  <div 
                    key={tag} 
                    className="bg-honey/10 text-honey-dark px-3 py-1 rounded-full text-sm hover:bg-honey/20 transition-colors cursor-pointer"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex gap-2">
              <Button variant="outline" className="border-honey text-honey hover:bg-honey hover:text-white">
                <Settings className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Buzz Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="honey-card p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-honey flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-medium">734</p>
                <p className="text-sm text-muted-foreground">Connections</p>
              </div>
            </div>
            <div className="honey-card p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-honey flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-medium">24</p>
                <p className="text-sm text-muted-foreground">Clusters</p>
              </div>
            </div>
            <div className="honey-card p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-honey flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-medium">128</p>
                <p className="text-sm text-muted-foreground">Posts</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Posts</h2>
          <div className="space-y-4">
            {dummyPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
