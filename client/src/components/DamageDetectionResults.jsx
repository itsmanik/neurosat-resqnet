// src/components/DamageDetectionResults.js
import React from 'react';

const DamageDetectionResults = ({ results }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Damage Detection Results
      </h3>
      
      <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="font-medium text-red-800">Damage Detected: {results.damagePercent}% of area</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-700">Before Disaster</h4>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Normal</span>
          </div>
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <img 
              src={results.before} 
              alt="Before disaster" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-700">After Disaster</h4>
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Damage Marked</span>
          </div>
          <div className="border-2 border-red-300 rounded-md overflow-hidden">
            <img 
              src={results.after} 
              alt="After disaster with damage marked" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 border-2 border-red-500 rounded pointer-events-none"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="font-medium text-gray-700 mb-3">Damage Classification</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
            <div className="flex justify-between items-center">
              <span className="text-red-700 font-medium">Severe Damage</span>
              <span className="text-red-700 font-bold">7.2%</span>
            </div>
            <div className="mt-2 h-2 bg-red-200 rounded-full">
              <div className="h-2 bg-red-600 rounded-full" style={{ width: '7.2%' }}></div>
            </div>
          </div>
          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex justify-between items-center">
              <span className="text-yellow-700 font-medium">Moderate Damage</span>
              <span className="text-yellow-700 font-bold">5.8%</span>
            </div>
            <div className="mt-2 h-2 bg-yellow-200 rounded-full">
              <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '5.8%' }}></div>
            </div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex justify-between items-center">
              <span className="text-green-700 font-medium">Minimal Damage</span>
              <span className="text-green-700 font-bold">2.3%</span>
            </div>
            <div className="mt-2 h-2 bg-green-200 rounded-full">
              <div className="h-2 bg-green-500 rounded-full" style={{ width: '2.3%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamageDetectionResults;