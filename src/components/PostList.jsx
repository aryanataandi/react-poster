import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [textBody, setTextBody] = useState("");
  const [textAuthor, setTextAuthor] = useState("");

  const bodyHandleChangeEvent = (event) => {
    setTextBody(event.target.value);
  };

  const authorHandleChangeEvent = (event) => {
    setTextAuthor(event.target.value);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal handleVisibilityModal={hideModalHandler}>
          <NewPost 
            bodyHandleChangeEvent={bodyHandleChangeEvent} 
            authorHandleChangeEvent={authorHandleChangeEvent}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={ textAuthor } body={ textBody } />
        <Post author="Cristiano Ronaldo" body="Frontend development is awesome!" />
        <Post author="Erling Haaland" body="PHP is awesome!" />
        <Post author="Vinicius Jr." body="Laravel is awesome!" />
      </ul>
    </>
  );
}

export default PostList;
