import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import TopBar from "../Components/TopBar";

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-[#F5F5F5] font-['Plus_Jakarta_Sans',sans-serif]">
      <Sidebar />
      <div className="flex flex-1 flex-col min-h-0">
        <TopBar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />  
        </main>
      </div>
    </div>
  );
}