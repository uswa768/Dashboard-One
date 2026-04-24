import searchIcon from "../assets/icons/search.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import bellIcon from "../assets/icons/bell.svg";
import filterIcon from "../assets/icons/filter.svg";
import shareIcon from "../assets/icons/share.svg";
import gridIcon from "../assets/icons/grid.svg";
import listIcon from "../assets/icons/list.svg";
import edit from "../assets/icons/edit.svg";
import linkicon from "../assets/icons/linkicon.svg";
import plusicon from "../assets/icons/plusicon.svg";


import profilepic from "../assets/pictures/Profile-Pic.png";
import memberA from "../assets/pictures/member-a.png";
import memberB from "../assets/pictures/member-b.png";  
import memberC from "../assets/pictures/member-c.png";
import memberD from "../assets/pictures/member-d.png";

const members = [
  { img: memberA },
  { img: memberB },
  { img: memberC },
  { img: memberD },
];

export default function TopBar() {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-3 flex-shrink-0">

      {/* Top Row - Search + User */}
      <div className="flex items-center justify-between mb-4">

        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2 w-72 border border-gray-100">
          <img src={searchIcon} alt="" className="w-4 h-4 opacity-50" />
          <input
            className="bg-transparent text-sm text-gray-500 outline-none w-full placeholder-gray-400"
            placeholder="Search for anything..."
          />
        </div>

        {/* Right - icons + user */}
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <img src={calendarIcon} alt="calendar" className="w-4 h-4 opacity-50" />
          </button>
          <button className="text-gray-400 hover:text-gray-600 transition-colors relative">
            <img src={bellIcon} alt="bell" className="w-[18px] h-[18px] opacity-50" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#7B61FF] rounded-full"></span>
          </button>

          {/* User */}
          <div className="flex items-center gap-2.5 ml-2">
            <img
              src={profilepic}
              alt="Anima Agrawal"
              className="w-9 h-9 rounded-full object-cover shadow-sm"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-800">Anima Agrawal</p>
              <p className="text-xs text-gray-400">U.P, India</p>
            </div>
            <button className="text-gray-400 ml-1">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row - Title + Actions */}
      <div className="flex items-center justify-between">

        {/* Title */}
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-900">Mobile App</h1>
          <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <img src={edit} alt="edit" className="w-4.5 h-4.5 opacity-60" />
           
          </button>

          <button className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          
            <img src={linkicon} alt="link" className="w-4.5 h-4.5 opacity-60" />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          {/* Invite + Avatars */}
          <div className="flex items-center gap-2">
            <button className="text-[#7B61FF] text-sm font-medium flex items-center gap-1.5 hover:opacity-80">
               <img src={plusicon} alt="plusicon" className="w-4.5 h-4.5 opacity-60" />
              Invite
            </button>
            <div className="flex -space-x-2">
              {members.map((m, i) => (
                <img
                  key={i}
                  src={m.img}
                  alt={`member-${i}`}
                  className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm"
                />
              ))}
              <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-semibold">
                +2
              </div>
            </div>
          </div>

          <div className="w-px h-6 bg-gray-200" />

          {/* Filter */}
          <button className="flex items-center gap-1.5 text-sm text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            <img src={filterIcon} alt="filtericon" className="w-3.5 h-3.5 opacity-60" />
            Filter
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Today */}
          <button className="flex items-center gap-1.5 text-sm text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            <img src={calendarIcon} alt="" className="w-3.5 h-3.5 opacity-60" />
            Today
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div className="w-px h-6 bg-gray-200" />

          {/* Share */}
          <button className="flex items-center gap-1.5 text-sm text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            <img src={shareIcon} alt="" className="w-3.5 h-3.5 opacity-60" />
            Share
          </button>

          {/* View Toggle */}
          <div className="flex items-center bg-gray-100 rounded-lg p-0.5">
            <button className="p-1.5 rounded-md bg-[#7B61FF] text-white shadow-sm">
              <img src={gridIcon} alt="grid" className="w-4 h-4 brightness-0 invert" />
            </button>
            <button className="p-1.5 rounded-md text-gray-400 hover:text-gray-600">
              <img src={listIcon} alt="list" className="w-4 h-4 opacity-50" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}