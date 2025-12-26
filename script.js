console.log("JS jalan");

const title = document.getElementById("title");
const btn = document.getElementById("btnChange");
const nameList = document.getElementById("nameList");
const nameForm = document.getElementById("nameForm");
const btnAdd = document.getElementById("btnAdd");

btn.addEventListener("click", () => {
  title.textContent = "Saya Sedang Belajar JavaScript!";
});

// hari ke 3 counter

const countEl = document.getElementById("count");
const btnPlus = document.getElementById("btnPlus");
const btnReset = document.getElementById("btnReset");

let count = 0;
let names = []; // array untuk simpan data

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

btnAdd.addEventListener("click", () => {
  const value = nameForm.value.trim();

  // validasi sederhana
  if (value === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  names.push(value);       // simpan ke array
  nameForm.value = "";    // reset input
  renderNames();          // update tampilan
});

function renderNames() {
  nameList.innerHTML = ""; // bersihkan list

  names.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
}