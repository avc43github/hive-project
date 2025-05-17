
import Layout from "./Layout";
import { Bell, User, MessageSquare, Heart, Repeat } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Notification {
  id: string;
  type: "like" | "comment" | "mention" | "follow" | "cluster";
  user: string;
  content: string;
  time: string;
  read: boolean;
}

const Notifications = () => {
  const notifications: Notification[] = [
    {
      id: "1",
      type: "like",
      user: "Alex Johnson",
      content: "liked your post about creative collaboration",
      time: "5 min ago",
      read: false,
    },
    {
      id: "2",
      type: "comment",
      user: "Sarah Miller",
      content: "commented on your post: \"This is exactly what I was looking for!\"",
      time: "1 hour ago",
      read: false,
    },
    {
      id: "3",
      type: "follow",
      user: "Tech Hive",
      content: "invited you to join their cluster",
      time: "3 hours ago",
      read: true,
    },
    {
      id: "4",
      type: "mention",
      user: "James Wilson",
      content: "mentioned you in a comment: \"@you should check this out!\"",
      time: "Yesterday",
      read: true,
    },
    {
      id: "5",
      type: "cluster",
      user: "Creative Swarm",
      content: "posted a new cluster challenge",
      time: "2 days ago",
      read: true,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="h-5 w-5 text-pink-500" />;
      case "comment":
        return <MessageSquare className="h-5 w-5 text-blue-500" />;
      case "follow":
        return <User className="h-5 w-5 text-green-500" />;
      case "mention":
        return <Bell className="h-5 w-5 text-honey" />;
      case "cluster":
        return <Repeat className="h-5 w-5 text-purple-500" />;
      default:
        return <Bell className="h-5 w-5 text-honey" />;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">Notifications</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Tabs defaultValue="all">
            <div className="border-b border-honey/20">
              <TabsList className="w-full justify-start p-0 h-auto bg-transparent">
                <TabsTrigger 
                  value="all" 
                  className="py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-honey rounded-none"
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="mentions" 
                  className="py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-honey rounded-none"
                >
                  Mentions
                </TabsTrigger>
                <TabsTrigger 
                  value="clusters" 
                  className="py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-honey rounded-none"
                >
                  Clusters
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="m-0">
              <div className="divide-y divide-honey/10">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-4 flex gap-3 hover:bg-honey/5 transition-colors ${!notification.read ? "bg-honey/10" : ""}`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-2">
                        <Avatar>
                          <div className="bg-honey/20 w-8 h-8 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-honey" />
                          </div>
                        </Avatar>
                        <div>
                          <p className={`${!notification.read ? "font-medium" : ""}`}>
                            <span className="font-medium">{notification.user}</span> {notification.content}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mentions" className="m-0">
              <div className="divide-y divide-honey/10">
                {notifications
                  .filter(n => n.type === "mention")
                  .map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 flex gap-3 hover:bg-honey/5 transition-colors ${!notification.read ? "bg-honey/10" : ""}`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2">
                          <Avatar>
                            <div className="bg-honey/20 w-8 h-8 rounded-full flex items-center justify-center">
                              <User className="h-4 w-4 text-honey" />
                            </div>
                          </Avatar>
                          <div>
                            <p className={`${!notification.read ? "font-medium" : ""}`}>
                              <span className="font-medium">{notification.user}</span> {notification.content}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="clusters" className="m-0">
              <div className="divide-y divide-honey/10">
                {notifications
                  .filter(n => n.type === "cluster")
                  .map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 flex gap-3 hover:bg-honey/5 transition-colors ${!notification.read ? "bg-honey/10" : ""}`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2">
                          <Avatar>
                            <div className="bg-honey/20 w-8 h-8 rounded-full flex items-center justify-center">
                              <User className="h-4 w-4 text-honey" />
                            </div>
                          </Avatar>
                          <div>
                            <p className={`${!notification.read ? "font-medium" : ""}`}>
                              <span className="font-medium">{notification.user}</span> {notification.content}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="p-4 text-center border-t border-honey/10">
            <Button variant="outline" className="text-honey hover:text-honey-dark hover:bg-honey/10">
              Mark all as read
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
