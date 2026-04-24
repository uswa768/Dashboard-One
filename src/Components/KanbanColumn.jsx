import TaskCard from "./TaskCard";
import { columns } from "../data/task";

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function KanbanColumn({ column }) {
  return (
    <div className="flex flex-col w-[300px] shrink-0 h-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: column.color }} />
          <h2 className="font-semibold text-gray-700 text-sm">{column.title}</h2>
          <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-xs flex items-center justify-center font-semibold">
            {column.count}
          </span>
        </div>
        <button className="w-6 h-6 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 flex items-center justify-center transition-colors">
          <PlusIcon />
        </button>
      </div>

      {/* Color line */}
      <div className="h-1 rounded-full mb-4" style={{ backgroundColor: column.color }} />

      {/* Cards */}
      <div className="flex flex-col gap-3 pb-4 pr-1">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}

        {/* Add Task */}
        <button className="flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-500 transition-colors text-sm font-medium mt-1">
          <PlusIcon />
          Add Task
        </button>
      </div>

    </div>
  );
}