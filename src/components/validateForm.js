import { hideError, showError } from "./form";

const inputsRules = {
  email: {
    isRequired: "Введите email",
    isEmail: "Введите корректный адрес электронной почты",
  },
  name: { isRequired: "Введите имя" },
  phone: { isRequired: "Введите номер телефона" },
  message: { isRequired: "Введите сообщение" },
};

export function validateForm(form) {
  let formIsValid = true;
  const inputs = form.querySelectorAll("[name]");
  inputs.forEach((input) => {
    const rules = inputsRules[input.name];
    const result = isValid(input.value, rules);
    if (result) {
      formIsValid = false;
      showError(input, result);
    } else hideError(input);
  });

  return formIsValid;
}

const validationRules = {
  isRequired: (value) => !!value.trim(),
  isEmail: (value) =>
    value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
};

const isValid = (value, rules) => {
  return Object.keys(rules)
    .reduce((result, ruleName) => {
      const ruleFn = validationRules[ruleName];
      const errorMessage = rules[ruleName];

      const valueIsValid = ruleFn(value);

      if (!valueIsValid) {
        result.push(errorMessage);
      }

      return result;
    }, [])
    .join("\n");
};
