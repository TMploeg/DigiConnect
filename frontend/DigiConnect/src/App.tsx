import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PostList from "./components/posts/post-list/post-list";

export default function App() {
  return (
    <div id="page">
      <div>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}
