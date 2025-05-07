import React from 'react';

export default function PDFViewer({ isOpen, onClose, pdfUrl }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">View Credential</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>
        <div className="flex-grow p-4">
          <iframe
            src={`${pdfUrl}#toolbar=0`}
            className="w-full h-full"
            title="PDF Viewer"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
} 