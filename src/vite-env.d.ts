/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface Task {
  date: string;
  event: string;
  points: string;
  team: string;
}

interface Points {
  activeTasks: Task[];
  completedTasks: Task[];
  teamDS: number;
  teamDP: number;
  teamHL: number;
  total: number;
}