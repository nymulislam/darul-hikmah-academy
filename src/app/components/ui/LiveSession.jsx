import { Icon } from "@iconify/react";

const LiveSession = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-1 h-full rounded-[2rem] bg-secondary p-3 shadow-xl">
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20">
      <Icon icon="solar:videocamera-record-bold" className="text-3xl text-white" />
    </div>
    <p className="text-[11px] font-black uppercase tracking-widest text-white/80">
      Live Sessions
    </p>
    <p className="text-xs text-white/60 text-center leading-relaxed">
      Join the class now
    </p>
    <span className="flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-green-400 animate-ping absolute" />
      <span className="w-2 h-2 rounded-full bg-green-400 relative" />
      <span className="text-[10px] font-bold text-green-300">LIVE</span>
    </span>
  </div>
    );
};

export default LiveSession;