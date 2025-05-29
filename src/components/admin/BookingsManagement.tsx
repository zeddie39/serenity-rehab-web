
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Search, Eye, Calendar, Clock } from "lucide-react";

interface Booking {
  id: string;
  user_id?: string;
  name: string;
  email: string;
  phone?: string;
  session_type: string;
  preferred_date?: string;
  preferred_time?: string;
  notes?: string;
  status: string;
  admin_notes?: string;
  created_at: string;
  updated_at: string;
}

export const BookingsManagement = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from('session_bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching bookings:', error);
        toast({
          title: "Error",
          description: "Failed to fetch bookings.",
          variant: "destructive",
        });
      } else {
        setBookings(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateBooking = async () => {
    if (!selectedBooking) return;

    setIsUpdating(true);
    try {
      const { error } = await supabase
        .from('session_bookings')
        .update({
          status: newStatus || selectedBooking.status,
          admin_notes: adminNotes || selectedBooking.admin_notes,
        })
        .eq('id', selectedBooking.id);

      if (error) {
        console.error('Error updating booking:', error);
        toast({
          title: "Error",
          description: "Failed to update booking.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Booking updated successfully.",
        });
        fetchBookings();
        setSelectedBooking(null);
        setAdminNotes("");
        setNewStatus("");
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.session_type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Session Bookings</h2>
        <p className="text-gray-600">Manage session bookings and appointments.</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search bookings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Bookings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Bookings ({filteredBookings.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Session Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.name}</TableCell>
                  <TableCell>{booking.email}</TableCell>
                  <TableCell>{booking.session_type}</TableCell>
                  <TableCell>
                    {booking.preferred_date ? new Date(booking.preferred_date).toLocaleDateString() : 'Not specified'}
                  </TableCell>
                  <TableCell>{booking.preferred_time || 'Not specified'}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(booking.status)}>
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(booking.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedBooking(booking);
                            setAdminNotes(booking.admin_notes || "");
                            setNewStatus(booking.status);
                          }}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Booking Details</DialogTitle>
                        </DialogHeader>
                        {selectedBooking && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium">Name</label>
                                <p>{selectedBooking.name}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Email</label>
                                <p>{selectedBooking.email}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Phone</label>
                                <p>{selectedBooking.phone || 'Not provided'}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Session Type</label>
                                <p>{selectedBooking.session_type}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Preferred Date</label>
                                <p>{selectedBooking.preferred_date ? new Date(selectedBooking.preferred_date).toLocaleDateString() : 'Not specified'}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Preferred Time</label>
                                <p>{selectedBooking.preferred_time || 'Not specified'}</p>
                              </div>
                            </div>
                            
                            {selectedBooking.notes && (
                              <div>
                                <label className="text-sm font-medium">Client Notes</label>
                                <p className="mt-1 p-3 bg-gray-50 rounded-md">{selectedBooking.notes}</p>
                              </div>
                            )}

                            <div>
                              <label className="text-sm font-medium">Status</label>
                              <Select value={newStatus} onValueChange={setNewStatus}>
                                <SelectTrigger className="mt-1">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pending">Pending</SelectItem>
                                  <SelectItem value="confirmed">Confirmed</SelectItem>
                                  <SelectItem value="cancelled">Cancelled</SelectItem>
                                  <SelectItem value="completed">Completed</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <label className="text-sm font-medium">Admin Notes</label>
                              <Textarea
                                value={adminNotes}
                                onChange={(e) => setAdminNotes(e.target.value)}
                                placeholder="Add notes about this booking..."
                                rows={4}
                                className="mt-1"
                              />
                            </div>

                            <div className="flex justify-end gap-2">
                              <Button
                                onClick={handleUpdateBooking}
                                disabled={isUpdating}
                                className="bg-teal-600 hover:bg-teal-700"
                              >
                                {isUpdating ? "Updating..." : "Update Booking"}
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filteredBookings.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No bookings found matching your criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
