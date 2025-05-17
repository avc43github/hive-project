
import { Button } from "@/components/ui/button";
import { Hexagon as HexagonIcon, Users } from "lucide-react";
import Hexagon from "../ui/hexagon";
import { Link } from "react-router-dom";

interface ClusterCardProps {
  cluster: {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    color: string;
    slug: string;
  };
}

const ClusterCard = ({ cluster }: ClusterCardProps) => {
  return (
    <div className="honey-card overflow-hidden">
      <div 
        className="h-20 w-full" 
        style={{ backgroundColor: cluster.color }}
      />
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Hexagon 
            size={40} 
            className="bg-honey flex items-center justify-center"
            hoverable
          >
            <HexagonIcon className="h-5 w-5 text-white" />
          </Hexagon>
          <div>
            <Link 
              to={`/cluster/${cluster.slug}`} 
              className="font-bold hover:text-honey transition-colors"
            >
              {cluster.name}
            </Link>
            <div className="flex items-center text-xs text-muted-foreground">
              <Users className="h-3 w-3 mr-1" />
              {cluster.memberCount} members
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{cluster.description}</p>
        <Button 
          className="w-full bg-honey hover:bg-honey-dark text-white"
        >
          Join Cluster
        </Button>
      </div>
    </div>
  );
};

export default ClusterCard;
