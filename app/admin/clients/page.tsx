"use client";

import React, { useState, useEffect } from "react";
import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";

export default function AdminClientsPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "Restaurant",
    googleReviewLink: "",
    location: "",
    tone: "Casual",
    customPrompt: "",
    payment: {
      status: "pending",
      amount: 0,
      mode: "",
      validTill: "",
    },
    isActive: true,
  });

  const [activeQRClient, setActiveQRClient] = useState<string | null>(null);
  const [origin, setOrigin] = useState("");
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  useEffect(() => {
    setOrigin(window.location.origin);
    fetchClients();
  }, []);

  const showMessage = (text: string, type: "success" | "error") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const fetchClients = async () => {
    try {
      const res = await fetch("/api/clients");
      const json = await res.json();
      if (json.success) setClients(json.data);
    } catch (error) {
      console.error("Error fetching clients", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("payment.")) {
      const paymentField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        payment: { ...prev.payment, [paymentField]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        showMessage("Client created successfully", "success");
        setFormData({
            ...formData,
            businessName: "",
            googleReviewLink: "",
            location: "",
            customPrompt: "",
            payment: { status: "pending", amount: 0, mode: "", validTill: "" }
        });
        fetchClients();
      } else {
        showMessage("Failed to create client", "error");
      }
    } catch (error) {
      showMessage("Error creating client", "error");
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/clients/${id}`, { method: "DELETE" });
      showMessage("Client deleted successfully", "success");
      setConfirmDeleteId(null);
      fetchClients();
    } catch (error) {
      showMessage("Error deleting client", "error");
    }
  };

  const copyLink = (id: string) => {
    const link = `${origin}/review/${id}`;
    navigator.clipboard.writeText(link);
    showMessage("Review link copied to clipboard", "success");
  };

  const downloadQR = (id: string, name: string) => {
    const canvas = document.getElementById(`qr-canvas-${id}`) as HTMLCanvasElement;
    if (!canvas) return;
    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.download = `QR_${name.replace(/\s+/g, '_')}.png`;
    downloadLink.href = pngUrl;
    downloadLink.click();
    showMessage("QR Code downloaded", "success");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 text-black font-body">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Admin Panel - Clients</h1>
            {message && (
                <div className={`px-4 py-2 rounded-lg font-medium text-sm animate-in fade-in duration-300 ${message.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                    {message.text}
                </div>
            )}
        </div>

        {/* Create Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6">Create New Client</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Business Name</label>
                <input required name="businessName" value={formData.businessName} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors" placeholder="e.g. Veyber Services" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Business Type</label>
                <select required name="businessType" value={formData.businessType} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors cursor-pointer">
                  <option>Restaurant</option>
                  <option>Salon</option>
                  <option>Retail</option>
                  <option>Service</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Google Review Link</label>
                <input required name="googleReviewLink" value={formData.googleReviewLink} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors" placeholder="https://g.page/r/..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <input name="location" value={formData.location} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors" placeholder="e.g. Vadodara, Gujarat" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tone</label>
                <select name="tone" value={formData.tone} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors cursor-pointer">
                  <option>Casual</option>
                  <option>Professional</option>
                  <option>Enthusiastic</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Custom Prompt (Optional)</label>
                <input name="customPrompt" value={formData.customPrompt} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors" placeholder="Any specific instructions for AI" />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Payment Section</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select name="payment.status" value={formData.payment.status} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors cursor-pointer">
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Amount</label>
                  <input type="number" name="payment.amount" value={formData.payment.amount} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors" placeholder="0" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Mode</label>
                  <select name="payment.mode" value={formData.payment.mode} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors cursor-pointer">
                    <option value="">Select Mode</option>
                    <option value="upi">UPI</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Valid Till</label>
                  <input type="date" name="payment.validTill" value={formData.payment.validTill} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors cursor-pointer" />
                </div>
              </div>
            </div>

            <button disabled={loading} type="submit" className="w-auto px-8 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 disabled:opacity-50 transition-colors duration-200 cursor-pointer flex items-center justify-center space-x-2 mt-4">
              {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                  <span className="material-symbols-outlined text-lg">add_circle</span>
              )}
              <span>{loading ? "Saving..." : "Create Client"}</span>
            </button>
          </form>
        </div>

        {/* Client List */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-6">Clients List</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500">
                <th className="py-3 px-4 font-medium uppercase tracking-wider text-sm">Business Name</th>
                <th className="py-3 px-4 font-medium uppercase tracking-wider text-sm">Type</th>
                <th className="py-3 px-4 font-medium uppercase tracking-wider text-sm">Status</th>
                <th className="py-3 px-4 font-medium uppercase tracking-wider text-sm">Valid Till</th>
                <th className="py-3 px-4 font-medium uppercase tracking-wider text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-medium">{client.businessName}</td>
                  <td className="py-4 px-4 text-gray-600">{client.businessType}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${client.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {client.payment?.status || 'unknown'}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{client.payment?.validTill ? new Date(client.payment.validTill).toLocaleDateString() : 'N/A'}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => copyLink(client._id)} className="p-2 text-gray-500 hover:text-black hover:bg-gray-200 rounded-lg transition-colors cursor-pointer" title="Copy Review Link">
                        <span className="material-symbols-outlined text-xl">content_copy</span>
                      </button>
                      <button onClick={() => setActiveQRClient(activeQRClient === client._id ? null : client._id)} className="p-2 text-gray-500 hover:text-black hover:bg-gray-200 rounded-lg transition-colors cursor-pointer" title="View QR">
                        <span className="material-symbols-outlined text-xl">qr_code</span>
                      </button>
                      <button onClick={() => downloadQR(client._id, client.businessName)} className="p-2 text-gray-500 hover:text-black hover:bg-gray-200 rounded-lg transition-colors cursor-pointer" title="Download QR">
                        <span className="material-symbols-outlined text-xl">download</span>
                      </button>
                      
                      {confirmDeleteId === client._id ? (
                          <div className="flex items-center space-x-2 bg-red-50 p-1 rounded-lg border border-red-200 ml-2">
                              <button onClick={() => handleDelete(client._id)} className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded cursor-pointer transition-colors">Yes, Delete</button>
                              <button onClick={() => setConfirmDeleteId(null)} className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-black text-xs font-bold rounded cursor-pointer transition-colors">Cancel</button>
                          </div>
                      ) : (
                          <button onClick={() => setConfirmDeleteId(client._id)} className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer" title="Delete Client">
                            <span className="material-symbols-outlined text-xl">delete</span>
                          </button>
                      )}
                    </div>

                    {activeQRClient === client._id && origin && (
                      <div className="mt-4 p-4 bg-white border border-gray-200 rounded-xl inline-block shadow-lg absolute z-10 animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center mb-2 border-b border-gray-100 pb-2">
                            <span className="text-black font-semibold text-sm">QR Code</span>
                            <button onClick={() => setActiveQRClient(null)} className="text-gray-400 hover:text-black cursor-pointer">
                                <span className="material-symbols-outlined text-sm">close</span>
                            </button>
                        </div>
                        <QRCodeSVG value={`${origin}/review/${client._id}`} size={160} />
                      </div>
                    )}
                    
                    {origin && (
                       <div style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
                         <QRCodeCanvas id={`qr-canvas-${client._id}`} value={`${origin}/review/${client._id}`} size={1024} />
                       </div>
                    )}
                  </td>
                </tr>
              ))}
              {clients.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gray-500">
                    <span className="material-symbols-outlined text-4xl mb-2 opacity-50">inbox</span>
                    <p>No clients found. Create one above.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
