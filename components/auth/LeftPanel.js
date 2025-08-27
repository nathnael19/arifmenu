"use client";

export default function LeftPanel() {
  return (
    <div className="bg-green-600 rounded-none md:rounded-2xl h-[600px] md:h-[600px] relative overflow-hidden">
      {/* Background Shape */}
      <img
        src="/images/xor.svg"
        alt="background shape"
        className="absolute w-full h-full object-cover opacity-40"
      />

      {/* Desktop Branding Text */}
      <div className="fixed z-10 hidden md:flex flex-col justify-center items-start  text-white ">
        <div className="">
          <img
            src="/images/ariflogo.svg"
            alt="Arifpay Logo"
            className="w-65 h-62 mb-30"
          />
        </div>
        <div className="max-w-md">
          <h2 className="text-2xl mb-4">
            WELCOME TO <span className="font-bold">ARIF MENU</span>
          </h2>
          <p className="text-green-100 leading-relaxed text-l max-w-95 ">
            Welcome to Arif Menu — where managing menus for all our Merchants
            becomes simple, organized, and stress-free. Stay focused, stay
            efficient, and deliver excellence every day.
          </p>
        </div>
      </div>
    </div>
  );
}







// "use client";

// import { useState } from "react";
// import "../../public/images/ariflogo.svg";
// import "../../public/images/xor.svg";
// import "../../public/images/bottomarificon.svg";

// export default function LoginScreen() {
//   return (
//     <div className="min-h-screen flex bg-white">
//       {/* Left Side - Brand Section */}
//       <div className="hidden lg:flex lg:w-1/2 m-3 rounded-2xl bg-gradient-to-br bg-[#3ca32b] relative overflow-hidden">
//         <img
//           src="/images/xor.svg"
//           alt="foreground"
//           className="absolute  w-full h-full "
//         />

//         <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white">
//           <div className="mb-8">
//             <img
//               src="/images/ariflogo.svg"
//               alt="Arifpay Logo"
//               className="w-203 h-82 mb-60"
//             />
//           </div>

//           <div className="max-w-md">
//             <h2 className="text-3xl mb-4">
//               WELCOME TO <span className="font-bold">ARIF MENU</span>
//             </h2>
//             <p className="text-green-100 leading-relaxed text-xl">
//               Welcome to Arif Menu — where managing menus for all our Merchants
//               becomes simple, organized, and stress-free. Stay focused, stay
//               efficient, and deliver excellence every day.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
