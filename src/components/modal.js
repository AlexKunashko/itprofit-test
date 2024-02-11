export const modal = () => {
  const modal = document.querySelector(".modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const openModal = document.querySelector(".modal-open");
  const closeModal = document.querySelector(".modal__close");

  const handleOpen = () => {
    document.body.classList.add("modal-opened");

    modal.classList.remove("closed");
    modal.classList.add("opening");
    setTimeout(() => {
      modal.classList.remove("opening");
      modal.classList.add("opened");
    }, 20);
  };

  const handleClose = () => {
    document.body.classList.remove("modal-opened");

    modal.classList.remove("opened");
    modal.classList.add("closing");
    setTimeout(() => {
      modal.classList.remove("closing");
      modal.classList.add("closed");
    }, 300);
  };

  openModal.addEventListener("click", handleOpen);
  closeModal.addEventListener("click", handleClose);
  modalOverlay.addEventListener("click", handleClose);
};
