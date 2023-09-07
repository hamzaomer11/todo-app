// open and close popup form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


const notes = document.getElementById("note");
const addNotes = document.getElementById("add-notes");

// store user input to local storage
let notesStorage = localStorage.getItem("note")
  ? JSON.parse(localStorage.getItem("note"))
  : [];

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    notesStorage.push(addNotes.value);
    localStorage.setItem("note", JSON.stringify(notesStorage));
    listBuilder(addNotes.value);
    addNotes.value = "";
});

// Displays user input from localstorage when posted
const listBuilder = (text) => {
    const note = document.createElement("li");
    note.innerHTML = text + ' <button id="trash" onclick="deleteNote(this)"> <i class="fa-solid fa-trash"></i> </button>';
    notes.appendChild(note);
};

// Shows all contents in the array
const getNotes = JSON.parse(localStorage.getItem("note"));
getNotes.forEach((note) => {
    listBuilder(note);
});


// Deletes notes on page
const deleteNote = (btn) => {
    let el = btn.parentNode;
    const index = [...el.parentElement.children].indexOf(el);
    notesStorage.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesStorage));
    el.remove();
};

function scrollSection() {
    document.getElementById("scroll-container").style.overflow = "scroll";
  }