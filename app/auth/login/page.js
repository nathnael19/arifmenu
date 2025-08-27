"use client";

import LeftPanel from "@/components/auth/LeftPanel";
import RightPanel from "@/components/auth/RightPanel";

export default function LoginScreen({ onScreenChange, onLogin }) {
  return (
<div className="min-h-screen flex flex-col md:flex-row bg-green-600 md:bg-[#f3f4f6] relative">
      <div className="relative w-full grid grid-cols-1 grid-rows-1 md:flex md:flex-row md:space-x-4 md:items-center">
        <div className="col-start-1 row-start-1 md:relative md:flex-1 z-0">
          <LeftPanel />
        </div>

          <div className="col-start-1 row-start-1 flex items-center justify-center md:relative md:flex-1 z-10">
          <div className="mx-4 md:mx-0 my-10">
            <RightPanel onScreenChange={onScreenChange} onLogin={onLogin} />
          </div>
        
        </div>
      </div>
    </div>
  );
}



