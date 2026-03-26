/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Calendar, Mail, Briefcase, ChevronRight, Heart, PawPrint, Star } from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
type Tab = 'home' | 'about' | 'timeline';

// --- Components ---

const Navbar = ({ activeTab, setActiveTab }: { activeTab: Tab; setActiveTab: (tab: Tab) => void }) => {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-white brutal-border rounded-full px-6 py-3 flex items-center gap-8 shadow-brutal">
        <div className="w-8 h-8 rounded-full brutal-border bg-brutal-black flex items-center justify-center">
          <PawPrint className="text-white w-5 h-5" />
        </div>
        <div className="flex items-center gap-6 font-bold">
          <button 
            onClick={() => setActiveTab('home')}
            className={cn("hover:text-brutal-blue transition-colors", activeTab === 'home' && "text-brutal-blue underline underline-offset-4 decoration-2")}
          >
            首页
          </button>
          <button 
            onClick={() => setActiveTab('about')}
            className={cn("hover:text-brutal-pink transition-colors", activeTab === 'about' && "text-brutal-pink underline underline-offset-4 decoration-2")}
          >
            我的照片
          </button>
          <button 
            onClick={() => setActiveTab('timeline')}
            className={cn("hover:text-brutal-yellow transition-colors", activeTab === 'timeline' && "text-brutal-yellow underline underline-offset-4 decoration-2")}
          >
            生命线
          </button>
        </div>
      </nav>
    </div>
  );
};

