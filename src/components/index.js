import { initForm } from "./form";
import { modal } from "./modal";
import { phoneMask } from "./phoneMask";

export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    initForm();
    phoneMask();
    modal();
  });
