
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share2, User } from "lucide-react";
import { useState } from "react";

interface PostCardProps {
  post: {
    id: string;
    content: string;
    authorName: string;
    authorUsername: string;
    timestamp: string;
    likes: number;
    comments: number;
    image?: string;
  };
}

const PostCard = ({ post }: PostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="honey-card p-4 mb-4 animate-honey-drip">
      <div className="flex gap-3">
        <div className="w-10 h-10 hexagon bg-honey flex items-center justify-center">
          <User className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <p className="font-medium">{post.authorName}</p>
              <p className="text-sm text-muted-foreground">@{post.authorUsername} • {post.timestamp}</p>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-foreground">{post.content}</p>
            {post.image && (
              <div className="mt-3 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
          <div className="mt-4 flex items-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`flex items-center gap-1 ${liked ? 'text-red-500' : ''}`}
            >
              <Heart className={`h-4 w-4 ${liked ? 'fill-red-500' : ''}`} />
              <span>{likeCount}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
            >
              <MessageSquare className="h-4 w-4" />
              <span>{post.comments}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
