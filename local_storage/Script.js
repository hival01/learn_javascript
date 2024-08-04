const button = document.querySelector("#button");
const uname = document.querySelector("#input-text");
const username = document.querySelector("#change-text");
button.addEventListener("click", () => {
  const value = uname.value;
  localStorage.setItem("key", value);
  location.reload();
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("key");
  username.innerText = value;
});
