import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const leadData = [
  { month: "Jan", leads: 45, followUps: 38 },
  { month: "Feb", leads: 52, followUps: 48 },
  { month: "Mar", leads: 61, followUps: 55 },
  { month: "Apr", leads: 58, followUps: 52 },
  { month: "May", leads: 70, followUps: 65 },
  { month: "Jun", leads: 85, followUps: 78 },
];

const engagementData = [
  { day: "Mon", rate: 65 },
  { day: "Tue", rate: 72 },
  { day: "Wed", rate: 68 },
  { day: "Thu", rate: 80 },
  { day: "Fri", rate: 75 },
  { day: "Sat", rate: 55 },
  { day: "Sun", rate: 48 },
];

export const AnalyticsPanel = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Leads & Follow-ups</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={leadData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.75rem"
              }} 
            />
            <Bar dataKey="leads" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            <Bar dataKey="followUps" fill="hsl(var(--success))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Engagement Rate</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.75rem"
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="rate" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};
