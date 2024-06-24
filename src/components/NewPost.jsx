import classes from './NewPost.module.css';

function NewPost({ bodyHandleChangeEvent, authorHandleChangeEvent }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyHandleChangeEvent} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorHandleChangeEvent} />
      </p>
    </form>
  );
}

export default NewPost;
