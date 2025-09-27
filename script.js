// ================= GLOBAL SCOPE DEMO =================
let globalValue = 5;

// ================= FUNCTIONS DEMO =================
function multiplyByGlobal(num) {
  return num * globalValue;
}

function demoMultiply() {
  const result = multiplyByGlobal(6);
  document.getElementById("fn-output").textContent =
    "6 × " + globalValue + " = " + result;
  logAction("demoMultiply() ran: " + result);
}

function square(n) {
  return n * n;
}

function showSquarePrompt() {
  const val = parseInt(prompt("Enter a number to square:"), 10);
  if (!isNaN(val)) {
    const res = square(val);
    document.getElementById("fn-output").textContent =
      val + " squared = " + res;
    logAction("Squared " + val + " → " + res);
  }
}

function clamp(v, min, max) {
  return v < min ? min : v > max ? max : v;
}

// ================= UI UTILITIES =================
function logAction(msg) {
  const li = document.createElement("li");
  li.textContent = msg;
  document.getElementById("ui-log").appendChild(li);
}

// ================= BOX EFFECTS =================
function flashBox() {
  const box = document.getElementById("heroBox");
  box.style.background = "yellow";
  setTimeout(() => {
    box.style.background = "coral";
  }, 500);
  logAction("flashBox() triggered");
}

function triggerAnimation(id) {
  const el = document.getElementById(id);
  el.classList.add("slide");
  setTimeout(() => el.classList.remove("slide"), 1000);
  logAction("triggerAnimation(" + id + ")");
}

function pulse(id, times) {
  const el = document.getElementById(id);
  let count = 0;
  function doPulse() {
    el.style.transform = "scale(1.2)";
    setTimeout(() => {
      el.style.transform = "scale(1)";
      count++;
      if (count < times) setTimeout(doPulse, 300);
    }, 300);
  }
  doPulse();
  logAction("pulse(" + id + ", " + times + ")");
}

// ================= FLIP CARD =================
function toggleFlip() {
  const card = document.getElementById("flipCard");
  card.classList.toggle("flipped");
  document.getElementById("flipState").textContent = card.classList.contains(
    "flipped"
  )
    ? "flipped"
    : "not flipped";
  logAction("toggleFlip() → " + document.getElementById("flipState").textContent);
}

// ================= MODAL =================
function toggleModal() {
  const modal = document.getElementById("myModal");
  modal.classList.toggle("show");
  logAction("toggleModal() called");
}

// ================= THEME SWITCHER =================
function triggerTheme() {
  document.body.classList.toggle("dark");
  logAction("Theme toggled");
}

// ================= DEMO SEQUENCE =================
function startSequence() {
  logAction("startSequence() running");
  flashBox();
  setTimeout(() => triggerAnimation("control-box"), 800);
  setTimeout(() => pulse("control-box", 2), 2000);
  setTimeout(() => toggleModal(), 3000);
}
setTimeout(() => toggleModal(), 6000);