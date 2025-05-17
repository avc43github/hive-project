
import { useState } from "react";
import Layout from "./Layout";
import { User, MessageSquare, Search, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  sender: string;
  avatar: string;
  content: string;
  timestamp: string;
  unread: boolean;
}

const Messages = () => {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messages] = useState<Message[]>([
    {
      id: "1",
      sender: "Alex Johnson",
      avatar: "",
      content: "Hey, have you seen the new design?",
      timestamp: "10:45 AM",
      unread: true,
    },
    {
      id: "2",
      sender: "Sarah Miller",
      avatar: "",
      content: "Just joined the Tech Hive cluster!",
      timestamp: "Yesterday",
      unread: false,
    },
    {
      id: "3",
      sender: "James Wilson",
      avatar: "",
      content: "Can you review my latest post?",
      timestamp: "Monday",
      unread: true,
    },
    {
      id: "4",
      sender: "Creative Swarm",
      avatar: "",
      content: "New challenge posted: Design a hexagonal logo",
      timestamp: "Last week",
      unread: false,
    },
  ]);

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>
        
        <div className="bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 overflow-hidden">
          {/* Messages list sidebar */}
          <div className="border-r border-honey/20">
            <div className="p-4 border-b border-honey/20">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search messages..."
                  className="pl-10"
                />
              </div>
            </div>
            
            <ScrollArea className="h-[calc(100vh-250px)]">
              {messages.map((message) => (
                <button
                  key={message.id}
                  className={`w-full text-left p-4 border-b border-honey/10 hover:bg-honey/5 transition-colors ${
                    activeChat === message.id ? "bg-honey/10" : ""
                  } ${message.unread ? "font-medium" : ""}`}
                  onClick={() => setActiveChat(message.id)}
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <div className="bg-honey/20 w-10 h-10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-honey" />
                      </div>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <p className="truncate">{message.sender}</p>
                        <span className="text-xs text-muted-foreground">
                          {message.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {message.content}
                      </p>
                    </div>
                    {message.unread && (
                      <div className="w-2 h-2 rounded-full bg-honey animate-pulse"></div>
                    )}
                  </div>
                </button>
              ))}
            </ScrollArea>
          </div>
          
          {/* Chat area */}
          <div className="col-span-2 flex flex-col h-[calc(100vh-250px)]">
            {activeChat ? (
              <>
                <div className="p-4 border-b border-honey/20 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <div className="bg-honey/20 w-10 h-10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-honey" />
                      </div>
                    </Avatar>
                    <div>
                      <p className="font-medium">
                        {messages.find((m) => m.id === activeChat)?.sender}
                      </p>
                      <p className="text-xs text-muted-foreground">Active now</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
                
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                        <p>Hey there! How's your day going?</p>
                        <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-honey/20 rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                        <p>Pretty good! Working on the new Hive project.</p>
                        <p className="text-xs text-muted-foreground mt-1">10:32 AM</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                        <p>Awesome! Can't wait to see what you come up with.</p>
                        <p className="text-xs text-muted-foreground mt-1">10:33 AM</p>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                
                <div className="border-t border-honey/20 p-4">
                  <div className="flex gap-2">
                    <Input placeholder="Type a message..." className="flex-1" />
                    <Button className="bg-honey hover:bg-honey-dark text-white">Send</Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <MessageSquare className="h-16 w-16 text-honey/30 mb-4" />
                <h3 className="text-xl font-medium mb-2">Your Messages</h3>
                <p className="text-muted-foreground max-w-sm">
                  Select a conversation or start a new one to chat with your hive connections.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
