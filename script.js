console.log("JS jalan");

const title = document.getElementById("title");
const btn = document.getElementById("btnChange");

btn.addEventListener("click", () => {
  title.textContent = "Saya Sedang Belajar JavaScript!";
});
