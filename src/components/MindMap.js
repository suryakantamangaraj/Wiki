import React, { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';

const MindMap = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const filePath = path.resolve(__dirname, '../../mindmap.mmd');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading mindmap.mmd:', err);
        return;
      }
      setContent(data);
    });
  }, []);

  return (
    <pre>
      <code>
        {content}
      </code>
    </pre>
  );
};

export default MindMap;
