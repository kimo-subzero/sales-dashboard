'use client';

import React from 'react';

export default function SalesDashboard() {
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
            <p className="text-xs font-semibold text-indigo-400 mb-1">Live Deployment</p>
            <p className="text-xs text-slate-400 mb-3">Your project is successfully synced with Vercel.</p>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
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
                placeholder="Search analytics, orders, products..." 
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
              <h1 className="text-2xl font-bold tracking-tight text-white">Sales Overview</h1>
              <p className="text-sm text-slate-400 mt-1">Real-time performance metrics, revenue growth, and active transactions.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm font-medium transition">
                🔄 Sync Data
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-indigo-600/20 transition">
                Export Report
              </button>
            </div>
          </div>

          {/* KPI Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">Total Revenue</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                  $
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white">$84,245.50</h3>
                <div className="flex items-center gap-1.5 mt-2 text-emerald-400 text-xs font-semibold">
                  <span>📈 +12.4% from last month</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">Active Customers</span>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  👥
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white">2,420</h3>
                <div className="flex items-center gap-1.5 mt-2 text-emerald-400 text-xs font-semibold">
                  <span>📈 +8.1% new signups</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">Total Orders</span>
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  🛒
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white">1,389</h3>
                <div className="flex items-center gap-1.5 mt-2 text-rose-400 text-xs font-semibold">
                  <span>📉 -2.3% vs yesterday</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">Conversion Rate</span>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  ⚡
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white">4.82%</h3>
                <div className="flex items-center gap-1.5 mt-2 text-emerald-400 text-xs font-semibold">
                  <span>📈 +0.6% optimization</span>
                </div>
              </div>
            </div>

          </div>

          {/* Charts Section Simulation */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-white">Revenue Analytics</h3>
                  <p className="text-xs text-slate-400">Monthly breakdown of incoming sales performance</p>
                </div>
                <select className="bg-slate-950 border border-slate-800 text-xs text-slate-300 rounded-xl px-3 py-1.5 focus:outline-none">
                  <option>This Year (2026)</option>
                  <option>Last Year</option>
                </select>
              </div>

              {/* Visual Bars Simulation */}
              <div className="h-64 flex items-end gap-3 pt-6 px-2 border-b border-slate-800/80 pb-4">
                {[40, 65, 45, 80, 55, 95, 75, 85, 60, 90, 70, 100].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div 
                      className="w-full bg-gradient-to-t from-indigo-600 to-violet-500 rounded-t-lg transition-all duration-300 group-hover:from-indigo-500 group-hover:to-violet-400 shadow-md shadow-indigo-500/10"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-[10px] text-slate-500 font-medium">M{i+1}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 text-xs text-slate-400">
                <span>Target: $100k / mo</span>
                <span className="text-indigo-400 font-medium">Updated just now</span>
              </div>
            </div>

            {/* Recent Activity / Quick Stats */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white mb-1">Top Channels</h3>
                <p className="text-xs text-slate-400 mb-6">Traffic sources driving highest conversions</p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300 font-medium">Direct Organic</span>
                      <span className="text-slate-400">45%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300 font-medium">Social Media Ads</span>
                      <span className="text-slate-400">30%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-violet-500 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300 font-medium">Affiliate Partners</span>
                      <span className="text-slate-400">15%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300 font-medium">Email Campaigns</span>
                      <span className="text-slate-400">10%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 rounded-xl text-xs font-semibold transition">
                  View Detailed Analytics
                </button>
              </div>
            </div>

          </div>

          {/* Recent Transactions Table */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-white">Recent Transactions</h3>
                <p className="text-xs text-slate-400">Latest orders processed through the system</p>
              </div>
              <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition">
                View All →
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400">
                    <th className="pb-3 px-4">Order ID</th>
                    <th className="pb-3 px-4">Customer</th>
                    <th className="pb-3 px-4">Product</th>
                    <th className="pb-3 px-4">Amount</th>
                    <th className="pb-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-sm">
                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-3.5 px-4 font-mono text-xs text-indigo-400">#ORD-9021</td>
                    <td className="py-3.5 px-4 font-medium text-slate-200">Sarah Jenkins</td>
                    <td className="py-3.5 px-4 text-slate-400">Enterprise AI Plan</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-200">$1,200.00</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-3.5 px-4 font-mono text-xs text-indigo-400">#ORD-9020</td>
                    <td className="py-3.5 px-4 font-medium text-slate-200">Michael Chang</td>
                    <td className="py-3.5 px-4 text-slate-400">Cloud Infrastructure Pro</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-200">$450.00</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="py-3.5 px-4 font-mono text-xs text-indigo-400">#ORD-9019</td>
                    <td className="py-3.5 px-4 font-medium text-slate-200">Emma Watson</td>
                    <td className="py-3.5 px-4 text-slate-400">Analytics Suite License</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-200">$890.00</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}