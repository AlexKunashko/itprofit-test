import { setIsLoading, showMessage } from "./form";

export const ajaxForm = async (form) => {
  setIsLoading(form, true);
  try {
    const response = await fetch("http://localhost:9090/api/registration", {
      method: "POST",
      body: new FormData(form),
    });

    const data = await response.json();
    switch (data.status) {
      case "success": {
        form.reset();
        showMessage(data.message);
        break;
      }
      case "error": {
        for (const fieldName in data.fields) {
          const errorMessage = data.fields[fieldName];
          const input = form[filedName];
          input.classList.add("error");
          input.nextElementSibling.textContent = errorMessage;
        }
        break;
      }
      default:
        throw new Error(data);
    }
  } catch (error) {
    console.error("Ошибка при отправке формы:", error);
  } finally {
    setIsLoading(form, false);
  }
};
