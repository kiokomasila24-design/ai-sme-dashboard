import { BrainCircuit, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const DashboardHeader = () => {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BrainCircuit className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-lg font-bold text-foreground">AI Meeting Assistant</h1>
            <p className="text-xs text-muted-foreground">Kenyan SME Solutions</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">John Kimani</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
          <Avatar className="border-2 border-primary">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
