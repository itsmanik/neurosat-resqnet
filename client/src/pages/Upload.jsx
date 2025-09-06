// src/pages/Upload.js
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud, FiCheckCircle, FiLoader, FiArrowRight, FiSliders, FiFile, FiImage } from 'react-icons/fi';

// --- Sub-components defined inside the same file ---

// 1. FileUploadDropzone Component
const FileUploadDropzone = ({ onFileUpload, uploadedFile, title, acceptedTypes }) => {
  const onDrop = useCallback(acceptedFiles => {
    onFileUpload(acceptedFiles[0]);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: acceptedTypes, maxFiles: 1 });

  return (
    <div 
      {...getRootProps()} 
      className={`p-6 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${
        isDragActive ? 'border-indigo-400 bg-slate-700/50' : 'border-slate-600 hover:border-indigo-500'
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center text-center">
        {uploadedFile ? (
          <>
            <FiCheckCircle className="w-12 h-12 text-emerald-400 mb-2" />
            <p className="font-semibold text-white">{uploadedFile.name}</p>
            <p className="text-xs text-slate-400">{Math.round(uploadedFile.size / 1024)} KB</p>
          </>
        ) : (
          <>
            <FiUploadCloud className="w-12 h-12 text-slate-500 mb-2" />
            <p className="font-semibold text-white">{title}</p>
            <p className="text-xs text-slate-400">Drag & drop or click to upload</p>
          </>
        )}
      </div>
    </div>
  );
};

// 2. ProcessingOptions Component
const ProcessingOptions = ({ selectedOptions, onOptionChange, onProcess, processing, hasFiles }) => {
  const toggleOption = (option) => {
    onOptionChange(prev => ({ ...prev, [option]: !prev[option] }));
  };

  return (
    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <FiSliders className="mr-2" />
        Processing Options
      </h3>
      <div className="space-y-4 flex-grow">
        {['noiseReduction', 'damageDetection', 'riskHeatmap'].map(option => (
          <div key={option} className="flex items-center justify-between">
            <label htmlFor={option} className="text-slate-300 capitalize">
              {option.replace(/([A-Z])/g, ' $1')}
            </label>
            <button
              id={option}
              onClick={() => toggleOption(option)}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
                selectedOptions[option] ? 'bg-indigo-500' : 'bg-slate-600'
              }`}
            >
              <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                selectedOptions[option] ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        ))}
      </div>
      <button 
        onClick={onProcess}
        disabled={!hasFiles || processing}
        className="w-full mt-6 bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-500 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
      >
        {processing ? <FiLoader className="animate-spin mr-2" /> : <FiArrowRight className="mr-2" />}
        {processing ? 'Processing...' : 'Start Analysis'}
      </button>
    </div>
  );
};

// 3. ResultsSection Component
const ResultsSection = ({ results, selectedOptions }) => (
  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
    <h2 className="text-2xl font-bold text-white mb-6">Analysis Results</h2>
    <div className="space-y-8">
      {selectedOptions.damageDetection && results.damageDetection && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Damage Detection</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <img src={results.damageDetection.before} alt="Before" className="rounded-lg mb-2" />
              <p className="text-sm text-slate-400">Before</p>
            </div>
            <div className="text-center">
              <img src={results.damageDetection.after} alt="After" className="rounded-lg mb-2" />
              <p className="text-sm text-slate-400">After</p>
            </div>
          </div>
          <div className="mt-4 bg-slate-700/50 p-4 rounded-lg text-center">
            <p className="text-slate-300">Damage Detected: <span className="font-bold text-red-400">{results.damageDetection.damagePercent}%</span></p>
          </div>
        </div>
      )}
      {/* Add similar blocks for other results like noise reduction or heatmap */}
    </div>
  </div>
);


// --- Main Upload Page Component ---
const Upload = () => {
  const [uploadedFiles, setUploadedFiles] = useState({
    beforeImage: null,
    afterImage: null,
    gisData: null
  });
  const [selectedOptions, setSelectedOptions] = useState({
    noiseReduction: true,
    damageDetection: true,
    riskHeatmap: false
  });
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState(null);

  const handleFileUpload = (type, file) => {
    setUploadedFiles(prev => ({ ...prev, [type]: file }));
  };

  const handleProcess = () => {
    setProcessing(true);
    setResults(null);
    // Simulate processing
    setTimeout(() => {
      setResults({
        damageDetection: { before: 'https://via.placeholder.com/400x300/cccccc/000000?text=Before', after: 'https://via.placeholder.com/400x300/ff7f7f/000000?text=After+Damage', damagePercent: 15.3 },
      });
      setProcessing(false);
    }, 3000);
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <main className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Upload Data</h1>
          <p className="mt-1 text-slate-400">Upload satellite imagery and GIS data for analysis.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2 bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-6">Data Sources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FileUploadDropzone 
                onFileUpload={(file) => handleFileUpload('beforeImage', file)}
                uploadedFile={uploadedFiles.beforeImage}
                title="Before Image"
                acceptedTypes={{'image/*': ['.jpeg', '.png']}}
              />
              <FileUploadDropzone 
                onFileUpload={(file) => handleFileUpload('afterImage', file)}
                uploadedFile={uploadedFiles.afterImage}
                title="After Image"
                acceptedTypes={{'image/*': ['.jpeg', '.png']}}
              />
              <FileUploadDropzone 
                onFileUpload={(file) => handleFileUpload('gisData', file)}
                uploadedFile={uploadedFiles.gisData}
                title="GIS Data (.geojson)"
                acceptedTypes={{'application/json': ['.geojson']}}
              />
            </div>
          </div>

          {/* Processing Options */}
          <div className="lg:col-span-1">
            <ProcessingOptions 
              selectedOptions={selectedOptions}
              onOptionChange={setSelectedOptions}
              onProcess={handleProcess}
              processing={processing}
              hasFiles={!!uploadedFiles.beforeImage && !!uploadedFiles.afterImage}
            />
          </div>
        </div>

        {/* Results Section - shows a loading state or the results */}
        {(processing || results) && (
          <div className="mt-8">
            {processing ? (
              <div className="bg-slate-800 p-12 rounded-2xl border border-slate-700 flex flex-col items-center justify-center">
                <FiLoader className="w-16 h-16 text-indigo-400 animate-spin" />
                <p className="mt-4 text-lg font-semibold text-white">Analyzing Data...</p>
                <p className="text-slate-400">This may take a few moments.</p>
              </div>
            ) : results && (
              <ResultsSection results={results} selectedOptions={selectedOptions} />
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Upload;
