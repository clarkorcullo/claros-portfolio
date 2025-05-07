import React from 'react';

export default function PDFViewer({ url, title }) {
  return (
    <div className="w-full h-full">
      <iframe
        src={`${url}#toolbar=0`}
        title={title}
        className="w-full h-full border-0"
        style={{ minHeight: '100%' }}
      />
    </div>
  );
} 