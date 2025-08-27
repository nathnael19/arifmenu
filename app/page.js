// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />

//       </main>

//     </div>
//   );
// }


"use client"

import { useState } from "react"
import LoginScreen from "./auth/login/page"
// import ForgotPasswordScreen from "./components/ForgotPasswordScreen"
// import CheckInboxScreen from "./components/CheckInboxScreen"
// import MerchantDashboard from "./components/MerchantDashboard"
// import CustomerApp from "./components/CustomerApp"

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("login")
  const [userEmail, setUserEmail] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [showCustomerApp, setShowCustomerApp] = useState(false)

  const handleScreenChange = (screen, email = "") => {
    setCurrentScreen(screen)
    if (email) setUserEmail(email)
  }

  const handleLogin = (userData) => {
    setIsAuthenticated(true)
    setUser(userData)
    setCurrentScreen("dashboard")
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    setCurrentScreen("login")
    setUserEmail("")
    setShowCustomerApp(false)
  }

  // const renderScreen = () => {
  //   if (showCustomerApp) {
  //     return <CustomerApp onBackToMerchant={() => setShowCustomerApp(false)} />
  //   }

  //   if (isAuthenticated) {
  //     return (
  //       <MerchantDashboard user={user} onLogout={handleLogout} onShowCustomerApp={() => setShowCustomerApp(true)} />
  //     )
  //   }

  //   switch (currentScreen) {
  //     case "login":
  //       return <LoginScreen onScreenChange={handleScreenChange} onLogin={handleLogin} />
  //     case "forgot-password":
  //       return <ForgotPasswordScreen onScreenChange={handleScreenChange} />
  //     case "check-inbox":
  //       return <CheckInboxScreen userEmail={userEmail} onScreenChange={handleScreenChange} onLogin={handleLogin} />
  //     default:
  //       return <LoginScreen onScreenChange={handleScreenChange} onLogin={handleLogin} />
  //   }
  // }
return (
  <LoginScreen />
)
  // return <div className="min-h-screen bg-gray-100">{renderScreen()}</div>
}
