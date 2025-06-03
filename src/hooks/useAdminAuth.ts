
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface AdminAuthUser {
  id: string;
  email?: string;
}

export const useAdminAuth = () => {
  const [user, setUser] = useState<AdminAuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check initial auth state
    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.id);
      if (event === 'SIGNED_IN' && session?.user) {
        await checkUserRole(session.user);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        setIsAdmin(false);
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkUser = async () => {
    try {
      setIsLoading(true);
      const { data: { user: authUser } } = await supabase.auth.getUser();
      
      if (authUser) {
        console.log('Found authenticated user:', authUser.id);
        await checkUserRole(authUser);
      } else {
        console.log('No authenticated user found');
        setUser(null);
        setIsAdmin(false);
      }
    } catch (error) {
      console.error('Error checking user:', error);
      setUser(null);
      setIsAdmin(false);
    } finally {
      setIsLoading(false);
    }
  };

  const checkUserRole = async (authUser: any) => {
    try {
      setUser(authUser);
      
      console.log('Checking admin role for user:', authUser.id);
      
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', authUser.id)
        .single();
      
      if (error) {
        console.error('Error fetching user profile:', error);
        if (error.code === 'PGRST116') {
          console.log('Profile not found, user is not admin');
          setIsAdmin(false);
          toast({
            title: "Access Denied",
            description: "No profile found. You don't have admin privileges.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      console.log('User profile role:', profile?.role);
      
      if (profile?.role === 'admin') {
        console.log('User has admin role');
        setIsAdmin(true);
      } else {
        console.log('User does not have admin role');
        setIsAdmin(false);
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error checking user role:', error);
      setIsAdmin(false);
      toast({
        title: "Error",
        description: "Failed to verify admin privileges.",
        variant: "destructive",
      });
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setUser(null);
      setIsAdmin(false);
      toast({
        title: "Signed Out",
        description: "You have been signed out successfully.",
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error",
        description: "Failed to sign out.",
        variant: "destructive",
      });
    }
  };

  return {
    user,
    isLoading,
    isAdmin,
    signOut,
    checkUser
  };
};
