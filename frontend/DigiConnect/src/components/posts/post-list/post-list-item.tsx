import Post from "../../../models/post";

interface Props {
  post: Post;
}

export default function PostListItem({ post, ...props }: Props) {
  return (
    <div {...props} className="post-list-item">
      <div className="list-item-title">{post.title}</div>
      <div className="list-item-content">{post.content}</div>
    </div>
  );
}
