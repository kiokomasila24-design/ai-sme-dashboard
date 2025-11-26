import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { MessageSquare, Mail, Phone } from "lucide-react";

export const AutomationPanel = () => {
  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">Follow-up Automation</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">WhatsApp Messages</p>
              <p className="text-sm text-muted-foreground">Auto-send after meetings</p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">Email Follow-ups</p>
              <p className="text-sm text-muted-foreground">Send summary & resources</p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">SMS Reminders</p>
              <p className="text-sm text-muted-foreground">Pre-meeting notifications</p>
            </div>
          </div>
          <Switch />
        </div>
      </div>

      <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow transition-all">
        Configure Automation
      </Button>
    </Card>
  );
};
