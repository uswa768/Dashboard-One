import onboardingImg from "../assets/pictures/onboarding.png";
import moodboard1Img from "../assets/pictures/moodboard1.jpg";
import moodboard2Img from "../assets/pictures/moodboard2.jpg";
import mobileappImg from "../assets/pictures/mobileapp.png";

const CommentIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const FileIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const ImagePlaceholder = ({ type }) => {
  if (type === "illustrations") {
    return (
      <img
        src={onboardingImg}
        alt="Onboarding"
        className="w-full h-28 rounded-xl mb-3 object-cover"
      />
    );
  }
  if (type === "moodboard") {
    return (
      <div className="w-full h-28 rounded-xl mb-3 overflow-hidden flex gap-1">
        <img src={moodboard1Img} alt="Moodboard 1" className="w-1/2 h-full object-cover rounded-l-xl" />
        <img src={moodboard2Img} alt="Moodboard 2" className="w-1/2 h-full object-cover rounded-r-xl" />
      </div>
    );
  }
  if (type === "mobileapp") {
    return (
      <img
        src={mobileappImg}
        alt="Mobile App"
        className="w-full h-28 rounded-xl mb-3 object-cover"
      />
    );
  }
  return null;
};

const imageTypeMap = {
  4: "illustrations",
  5: "moodboard",
  6: "mobileapp",
};

export default function TaskCard({ task }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group border border-gray-50 hover:border-gray-100">

      {/* Priority */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ color: task.priorityColor, backgroundColor: task.priorityBg }}
        >
          {task.priority}
        </span>
        <button className="text-gray-300 hover:text-gray-500 opacity-0 group-hover:opacity-100 transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="5" r="1" fill="currentColor" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="12" cy="19" r="1" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Image if any */}
      {task.hasImage && <ImagePlaceholder type={imageTypeMap[task.id]} />}

      {/* Title */}
      <h3 className="font-semibold text-gray-800 text-[14px] mb-1 leading-snug">{task.title}</h3>

      {/* Description */}
      {task.description && (
        <p className="text-gray-400 text-xs leading-relaxed mb-3">{task.description}</p>
      )}

      {/* Divider */}
      <div className="border-t border-gray-100 my-3" />

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-1.5">
          {task.members.map((m, i) => (
            m.image ? (
              <img
                key={i}
                src={m.image}
                alt={m.initials}
                className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-sm"
              />
            ) : (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow-sm"
                style={{ backgroundColor: m.color }}
              >
                {m.initials}
              </div>
            )
          ))}
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <span className="flex items-center gap-1 text-xs">
            <CommentIcon />
            {task.comments} comments
          </span>
          {task.files > 0 && (
            <span className="flex items-center gap-1 text-xs">
              <FileIcon />
              {task.files} files
            </span>
          )}
        </div>
      </div>

    </div>
  );
}