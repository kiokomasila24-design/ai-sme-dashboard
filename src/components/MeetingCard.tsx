import { Calendar, Clock, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MeetingCardProps {
  title: string;
  date: string;
  time: string;
  aiStatus: "joined" | "pending" | "completed";
  type: "upcoming" | "completed";
}

export const MeetingCard = ({ title, date, time, aiStatus, type }: MeetingCardProps) => {
  return (
    <Card className="p-4 bg-card border-border hover:shadow-glow transition-all duration-300 group cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{time}</span>
            </div>
          </div>
        </div>
        <Bot className={cn(
          "w-8 h-8 transition-all",
          aiStatus === "joined" && "text-primary animate-pulse",
          aiStatus === "pending" && "text-muted-foreground",
          aiStatus === "completed" && "text-success"
        )} />
      </div>
      
      <div className="flex items-center justify-between">
        <Badge variant={
          aiStatus === "joined" ? "default" : 
          aiStatus === "completed" ? "secondary" : 
          "outline"
        } className={cn(
          "text-xs",
          aiStatus === "joined" && "bg-primary text-primary-foreground"
        )}>
          {aiStatus === "joined" ? "AI Joined" : 
           aiStatus === "completed" ? "Completed" : 
           "Pending"}
        </Badge>
        
        <Badge variant="outline" className="text-xs">
          {type === "upcoming" ? "Upcoming" : "Past"}
        </Badge>
      </div>
    </Card>
  );
};
