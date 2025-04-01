import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.closeBtn} onClick={onClose}>✖</button>
      <img src={image.urls.regular} alt={image.alt_description} className={styles.modalImage} />
      <p className={styles.author}>📸 {image.user.name}</p>
    </Modal>
  );
};

export default ImageModal;
