import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Tasks from "./pages/Task";
import Members from "./pages/Members";
import Settings from "./pages/Setting";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="members" element={<Members />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}