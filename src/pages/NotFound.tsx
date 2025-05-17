
import { Button } from "@/components/ui/button";
import { Hexagon } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="honey-card p-8 max-w-md w-full text-center">
        <div className="w-20 h-20 mx-auto mb-6 hexagon bg-honey flex items-center justify-center animate-hex-pulse">
          <Hexagon className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl mb-6">Oops! This hive cell doesn't exist.</p>
        <p className="text-muted-foreground mb-8">
          The hexagon you're looking for may have buzzed away or never existed.
        </p>
        <Link to="/">
          <Button className="bg-honey hover:bg-honey-dark text-white hover:animate-buzz">
            Back to the Hive
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
