import { useEffect, useState } from "react";
import PostListItem from "./post-list-item";
import Post from "../../../models/post";
import "./post-list.css";
import { HashLoader } from "react-spinners";
import { useApi } from "../../../hooks";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const { get } = useApi();
  const navigate = useNavigate();

  console.log(posts);
  useEffect(() => {
    axios.get("http://");
    get<Post[]>("posts").then((response) => setPosts(response.data));
  }, []);

  if (!posts) {
    return (
      <div className="loader-container">
        <HashLoader speedMultiplier={1.2} size="200px" color="#5599bb" />
      </div>
    );
  }

  return (
    <div className="post-list page">
      <div>
        <button onClick={() => navigate("/create")}>Post</button>
      </div>
      {posts.map((post) => (
        <PostListItem post={post}></PostListItem>
      ))}
    </div>
  );
}
