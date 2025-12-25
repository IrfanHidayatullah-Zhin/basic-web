console.log("JS jalan");

const title = document.getElementById("title");
const btn = document.getElementById("btnChange");

btn.addEventListener("click", () => {
  title.textContent = "Saya Sedang Belajar JavaScript!";
});

// hari ke 3 counter

const countEl = document.getElementById("count");
const btnPlus = document.getElementById("btnPlus");
const btnReset = document.getElementById("btnReset");

let count = 0;

function updateCount() {
  countEl.textContent = count;
} 

btnPlus.addEventListener("click", () => {
  count++;
  updateCount();
} );

btnReset.addEventListener("click", () => {
  count = 0;
  updateCount();
} );
