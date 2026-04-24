import { columns } from "../Data/task";
import KanbanColumn from "./KanbanColumn";

export default function KanbanBoard() {
  return (
    <div className="flex gap-5 min-h-full px-6 py-5 overflow-x-auto items-start">
      {columns.map((column) => (
        <KanbanColumn key={column.id} column={column} />
      ))}
    </div>
  );
}