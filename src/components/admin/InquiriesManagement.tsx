
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Search, Eye, Mail, Clock } from "lucide-react";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  urgency?: string;
  status: string;
  admin_response?: string;
  created_at: string;
  updated_at: string;
}

export const InquiriesManagement = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [adminResponse, setAdminResponse] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching inquiries:', error);
        toast({
          title: "Error",
          description: "Failed to fetch inquiries.",
          variant: "destructive",
        });
      } else {
        setInquiries(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateInquiry = async () => {
    if (!selectedInquiry) return;

    setIsUpdating(true);
    try {
      const { error } = await supabase
        .from('inquiries')
        .update({
          status: newStatus || selectedInquiry.status,
          admin_response: adminResponse || selectedInquiry.admin_response,
        })
        .eq('id', selectedInquiry.id);

      if (error) {
        console.error('Error updating inquiry:', error);
        toast({
          title: "Error",
          description: "Failed to update inquiry.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Inquiry updated successfully.",
        });
        fetchInquiries();
        setSelectedInquiry(null);
        setAdminResponse("");
        setNewStatus("");
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case 'crisis': return 'bg-red-100 text-red-800';
      case 'urgent': return 'bg-orange-100 text-orange-800';
      case 'general': return 'bg-green-100 text-green-800';
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
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Inquiries Management</h2>
        <p className="text-gray-600">Manage and respond to customer inquiries.</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search inquiries..."
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
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Inquiries Table */}
      <Card>
        <CardHeader>
          <CardTitle>Inquiries ({filteredInquiries.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Urgency</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInquiries.map((inquiry) => (
                <TableRow key={inquiry.id}>
                  <TableCell className="font-medium">{inquiry.name}</TableCell>
                  <TableCell>{inquiry.email}</TableCell>
                  <TableCell>{inquiry.subject || 'No subject'}</TableCell>
                  <TableCell>
                    {inquiry.urgency && (
                      <Badge className={getUrgencyColor(inquiry.urgency)}>
                        {inquiry.urgency}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(inquiry.status)}>
                      {inquiry.status.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(inquiry.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedInquiry(inquiry);
                            setAdminResponse(inquiry.admin_response || "");
                            setNewStatus(inquiry.status);
                          }}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Inquiry Details</DialogTitle>
                        </DialogHeader>
                        {selectedInquiry && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium">Name</label>
                                <p>{selectedInquiry.name}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Email</label>
                                <p>{selectedInquiry.email}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Phone</label>
                                <p>{selectedInquiry.phone || 'Not provided'}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Subject</label>
                                <p>{selectedInquiry.subject || 'No subject'}</p>
                              </div>
                            </div>
                            
                            <div>
                              <label className="text-sm font-medium">Message</label>
                              <p className="mt-1 p-3 bg-gray-50 rounded-md">{selectedInquiry.message}</p>
                            </div>

                            <div>
                              <label className="text-sm font-medium">Status</label>
                              <Select value={newStatus} onValueChange={setNewStatus}>
                                <SelectTrigger className="mt-1">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="new">New</SelectItem>
                                  <SelectItem value="in_progress">In Progress</SelectItem>
                                  <SelectItem value="resolved">Resolved</SelectItem>
                                  <SelectItem value="closed">Closed</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <label className="text-sm font-medium">Admin Response</label>
                              <Textarea
                                value={adminResponse}
                                onChange={(e) => setAdminResponse(e.target.value)}
                                placeholder="Enter your response..."
                                rows={4}
                                className="mt-1"
                              />
                            </div>

                            <div className="flex justify-end gap-2">
                              <Button
                                onClick={handleUpdateInquiry}
                                disabled={isUpdating}
                                className="bg-teal-600 hover:bg-teal-700"
                              >
                                {isUpdating ? "Updating..." : "Update Inquiry"}
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
          {filteredInquiries.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No inquiries found matching your criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
