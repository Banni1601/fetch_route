import "./index.css";
import { Link } from "react-router-dom";

// Example

export const DataItems = (props) => {
  const { data } = props;
  const { id, topic, title, author, avatarUrl, imageUrl } = data;
  return (
    <div>
      <p>{id}</p>
      <h1>{topic}</h1>
      <Link to={`/blogs/${id}`}>
        <h1>{title}</h1>
      </Link>
      <h1>{author}</h1>
      <img src={avatarUrl} alt={title} />
      <img src={imageUrl} alt={title} />
    </div>
  );
};
