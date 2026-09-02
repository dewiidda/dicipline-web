let seconds = 24 * 60;
let timer;

// START TIMER
function startTimer() {
  clearInterval(timer);
  timer = setInterval(function () {
    if (seconds > 0) {
      seconds--;
      updateTime();
    } else {
      clearInterval(timer);
      alert("Time is up!");
    }
  }, 1000);
}

// RESET TIMER
function resetTimer() {
  clearInterval(timer);
  seconds = 24 * 60;
  updateTime();
}

// UPDATE TIMER
function updateTime() {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;

  document.getElementById("time").textContent =
    String(minutes).padStart(2, "0") +
    ":" +
    String(secs).padStart(2, "0");
}

// ADD NOTE
function addNote() {
  let text = prompt("Write your note:");
  if (text === null || text.trim() === "") {
    return;
  }
  let note = document.createElement("label");
  note.className = "note-item";
  note.innerHTML = `
    <input type="checkbox">
    <span>${text}</span>
  `;
  document.getElementById("notes").appendChild(note);
}