import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";

function PostList() {
  return (
    <>
    <NewPost />
    <ul className={ classes.posts }>
      <Post author="Lionel Messi" body="React is awesome!" />
      <Post author="Cristiano Ronaldo" body="Frontend development is awesome!" />
      <Post author="Erling Haaland" body="PHP is awesome!" />
      <Post author="Vinicius Jr." body="Laravel is awesome!" />
    </ul>
    </>
  );
}

export default PostList;
