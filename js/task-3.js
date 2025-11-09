const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);
function onInput(event) {
  const name = event.currentTarget.value.trim();
  outputEl.textContent = name === "" ? "Anonymous" : name;
}
