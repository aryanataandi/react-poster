import classes from "./Modal.module.css";

function Modal({ children, handleVisibilityModal }) {
  return (
    <>
      <div className={classes.backdrop} onClick={handleVisibilityModal} />
        <dialog open className={classes.modal}>
          {children}
        </dialog>
    </>
  );
}

export default Modal;
