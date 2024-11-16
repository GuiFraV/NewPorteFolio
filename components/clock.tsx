'use client';

import { useState, useEffect } from 'react';

export function Clock() {
  const [time, setTime] = useState('');
  const [timezone, setTimezone] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      }));
      setTimezone(now.toLocaleDateString('en-US', { 
        timeZoneName: 'short' 
      }).split(',')[1].trim());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-sm text-muted-foreground">
      <span>{time}</span>
      <span className="ml-1 opacity-60">({timezone})</span>
    </div>
  );
}