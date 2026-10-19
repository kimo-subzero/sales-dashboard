'use client';

import React, { useState, useEffect } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';

// Mock Sales Data
const initialSalesData = [
  { month: 'Jan', revenue: 42000, orders: 320 },
  { month: 'Feb', revenue: 58000, orders: 410 },
  { month: 'Mar', revenue: 49000, orders: 380 },
  { month: 'Apr', revenue: 72000, orders: 550 },
  { month: 'May', revenue: 61000, orders: 480 },
  { month: 'Jun', revenue: 89000, orders: 690 },
  { month: 'Jul', revenue: 78000, orders: 610 },
  { month: 'Aug', revenue: 95000, orders: 740 },
  { month: 'Sep', revenue: 84245, orders: 670 },
];

const initialTransactions = [
  { id: '#ORD-9021', customer: 'Sarah Jenkins', product: 'Enterprise AI Plan', amount: 1200.00, status: 'Completed', date: '2026-10-18' },
  { id: '#ORD-9020', customer: 'Michael Chang', product: 'Cloud Infrastructure Pro', amount: 450.00, status: 'Pending', date: '2026-10-19' },
  { id: '#ORD-9019', customer: 'Emma Watson', product: 'Analytics Suite License', amount: 890.00, status: 'Completed', date: '2026-10-19' },
  { id: '#ORD-9018', customer: 'Omar Hassan', product: 'Full-Stack Dev Consultation', amount: 650.00, status: 'Completed', date: '2026-10-20' },
  { id: '#ORD-9017', customer: 'Jessica Alba', product: 'SaaS Subscription Tier 2', amount: 199.00, status: 'Failed', date: '2026-10-20' },
];

export default function SalesDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [lastSyncTime, setLastSyncTime] = useState('Just now');

  // Interactive Export CSV Feature
  const handleExportCSV = () => {
    const headers = 'Order ID,Customer,Product,Amount,Status,Date\n';
    const rows = transactions
      .map(t => `${t.id},"${t.customer}","${t.product}",$${t.amount},${t.status},${t.date}`)
      .join('\n');
    
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `sales_report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Interactive Live Sync Data Feature
  const handleSyncData = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setLastSyncTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1200);
  };

  // Search Filter Implementation
  const filteredTransactions = transactions.filter(
    t => t.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
         t.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
         t.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 hidden md:flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 font-bold text-white">
              A
            </div>
            <span className="font-bold text-lg tracking-wide bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              ApexAnalytics
            </span>
          </div>

          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-indigo-600/10 text-indigo-400 font-medium text-sm border border-indigo-500/20">
              📊 Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition text-sm">
              🛒 Sales & Orders
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition text-sm">
              👥 Customers
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition text-sm">
              📦 Products
            </a>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800/80">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <p className="text-xs font-semibold text-indigo-400 mb-1">Live Backend Status</p>
            <p className="text-xs text-slate-400 mb-3">Vercel API & Live Analytics Engine Active.</p>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Connected
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="h-20 border-b border-slate-800 px-8 flex items-center justify-between bg-slate-900/30 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4 w-96">
            <div className="relative w-full">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search orders, customers, products..." 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 relative">
              🔔
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-indigo-500"></span>
            </div>
            <div className="h-8 w-[1px] bg-slate-800"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center font-bold text-sm shadow-md text-white">
                KS
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium leading-none text-slate-200">Kareem S.</p>
                <p className="text-xs text-slate-400 mt-1">Lead Developer</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-8 space-y-8 max-w-7xl w-full mx-auto">
          
          {/* Welcome & Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">Sales & Performance Dashboard</h1>
              <p className="text-sm text-slate-400 mt-1">Live metrics, interactive revenue chart, and exportable order records.</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleSyncData}
                disabled={isSyncing}
                className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm font-medium transition active:scale-95 disabled:opacity-50"
              >
                {isSyncing ? '🔄 Syncing...' : '🔄 Sync Data'}
              </button>
              <button 
                onClick={handleExportCSV}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-indigo-600/20 transition active:scale-95"
              >
                📥 Export Report (CSV)
              </button>
            </div>
          </div>

          {/* KPI Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">Total Revenue</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">$</div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white">$84,245.50</h3>
                <p className="text-emerald-400 text-xs font-semibold mt-2">📈 +12.4% from last month</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">Active Customers</span>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">👥</div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white">2,420</h3>
                <p className="text-emerald-400 text-xs font-semibold mt-2">📈 +8.1% new signups</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">Total Orders</span>
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">🛒</div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white">1,389</h3>
                <p className="text-rose-400 text-xs font-semibold mt-2">📉 -2.3% vs yesterday</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">Conversion Rate</span>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">⚡</div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white">4.82%</h3>
                <p className="text-emerald-400 text-xs font-semibold mt-2">📈 +0.6% optimization</p>
              </div>
            </div>
          </div>

          {/* Interactive Recharts Graph Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-white">Interactive Revenue Analytics</h3>
                  <p className="text-xs text-slate-400">Hover over points to see exact monthly revenue</p>
                </div>
                <span className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  Live Sync: {lastSyncTime}
                </span>
              </div>

              <div className="h-72 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={initialSalesData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#f8fafc' }}
                      formatter={(value: any) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Channels Breakdown */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white mb-1">Acquisition Channels</h3>
                <p className="text-xs text-slate-400 mb-6">Sales sources breakdown</p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300">Direct Organic</span>
                      <span className="text-slate-400">45%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full"><div className="h-full bg-indigo-500 rounded-full" style={{ width: '45%' }}></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300">Paid Social Ads</span>
                      <span className="text-slate-400">30%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full"><div className="h-full bg-violet-500 rounded-full" style={{ width: '30%' }}></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300">Affiliate Marketing</span>
                      <span className="text-slate-400">15%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full"><div className="h-full bg-emerald-500 rounded-full" style={{ width: '15%' }}></div></div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 rounded-xl text-xs font-semibold transition">
                  Detailed Attribution
                </button>
              </div>
            </div>
          </div>

          {/* Transactions Table with Real-Time Search */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-white">Recent Transactions ({filteredTransactions.length})</h3>
                <p className="text-xs text-slate-400">Filter records by typing in top search bar</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400">
                    <th className="pb-3 px-4">Order ID</th>
                    <th className="pb-3 px-4">Customer</th>
                    <th className="pb-3 px-4">Product</th>
                    <th className="pb-3 px-4">Amount</th>
                    <th className="pb-3 px-4">Date</th>
                    <th className="pb-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-sm">
                  {filteredTransactions.length > 0 ? (
                    filteredTransactions.map(t => (
                      <tr key={t.id} className="hover:bg-slate-800/30 transition">
                        <td className="py-3.5 px-4 font-mono text-xs text-indigo-400">{t.id}</td>
                        <td className="py-3.5 px-4 font-medium text-slate-200">{t.customer}</td>
                        <td className="py-3.5 px-4 text-slate-400">{t.product}</td>
                        <td className="py-3.5 px-4 font-semibold text-slate-200">${t.amount.toFixed(2)}</td>
                        <td className="py-3.5 px-4 text-xs text-slate-500">{t.date}</td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            t.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                            t.status === 'Pending' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                            'bg-rose-500/10 text-rose-400 border-rose-500/20'
                          }`}>
                            {t.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-6 text-slate-500 text-sm">
                        No transactions found matching "{searchTerm}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}