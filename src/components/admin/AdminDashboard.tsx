
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Users, MessageSquare, Calendar, TrendingUp } from "lucide-react";

interface DashboardStats {
  inquiries_last_30_days: number;
  new_inquiries: number;
  bookings_last_30_days: number;
  pending_bookings: number;
  new_users_last_30_days: number;
  total_users: number;
}

export const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const { data, error } = await supabase
        .from('dashboard_stats')
        .select('*')
        .single();

      if (error) {
        console.error('Error fetching dashboard stats:', error);
      } else {
        setStats(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Users",
      value: stats?.total_users || 0,
      icon: Users,
      description: "Registered users",
      color: "text-blue-600"
    },
    {
      title: "New Users (30 days)",
      value: stats?.new_users_last_30_days || 0,
      icon: TrendingUp,
      description: "Recent registrations",
      color: "text-green-600"
    },
    {
      title: "New Inquiries",
      value: stats?.new_inquiries || 0,
      icon: MessageSquare,
      description: "Pending response",
      color: "text-orange-600"
    },
    {
      title: "Inquiries (30 days)",
      value: stats?.inquiries_last_30_days || 0,
      icon: MessageSquare,
      description: "Recent inquiries",
      color: "text-purple-600"
    },
    {
      title: "Pending Bookings",
      value: stats?.pending_bookings || 0,
      icon: Calendar,
      description: "Awaiting confirmation",
      color: "text-red-600"
    },
    {
      title: "Bookings (30 days)",
      value: stats?.bookings_last_30_days || 0,
      icon: Calendar,
      description: "Recent bookings",
      color: "text-teal-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Key metrics and statistics for your rehabilitation center.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-gray-500">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-gray-600">
              • Review new inquiries and respond promptly
            </p>
            <p className="text-sm text-gray-600">
              • Confirm pending session bookings
            </p>
            <p className="text-sm text-gray-600">
              • Monitor user registrations and profiles
            </p>
            <p className="text-sm text-gray-600">
              • Track treatment program engagement
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Database</span>
                <span className="text-sm text-green-600 font-medium">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Authentication</span>
                <span className="text-sm text-green-600 font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Email Service</span>
                <span className="text-sm text-green-600 font-medium">Operational</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
