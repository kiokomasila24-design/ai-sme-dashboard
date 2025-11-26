import { Mail, Phone, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface LeadCardProps {
  name: string;
  email: string;
  phone: string;
  status: "completed" | "pending" | "failed";
  lastFollowUp: string;
}

export const LeadCard = ({ name, email, phone, status, lastFollowUp }: LeadCardProps) => {
  return (
    <Card className="p-4 bg-card border-border hover:shadow-glow transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-foreground">{name}</h3>
          <div className="flex flex-col gap-1 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>{phone}</span>
            </div>
          </div>
        </div>
        
        <Badge 
          variant="outline"
          className={cn(
            "font-medium",
            status === "completed" && "bg-success/10 text-success border-success",
            status === "pending" && "bg-warning/10 text-warning border-warning",
            status === "failed" && "bg-destructive/10 text-destructive border-destructive"
          )}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar className="w-3 h-3" />
        <span>Last follow-up: {lastFollowUp}</span>
      </div>
    </Card>
  );
};
