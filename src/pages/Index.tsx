
import CreatePostCard from "@/components/post/CreatePostCard";
import PostCard from "@/components/post/PostCard";
import ClusterCard from "@/components/cluster/ClusterCard";
import { Button } from "@/components/ui/button";
import { Hexagon as HexagonIcon } from "lucide-react";
import Layout from "./Layout";

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
    authorName: "Maya Patel",
    authorUsername: "mayaDesigns",
    timestamp: "4h ago",
    likes: 42,
    comments: 8,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: "3",
    content: "Enjoying the buzz at the tech conference today! So many innovative ideas floating around. Let's connect if you're here too! #TechConf",
    authorName: "Jordan Lee",
    authorUsername: "jordanTech",
    timestamp: "6h ago",
    likes: 18,
    comments: 3,
  },
];

const suggestedClusters = [
  {
    id: "1",
    name: "Tech Hive",
    description: "A community for tech enthusiasts, developers, and innovators.",
    memberCount: 5426,
    color: "#008080",
    slug: "tech",
  },
  {
    id: "2",
    name: "Creative Swarm",
    description: "Share your art, designs, and creative projects with fellow artists.",
    memberCount: 3812,
    color: "#A78BFA",
    slug: "creative",
  },
  {
    id: "3",
    name: "Startup Buzz",
    description: "Connect with entrepreneurs and discuss startup ideas and strategies.",
    memberCount: 2103,
    color: "#F97316",
    slug: "startup",
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold mb-6">Home Feed</h1>
            <CreatePostCard />
            
            <div className="space-y-4">
              {dummyPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button 
                variant="outline"
                className="border-honey text-honey hover:bg-honey hover:text-white"
              >
                Load More
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <HexagonIcon className="h-5 w-5 mr-2 text-honey" />
              Discover Clusters
            </h2>
            <div className="space-y-4">
              {suggestedClusters.map((cluster) => (
                <ClusterCard key={cluster.id} cluster={cluster} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
