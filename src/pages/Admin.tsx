
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { AdminSignIn } from "@/components/admin/AdminSignIn";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTabs } from "@/components/admin/AdminTabs";
import { AdminLoading } from "@/components/admin/AdminLoading";

const Admin = () => {
  const { user, isLoading, isAdmin, signOut, checkUser } = useAdminAuth();

  const handleSignInSuccess = () => {
    checkUser();
  };

  if (isLoading) {
    return <AdminLoading />;
  }

  if (!user || !isAdmin) {
    return <AdminSignIn onSignInSuccess={handleSignInSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader onSignOut={signOut} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdminTabs />
      </div>
    </div>
  );
};

export default Admin;
