
import { Button } from "@/components/ui/button";
import { Camera, Image, Link, Smile, User } from "lucide-react";
import { useState } from "react";

const CreatePostCard = () => {
  const [content, setContent] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Posting:", content);
    setContent("");
    // In a real app, you would dispatch an action to create a post
  };

  return (
    <div className="honey-card p-4 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <div className="w-10 h-10 hexagon bg-honey flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's buzzing?"
              className="w-full resize-none border-none focus:outline-none focus:ring-0 bg-transparent placeholder:text-muted-foreground p-2 min-h-[80px]"
            />
            <div className="border-t border-honey/20 pt-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Button type="button" size="icon" variant="ghost" className="rounded-full hover:bg-honey/10">
                  <Image className="h-5 w-5 text-honey-dark" />
                </Button>
                <Button type="button" size="icon" variant="ghost" className="rounded-full hover:bg-honey/10">
                  <Camera className="h-5 w-5 text-honey-dark" />
                </Button>
                <Button type="button" size="icon" variant="ghost" className="rounded-full hover:bg-honey/10">
                  <Link className="h-5 w-5 text-honey-dark" />
                </Button>
                <Button type="button" size="icon" variant="ghost" className="rounded-full hover:bg-honey/10">
                  <Smile className="h-5 w-5 text-honey-dark" />
                </Button>
              </div>
              <Button 
                type="submit" 
                className="bg-honey hover:bg-honey-dark text-white rounded-full hover:animate-buzz px-6"
                disabled={!content.trim()}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePostCard;
