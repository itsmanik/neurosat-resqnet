// src/pages/Dashboard.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGrid, FiUpload, FiBarChart2, FiArrowUp, FiArrowDown, FiAlertTriangle, FiCheckCircle, FiCpu, FiClock, FiShield } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, Legend } from 'recharts';
import CountUp from 'react-countup';
import { formatDistanceToNow } from 'date-fns';

// --- Sub-components defined inside the same file ---

// 1. DashboardCard Component
const DashboardCard = ({ title, value, change, changePositive, icon, color }) => {
  const isPositive = changePositive;
  const ChangeIcon = isPositive ? FiArrowUp : FiArrowDown;
  const changeColor = isPositive ? 'text-emerald-400' : 'text-red-400';

  const colorThemes = {
    indigo: { iconBg: 'bg-indigo-500/10', iconText: 'text-indigo-400' },
    red: { iconBg: 'bg-red-500/10', iconText: 'text-red-400' },
    blue: { iconBg: 'bg-blue-500/10', iconText: 'text-blue-400' },
    green: { iconBg: 'bg-emerald-500/10', iconText: 'text-emerald-400' },
  };
  
  const theme = colorThemes[color] || colorThemes.indigo;

  return (
    <div className="bg-slate-800 p-5 rounded-2xl shadow-lg border border-slate-700 hover:-translate-y-1 transition-transform duration-300 flex items-start space-x-4">
      <div className={`p-3 rounded-lg ${theme.iconBg}`}>
        <div className={theme.iconText}>{icon}</div>
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-400">{title}</p>
        <div className="flex items-baseline space-x-2 mt-1">
          <p className="text-2xl font-bold text-white">
            <CountUp end={parseInt(value.toString().replace(/,/g, ''))} duration={1.5} separator="," />
            {typeof value === 'string' && value.includes('s') ? 's' : ''}
          </p>
          <div className={`flex items-center text-xs font-semibold ${changeColor}`}> 
            <ChangeIcon className="w-3 h-3" />
            <span>{change}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. GlobalFilters Component
const GlobalFilters = () => (
  <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
    <div className="flex items-center space-x-2">
      <button className="px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
        Last 24h
      </button>
      <button className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
        Last 7d
      </button>
      <button className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
        Last 30d
      </button>
    </div>
    <div className="relative w-full sm:w-auto">
      <input 
        type="text" 
        className="bg-slate-800 border border-slate-700 rounded-lg pl-4 pr-4 py-2 text-sm text-white w-full" 
        placeholder="Select date range..."
      />
    </div>
  </div>
);

// 3. AnalyticsChart Component
const analyticsData = [
  { name: 'Mon', processed: 400, damaged: 240 },
  { name: 'Tue', processed: 300, damaged: 139 },
  { name: 'Wed', processed: 200, damaged: 480 },
  { name: 'Thu', processed: 278, damaged: 390 },
  { name: 'Fri', processed: 189, damaged: 280 },
  { name: 'Sat', processed: 239, damaged: 380 },
  { name: 'Sun', processed: 349, damaged: 430 },
];

const AnalyticsChart = () => (
  <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
      <FiBarChart2 className="mr-2" />
      Weekly Processing Trends
    </h3>
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={analyticsData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff' }} labelStyle={{ color: '#9ca3af' }}/>
          <Legend wrapperStyle={{ fontSize: '14px' }} />
          <Line type="monotone" dataKey="processed" stroke="#818cf8" strokeWidth={2} activeDot={{ r: 8 }} name="Processed" />
          <Line type="monotone" dataKey="damaged" stroke="#f87171" strokeWidth={2} name="Damaged" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// 4. SystemLoadGauge Component
const systemLoadData = [{ name: 'System Load', value: 72 }];

const SystemLoadGauge = () => (
  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
    <h3 className="text-lg font-semibold text-white mb-4">AI Engine Load</h3>
    <ResponsiveContainer width="100%" height={200}>
      <RadialBarChart innerRadius="70%" outerRadius="85%" data={systemLoadData} startAngle={180} endAngle={0}>
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar background clockWise dataKey="value" fill="#818cf8" cornerRadius={10} />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold fill-white">
          {`${systemLoadData[0].value}%`}
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  </div>
);

// 5. ActivityFeed Component
const activities = [
  { id: 1, icon: <FiCheckCircle className="w-5 h-5 text-emerald-400" />, event: 'New image batch processed', timestamp: new Date() },
  { id: 2, icon: <FiAlertTriangle className="w-5 h-5 text-red-400" />, event: 'Damage detected in Sector 4', timestamp: new Date(Date.now() - 5 * 60 * 1000) },
  { id: 3, icon: <FiCpu className="w-5 h-5 text-blue-400" />, event: 'AI model recalibrated', timestamp: new Date(Date.now() - 60 * 60 * 1000) },
];

const ActivityFeed = () => (
  <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
    <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
    <ul className="space-y-4">
      {activities.map(activity => (
        <li key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
          <div className="p-3 rounded-full bg-slate-700/50">{activity.icon}</div>
          <div>
            <p className="font-medium text-slate-200">{activity.event}</p>
            <p className="text-xs text-slate-400">
              {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);


// --- Main Dashboard Page ---
const Dashboard = () => {
  const stats = [
    { title: 'Processed Images', value: '1,245', change: '+12%', changePositive: true, icon: <FiGrid className="w-6 h-6" />, color: 'indigo' },
    { title: 'Damage Detected', value: '327', change: '+5%', changePositive: false, icon: <FiAlertTriangle className="w-6 h-6" />, color: 'red' },
    { title: 'Risk Zones', value: '89', change: '-3%', changePositive: true, icon: <FiShield className="w-6 h-6" />, color: 'blue' },
    { title: 'Avg. Processing Time', value: '4.2s', change: '-18%', changePositive: true, icon: <FiClock className="w-6 h-6" />, color: 'green' }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
        <GlobalFilters />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left/Main Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => <DashboardCard key={index} {...stat} />)}
            </div>
            <AnalyticsChart />
          </div>

          {/* Right Sidebar Column */}
          <aside className="space-y-8">
            <SystemLoadGauge />
            <ActivityFeed />
          </aside>
        </div>
      </main>

    </div>
  );
};

export default Dashboard;
