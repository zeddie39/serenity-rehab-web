
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageSquare, Calendar, BarChart3 } from "lucide-react";
import { AdminDashboard } from "./AdminDashboard";
import { InquiriesManagement } from "./InquiriesManagement";
import { BookingsManagement } from "./BookingsManagement";
import { UsersManagement } from "./UsersManagement";

export const AdminTabs = () => {
  return (
    <Tabs defaultValue="dashboard" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="dashboard" className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          Dashboard
        </TabsTrigger>
        <TabsTrigger value="inquiries" className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          Inquiries
        </TabsTrigger>
        <TabsTrigger value="bookings" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Bookings
        </TabsTrigger>
        <TabsTrigger value="users" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Users
        </TabsTrigger>
      </TabsList>

      <TabsContent value="dashboard">
        <AdminDashboard />
      </TabsContent>

      <TabsContent value="inquiries">
        <InquiriesManagement />
      </TabsContent>

      <TabsContent value="bookings">
        <BookingsManagement />
      </TabsContent>

      <TabsContent value="users">
        <UsersManagement />
      </TabsContent>
    </Tabs>
  );
};
