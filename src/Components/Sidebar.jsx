import { Link } from "react-router-dom";
import { projects } from "../Data/task";
import Home from "../assets/icons/Homeicon.svg";
import Message from "../assets/icons/Messages.svg";
import Task from "../assets/icons/taskicon.svg";
import Members from "../assets/icons/Members.svg";
import Settings from "../assets/icons/setting.svg";
import PlusIconn from "../assets/icons/plusicon.svg";
import LightIcon from "../assets/icons/light.svg";

const HomeIcon = () => <img src={Home} className="w-[18px] h-[18px]" />;
const MessageIcon = () => <img src={Message} className="w-[18px] h-[18px]" />;
const TaskIcon = () => <img src={Task} className="w-[18px] h-[18px]" />;
const MembersIcon = () => <img src={Members} className="w-[18px] h-[18px]" />;
const SettingsIcon = () => <img src={Settings} className="w-[18px] h-[18px]" />;

const PlusIcon = () => 
   <img src={PlusIconn} className="w-[18px] h-[18px]" />;

const navItems = [
  { label: "Home", to: "/", icon: <HomeIcon /> },
  { label: "Messages", to: "/messages", icon: <MessageIcon />, badge: 2 },
  { label: "Tasks", to: "/tasks", icon: <TaskIcon /> },
  { label: "Members", to: "/members", icon: <MembersIcon /> },
  { label: "Settings", to: "/settings", icon: <SettingsIcon /> },
];

export default function Sidebar() {
  return (
    <aside className="w-[240px] bg-white h-full flex flex-col border-r border-gray-100 shadow-sm flex-shrink-0">

      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-gray-100">
        <div className="w-8 h-8 bg-[#7B61FF] rounded-lg flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </div>
        <span className="font-bold text-gray-900 text-[15px] tracking-tight">Project M.</span>
        <button className="ml-auto text-gray-400 hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>

      {/* Scrollable Area: Nav + Projects */}
      <div className="flex-1 overflow-y-auto min-h-0">

        {/* Nav Links */}
        <nav className="px-3 py-4 flex flex-col gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-[#F0EDFF] hover:text-[#7B61FF] transition-all"
            >
              <span className="text-gray-400">
                {item.icon}
              </span>
              {item.label}
              {item.badge && (
                <span className="ml-auto bg-[#7B61FF] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* My Projects */}
        <div className="px-5 py-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">My Projects</span>
            <button className="w-5 h-5 rounded-full text-white flex items-center justify-center hover:bg-[#6A52E8] transition-colors">
              <PlusIcon />
            </button>
          </div>
          <div className="flex flex-col gap-0.5">
            {projects.map((proj) => (
              <Link
                key={proj.id}
                to={`/project/${proj.id}`}
                className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm hover:bg-gray-50 transition-all"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: proj.color }}
                />
                <span className="font-medium text-gray-600">{proj.name}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>

    
      <div className="mx-3 mb-4 bg-[#FFF8E7] rounded-2xl p-4 text-center shrink-0">
        <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center shadow-md">
          <span className="text-lg">
            <img src={LightIcon} alt="Light Icon" />
          </span>
        </div>
        <p className="font-semibold text-gray-800 text-sm mb-1">Thoughts Time</p>
        <p className="text-gray-500 text-xs leading-relaxed mb-3">
          We don't have any notice for you, fill then you can share your thoughts with your peers.
        </p>
        <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
          Write a message
        </button>
      </div>

    </aside>
  );
}