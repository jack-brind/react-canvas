import { createPortal } from "react-dom";
import "./Modal.css";
import { X } from "lucide-react";
import IconButton from "../IconButton/IconButton.jsx";

function Modal({
  isOpen,
  onClose,
  size = "md",
  icon,
  title,
  subtitle,
  children,
  cancelText,
  confirmText,
  onConfirm,
  allowSoftClose = true,
}) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    console.log(e);
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="modal__backdrop"
      onClick={allowSoftClose ? handleBackdropClick : ""}
    >
      <div className={`modal modal__${size}`}>
        <div className="modal__header">
          <div className="modal__header--details">
            {icon && <div className="modal__icon">{icon}</div>}
            <div className="modal__header-and-subtitle">
              <h2 className="modal__title">{title}</h2>
              {subtitle && <div className="modal__subtitle">{subtitle}</div>}
            </div>
          </div>
          <IconButton onClick={onClose}>
            <X />
          </IconButton>
        </div>
        <div className="modal__content">{children}</div>
        <div className="modal__buttons">
          <button
            className="modal__button modal__button--cancel"
            onClick={onClose}
          >
            {cancelText}
          </button>
          <button
            className="modal__button modal__button--confirm"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}

export default Modal;
