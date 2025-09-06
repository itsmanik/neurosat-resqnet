// src/components/SystemStatusPanel.js
import React from 'react';

const SystemStatusPanel = () => {
  const systemStatus = [
    { name: 'AI Processing Engine', status: 'Operational', color: 'emerald' },
    { name: 'Data Storage', status: 'Healthy', color: 'emerald' },
    { name: 'API Response', status: 'Degraded', color: 'amber' },
    { name: 'Image Ingestion', status: 'Offline', color: 'red' }
  ];

  const StatusIndicator = ({ color }) => {
    const colorClasses = {
      emerald: 'bg-emerald-500',
      amber: 'bg-amber-500',
      red: 'bg-red-500',
    };
    const isPulsing = color === 'emerald';

    return (
      <span className={`relative flex h-3 w-3`}>
        {isPulsing && <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colorClasses[color]} opacity-75`}></span>}
        <span className={`relative inline-flex rounded-full h-3 w-3 ${colorClasses[color]}`}></span>
      </span>
    );
  };
  
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 h-full">
      <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
      <div className="space-y-4">
        {systemStatus.map(system => (
          <div key={system.name} className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <StatusIndicator color={system.color} />
              <span className="text-sm font-medium text-slate-300">{system.name}</span>
            </div>
            <span className={`text-xs font-semibold text-${system.color}-400`}>
              {system.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemStatusPanel;
