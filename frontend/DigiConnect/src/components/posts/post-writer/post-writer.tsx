import { useState } from "react";
import Post from "../../../models/post";
import { useApi } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import "./post.writer.css";

export default function PostWriter() {
  const [newPost, setNewPost] = useState<Post>({
    id: "",
    title: "",
    content: "",
  });
  const { post } = useApi();
  const navigate = useNavigate();

  return (
    <div className="post-writer">
      <input
        value={newPost.title}
        onChange={(event) => updateTitle(event.target.value)}
        placeholder="title"
      />
      <textarea
        value={newPost.content}
        onChange={(event) => updateContent(event.target.value)}
        placeholder="content"
      />
      <button onClick={submit}>Submit</button>
    </div>
  );

  function updateTitle(title: string) {
    setNewPost((newPost) => ({ ...newPost, title }));
  }

  function updateContent(content: string) {
    setNewPost((newPost) => ({ ...newPost, content }));
  }

  function submit() {
    post("posts", newPost).then(() => navigate("/"));
  }
}
