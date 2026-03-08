'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Enterprises Served' },
  { value: '$2M+', label: 'Compute Tokens Sold' },
  { value: '48h', label: 'Integration Time' },
  { value: '98%', label: 'Client Retention' },
  { value: '5', label: 'Countries Served' }
];

export default function StatsBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCounter
                value={parseInt(stat.value.replace(/[^\d]/g, ''))}
                suffix={stat.value.replace(/[\d]/g, '')}
                className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2"
              />
              <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

const AnimatedCounter = ({ value, suffix = '', className }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    const increment = value / totalFrames;

    let currentFrame = 0;
    const timer = setInterval(() => {
      currentFrame++;
      const currentValue = Math.ceil(increment * currentFrame);

      if (currentFrame < totalFrames) {
        setCount(currentValue);
      } else {
        setCount(value);
        clearInterval(timer);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className={className}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};