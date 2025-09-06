// src/components/NoiseReductionResults.js
import React from 'react';

const NoiseReductionResults = ({ results }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        Noise Reduction Results
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-700">Original Image</h4>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Noisy</span>
          </div>
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <img 
              src={results.before} 
              alt="Original" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Resolution: 1920×1080 • Size: 2.4MB • Format: JPEG
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-700">Processed Image</h4>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Cleaned</span>
          </div>
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <img 
              src={results.after} 
              alt="Processed" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Resolution: 1920×1080 • Size: 3.1MB • Format: JPEG
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="font-medium text-gray-700 mb-2">Quality Metrics</h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-700">27%</div>
            <div className="text-xs text-blue-600">Noise Reduction</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-700">18%</div>
            <div className="text-xs text-green-600">Clarity Improvement</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-700">94%</div>
            <div className="text-xs text-purple-600">Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoiseReductionResults;