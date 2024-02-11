import { ajaxForm } from "./ajaxForm";
import { validateForm } from "./validateForm";

export const initForm = () => {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    hideMessage();
    const isValid = validateForm(form);
    if (isValid) {
      ajaxForm(form);
    }
  });
};

export function showError(input, message) {
  const field = input.closest("div");
  field.classList.add("has-error");
  const errorDiv = field.querySelector(".form__field-error");
  errorDiv.textContent = message;
}

export function hideError(input) {
  const field = input.closest("div");
  field.classList.remove("has-error");
  const errorDiv = field.querySelector(".form__field-error");
  errorDiv.textContent = "";
}

export function showMessage(message) {
  const successMessage = document.getElementById("successMessage");
  successMessage.textContent = message;
}

export function hideMessage() {
  const successMessage = document.getElementById("successMessage");
  successMessage.textContent = "";
}

export function setIsLoading(form, value) {
  const inputs = form.querySelectorAll("[name]");
  const btn = form.querySelector("button");

  inputs.forEach((input) => {
    input.disabled = value;
  });
  btn.disabled = value;
}
