'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Chinese AI Model Partners
const aiPartners = [
  { name: 'DeepSeek', icon: '/deepseek-color.svg' },
  { name: 'Qwen', icon: '/qwen-color.svg' },
  { name: 'Kimi', icon: '/moonshot.svg' },
  { name: 'Z.ai', icon: '/zhipu-color.svg' },
  { name: 'MiniMax', icon: '/minimax-color.svg' },
  { name: 'ByteDance', icon: '/bytedance-color.svg' },
];

export default function AIPartners() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            AI Model Partners
          </h2>
          <p className="text-base text-slate-500">
            Supporting leading Chinese AI models
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {aiPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-blue-200 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                <Image 
                  src={partner.icon} 
                  alt={partner.name} 
                  width={56}
                  height={56}
                  className="object-contain md:w-14 md:h-14"
                />
              </div>
              <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}