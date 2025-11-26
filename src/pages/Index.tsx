import { DashboardHeader } from "@/components/DashboardHeader";
import { MeetingCard } from "@/components/MeetingCard";
import { LeadCard } from "@/components/LeadCard";
import { AnalyticsPanel } from "@/components/AnalyticsPanel";
import { AutomationPanel } from "@/components/AutomationPanel";
import { StatsCard } from "@/components/StatsCard";
import { Users, TrendingUp, Calendar, MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const upcomingMeetings = [
    { title: "Sales Pitch - Nairobi Ventures", date: "Dec 15, 2025", time: "10:00 AM", aiStatus: "joined" as const, type: "upcoming" as const },
    { title: "Product Demo - Mombasa Tech", date: "Dec 16, 2025", time: "2:00 PM", aiStatus: "pending" as const, type: "upcoming" as const },
    { title: "Partnership Discussion", date: "Dec 17, 2025", time: "11:30 AM", aiStatus: "pending" as const, type: "upcoming" as const },
  ];

  const completedMeetings = [
    { title: "Client Onboarding - Kisumu SME", date: "Dec 10, 2025", time: "9:00 AM", aiStatus: "completed" as const, type: "completed" as const },
    { title: "Strategy Session - Eldoret Co.", date: "Dec 8, 2025", time: "3:00 PM", aiStatus: "completed" as const, type: "completed" as const },
  ];

  const leads = [
    { name: "Sarah Wanjiku", email: "sarah@example.com", phone: "+254712345678", status: "completed" as const, lastFollowUp: "2 days ago" },
    { name: "James Omondi", email: "james@example.com", phone: "+254723456789", status: "pending" as const, lastFollowUp: "5 days ago" },
    { name: "Mary Akinyi", email: "mary@example.com", phone: "+254734567890", status: "completed" as const, lastFollowUp: "1 day ago" },
    { name: "David Kipchoge", email: "david@example.com", phone: "+254745678901", status: "failed" as const, lastFollowUp: "1 week ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatsCard 
            title="Total Leads" 
            value="156" 
            icon={Users} 
            trend="+12% from last month"
            trendUp
          />
          <StatsCard 
            title="Active Meetings" 
            value="8" 
            icon={Calendar} 
            trend="3 today"
            trendUp
          />
          <StatsCard 
            title="Follow-ups Sent" 
            value="342" 
            icon={MessageSquare} 
            trend="+8% this week"
            trendUp
          />
          <StatsCard 
            title="Conversion Rate" 
            value="68%" 
            icon={TrendingUp} 
            trend="+5% improvement"
            trendUp
          />
        </div>

        {/* Meetings Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Meetings</h2>
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="bg-card border border-border mb-4">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Completed
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingMeetings.map((meeting, index) => (
                <MeetingCard key={index} {...meeting} />
              ))}
            </TabsContent>
            
            <TabsContent value="completed" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {completedMeetings.map((meeting, index) => (
                <MeetingCard key={index} {...meeting} />
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Leads & Automation */}
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-4">Leads & Contacts</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {leads.map((lead, index) => (
                <LeadCard key={index} {...lead} />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Automation</h2>
            <AutomationPanel />
          </div>
        </div>

        {/* Analytics */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Analytics & Insights</h2>
          <AnalyticsPanel />
        </div>
      </main>
    </div>
  );
};

export default Index;
