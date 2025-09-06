// src/components/FileUpload.js
import React from 'react';

const FileUpload = ({ uploadedFiles, onFileUpload }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileUpload(type, e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e, type) => {
    if (e.target.files && e.target.files[0]) {
      onFileUpload(type, e.target.files[0]);
    }
  };

  const UploadArea = ({ type, label, accept }) => (
    <div 
      className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, type)}
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p className="text-sm text-gray-600">
          {uploadedFiles[type] ? uploadedFiles[type].name : `Drag & drop your ${label} or`}
        </p>
        <label htmlFor={type} className="relative cursor-pointer">
          <span className="text-blue-600 hover:text-blue-500 font-medium">browse files</span>
          <input 
            id={type} 
            name={type} 
            type="file" 
            className="sr-only" 
            accept={accept}
            onChange={(e) => handleFileSelect(e, type)}
          />
        </label>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Data Upload</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Before & After Images</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UploadArea 
              type="beforeImage" 
              label="Before image" 
              accept="image/*" 
            />
            <UploadArea 
              type="afterImage" 
              label="After image" 
              accept="image/*" 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">GIS Hazard Data</label>
          <UploadArea 
            type="gisData" 
            label="GIS data (Shapefile/CSV)" 
            accept=".shp,.dbf,.shx,.csv,.geojson" 
          />
          <p className="mt-1 text-xs text-gray-500">Supports Shapefiles (zipped) and CSV files with geographic data</p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;