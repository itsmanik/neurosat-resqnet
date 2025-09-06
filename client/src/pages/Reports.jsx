// src/pages/Reports.js
import React from 'react';
import { FiFileText, FiCalendar, FiMapPin, FiBarChart, FiCheck, FiDownload, FiPlus } from 'react-icons/fi';

// --- ReportCard Sub-component ---
const ReportCard = ({ report }) => {
  const statusColors = {
    completed: 'bg-emerald-500',
    in_progress: 'bg-amber-500',
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg hover:-translate-y-1 transition-transform duration-300 flex flex-col">
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-white mb-2">{report.title}</h3>
        <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4">
          <span className="flex items-center"><FiCalendar className="mr-1.5" /> {report.date}</span>
          <span className="flex items-center"><FiMapPin className="mr-1.5" /> {report.location}</span>
        </div>
        
        {/* Progress Bar for Damage/Safe Zones */}
        <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
          <div className="bg-red-500 h-2.5 rounded-l-full" style={{ width: `${report.damagePercent}%` }}></div>
        </div>
        <div className="flex justify-between text-xs text-slate-300 mb-4">
          <span>Damage: <span className="font-semibold text-red-400">{report.damagePercent}%</span></span>
          <span>Safe: <span className="font-semibold text-emerald-400">{report.safeZones}%</span></span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className={`flex items-center text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[report.status]} text-white`}>
          {report.status === 'completed' ? <FiCheck className="mr-1" /> : null}
          {report.status.replace('_', ' ')}
        </span>
        <button className="flex items-center text-sm text-indigo-400 hover:text-indigo-300 font-semibold">
          <FiDownload className="mr-1.5" />
          Download
        </button>
      </div>
    </div>
  );
};


// --- Main Reports Page Component ---
const Reports = () => {
  const reports = [
    { id: 1, title: 'Hurricane Damage Assessment', date: 'Oct 15, 2023', location: 'Eastern Coast', damagePercent: 15.3, safeZones: 84.7, status: 'completed' },
    { id: 2, title: 'Earthquake Impact Analysis', date: 'Sep 28, 2023', location: 'Northern Region', damagePercent: 22.8, safeZones: 77.2, status: 'completed' },
    { id: 3, title: 'Flood Zone Mapping', date: 'Aug 05, 2023', location: 'River Delta Area', damagePercent: 31.5, safeZones: 68.5, status: 'completed' }
  ];

  const reportStats = [
    { label: 'Total Reports', value: reports.length, color: 'indigo' },
    { label: 'Completed', value: reports.filter(r => r.status === 'completed').length, color: 'emerald' },
    { label: 'In Progress', value: 0, color: 'amber' },
    { label: 'Avg. Accuracy', value: '92%', color: 'purple' },
  ];

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <main className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <div className="flex text-center flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Analysis Reports</h1>
            <p className="mt-1 text-slate-400 mb-4">Access and download previous disaster analysis reports.</p>
          </div>
          <button className="mt-4 md:mt-0 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors flex items-center justify-center">
            <FiPlus className="mr-2" />
            Generate New Report
          </button>
        </div>

        {/* Report Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reportStats.map(stat => (
            <div key={stat.label} className={`bg-slate-800 p-5 rounded-2xl border border-slate-700 text-center`}>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className={`text-sm font-medium text-${stat.color}-400`}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map(report => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Reports;