const Hero = ({ onContactClick, onViewAlbumClick }: { onContactClick: () => void; onViewAlbumClick: () => void }) => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 pt-24 gap-12 max-w-7xl mx-auto">
      <div className="flex-1 space-y-8">
        <h1 className="text-6xl md:text-8xl font-black leading-tight">
          我叫 <span className="bg-brutal-pink px-4 py-1 inline-block rotate-[-2deg]">五一</span>， <br />
          一只 <span className="bg-brutal-blue text-white px-4 py-1 inline-block rotate-[1deg]">乖狗狗</span>
        </h1>
        <p className="text-xl text-zinc-600 max-w-lg font-medium">
          我喜欢在草地上奔跑，追逐蝴蝶，还有和我的主人一起散步。我是世界上最幸福的小狗！
        </p>
        <div className="flex gap-4">
          <button 
            onClick={onContactClick}
            className="brutal-btn bg-brutal-black text-white flex items-center gap-2 hover:bg-zinc-800"
          >
            <Mail size={18} />
            联系我的哥哥
          </button>
          <button 
            onClick={onViewAlbumClick}
            className="brutal-btn bg-white flex items-center gap-2 hover:bg-zinc-50"
          >
            <Briefcase size={18} />
            查看相册
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="w-full aspect-square bg-brutal-yellow brutal-border rounded-[40px] shadow-brutal-lg overflow-hidden relative">
          <img 
            src="https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_6627.JPG" 
            alt="五一 the dog"
            className="w-full h-full object-cover transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 bg-white brutal-border p-2 rounded-xl rotate-12">
            <Star className="text-brutal-yellow fill-brutal-yellow" />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfiniteScroll = () => {
  const images = [
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_0019.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_0188.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_0424.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_0446.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_0447.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_4095.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_4096.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_4098.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_5477.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_5509.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_5629.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_5635.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_5812.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_5964.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_6397.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_6399.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_6627.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_7255.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_7256.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_7555.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_8270.JPG",
    "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_8825.JPG",
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-5xl font-black mb-4">我的日常生活</h2>
        <p className="text-xl text-zinc-600 font-bold italic">无限滚动我最喜欢的瞬间</p>
      </div>
      
      <div className="relative flex overflow-hidden py-10">
        <motion.div 
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}
          style={{ width: "fit-content" }}
        >
          {[...images, ...images].map((src, idx) => (
            <div key={idx} className="w-[300px] md:w-[400px] h-[400px] md:h-[500px] brutal-card overflow-hidden flex-shrink-0">
              <img 
                src={src} 
                alt={`Dog photo ${idx}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden py-10">
        <motion.div 
          className="flex gap-8"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }
          }}
          style={{ width: "fit-content" }}
        >
          {[...images, ...images].map((src, idx) => (
            <div key={idx} className="w-[300px] md:w-[400px] h-[400px] md:h-[500px] brutal-card overflow-hidden flex-shrink-0">
              <img 
                src={src} 
                alt={`Dog photo ${idx}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const events = [
    { 
      date: "2023年5月1日", 
      title: "被妈妈和哥哥接回家 这也是我名字的由来！", 
      desc: "我是那一窝里最小的，但叫声最响！", 
      color: "bg-brutal-pink",
      image: "https://photograph51111.oss-cn-chengdu.aliyuncs.com/6DF8236215CBCBB8B7C3AB1347638D72.png" 
    },
    { 
      date: "2023年7月5日", 
      title: "因为打了疫苗不能洗澡的我 脏兮兮", 
      desc: "但其实我很讨厌洗澡啦～", 
      color: "bg-brutal-blue",
      image: "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_3872.JPG"
    },
    { 
      date: "2023年8月11日", 
      title: "突然长长的我 亭亭玉立！", 
      desc: "耳朵也长大了", 
      color: "bg-brutal-yellow",
      image: "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_4098.JPG"
    },
    { 
      date: "2024年2月9日", 
      title: "回老家的我 再次脏兮兮", 
      desc: "老家好好玩！", 
      color: "bg-brutal-pink",
      image: "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_5294.JPG"
    },
    { 
      date: "2024年12月25日", 
      title: "过圣诞节的我", 
      desc: "我喜欢这个圣诞围脖！", 
      color: "bg-brutal-blue",
      image: "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_7553.JPG"
    },
    { 
      date: "2025年7月22日", 
      title: "等妈妈回家的我", 
      desc: "一家人都是夜猫子>.<", 
      color: "bg-brutal-yellow",
      image: "https://photograph51111.oss-cn-chengdu.aliyuncs.com/F3581D661880CE57593B44CAB7E96440.png"
    },
    { 
      date: "2025年10月15日", 
      title: "晒太阳的我", 
      desc: "舒服～～～", 
      color: "bg-brutal-pink",
      image: "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_0019.JPG"
    },
    { 
      date: "2026年1月3日", 
      title: "盖被子的我", 
      desc: "其实我的被子是哥哥高中的校服", 
      color: "bg-brutal-blue",
      image: "https://photograph51111.oss-cn-chengdu.aliyuncs.com/IMG_0424.JPG"
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-6xl font-black mb-16 text-center">五一 的生命线</h2>
      
      <div className="relative">
        {/* The vertical line - centered on desktop, left-aligned on mobile */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-brutal-black -translate-x-1/2" />
        
        <div className="space-y-16">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "relative flex items-center w-full",
                idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              )}
            >
              {/* The Dot - Centered on the line */}
              <div className="absolute left-4 md:left-1/2 w-10 h-10 brutal-border rounded-full z-10 -translate-x-1/2 bg-white flex items-center justify-center shadow-brutal-sm">
                <div className={cn("w-5 h-5 rounded-full", event.color)} />
              </div>
              
              {/* The Content Card */}
              <div className={cn(
                "w-full md:w-[45%] ml-12 md:ml-0",
                idx % 2 === 0 ? "md:text-right" : "md:text-left"
              )}>
                <div className="brutal-card p-6 hover:scale-[1.02] transition-transform duration-300 bg-white">
                  {event.image && (
                    <div className="mb-6 brutal-border overflow-hidden aspect-video">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <span className="text-sm font-black uppercase tracking-widest opacity-60 bg-zinc-100 px-2 py-0.5 rounded">{event.date}</span>
                  <h3 className="text-2xl font-black mt-3 mb-3">{event.title}</h3>
                  <p className="font-medium text-zinc-600 leading-relaxed">{event.desc}</p>
                </div>
              </div>
              
              {/* Spacer for the other side on desktop */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <div className="inline-block px-12 py-6 bg-brutal-yellow border-4 border-brutal-black shadow-brutal-black hover:translate-x-1 hover:-translate-y-1 transition-transform">
          <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            未完待续...
          </span>
        </div>
      </motion.div>
    </section>
  );
};

interface FloatingHeartProps {
  id: number;
  x: number;
  onComplete: (id: number) => void;
  key?: any;
}

const FloatingHeart = ({ id, x, onComplete }: FloatingHeartProps) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0, scale: 0.5, x }}
      animate={{ opacity: 0, y: -200, scale: 1.5, x: x + (Math.random() - 0.5) * 100 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      onAnimationComplete={() => onComplete(id)}
      className="fixed bottom-20 left-1/2 -translate-x-1/2 pointer-events-none z-[60]"
    >
      <Heart className="text-brutal-pink fill-brutal-pink" size={32} />
    </motion.div>
  );
};

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: ReactNode }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brutal-black/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white brutal-border p-8 max-w-md w-full shadow-brutal-lg"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 font-black text-2xl hover:text-brutal-pink"
            >
              ×
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [showMessage, setShowMessage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);

  const handleHeartClick = () => {
    setShowMessage(true);
    const newHeart = { id: Date.now(), x: (Math.random() - 0.5) * 200 };
    setHearts(prev => [...prev, newHeart]);
    
    // Auto hide message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };

  const removeHeart = (id: number) => {
    setHearts(prev => prev.filter(h => h.id !== id));
  };

  return (
    <div className="min-h-screen selection:bg-brutal-yellow selection:text-brutal-black">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-brutal-yellow brutal-border px-6 py-2 font-black text-xl shadow-brutal"
          >
            谢谢你对五一的喜欢
          </motion.div>
        )}
      </AnimatePresence>

      {hearts.map(heart => {
        return (
          // @ts-ignore - key prop is handled by React but linter is being strict
          <FloatingHeart 
            key={heart.id} 
            id={heart.id} 
            x={heart.x} 
            onComplete={removeHeart} 
          />
        );
      })}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-black leading-tight">
            因为我不会玩手机，所以你只能先联系我的哥哥，这是我哥哥的微信
          </h3>
          <div className="brutal-border p-2 bg-zinc-50">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=WuyiBrother" 
              alt="哥哥的微信二维码"
              className="w-full aspect-square object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="font-bold text-zinc-500 italic">扫一扫，来找我玩呀！</p>
        </div>
      </Modal>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Hero 
                onContactClick={() => setIsModalOpen(true)} 
                onViewAlbumClick={() => setActiveTab('about')}
              />
            </motion.div>
          )}
          
          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <InfiniteScroll />
            </motion.div>
          )}
          
          {activeTab === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Timeline />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 px-8 border-t-4 border-brutal-black bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full brutal-border bg-brutal-yellow flex items-center justify-center">
              <PawPrint className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black">五一.dog</span>
          </div>
          <p className="font-bold text-zinc-500">为 五一 精心制作 ❤️</p>
          <div className="flex gap-4">
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                onClick={handleHeartClick}
                className="w-10 h-10 brutal-border rounded-lg bg-white flex items-center justify-center hover:bg-brutal-pink transition-colors cursor-pointer active:scale-90"
              >
                <Heart size={20} />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
