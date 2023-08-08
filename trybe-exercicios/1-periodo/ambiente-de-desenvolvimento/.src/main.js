import validator from "validator";

const textarea = document.querySelector("#texto");
const buttonEl = document.querySelector("#validate");
const optionText = document.querySelector("#option");
const finalText = document.querySelector("#resp");
const UUID_VERSION = 4;
buttonEl.addEventListener("click", (event) => {
  event.preventDefault();

  const area = {
    hexColor: validator.isHexColor(textarea.value),
    email: validator.isEmail(textarea.value),
    cpf: validator.isTaxID(textarea.value, "pt-BR"),
    uuid: validator.isUUID(textarea.value, UUID_VERSION),
    url: validator.isURL(textarea.value),
  };

  finalText.innerHTML = `A validação retornou ${area[optionText.value]}`;
});
