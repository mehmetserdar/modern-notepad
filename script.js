const notepadText = document.getElementById('notepad-text');
const saveButton = document.getElementById('save-button');
const notesList = document.getElementById('notes-list');

// Load saved notes from local storage
let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

// Display saved notes in the list
function displayNotes() {
    notesList.innerHTML = savedNotes
        .map((note, index) => `<li>${note} <button class="delete-button" data-index="${index}">Delete</button></li>`)
        .join('');
}

displayNotes();

// Save a new note to the list
saveButton.addEventListener('click', function() {
    const newNote = notepadText.value.trim();
    if (newNote !== '') {
        savedNotes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(savedNotes));
        notepadText.value = '';
        displayNotes();
    }
});

// Delete a note from the list
notesList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
        const index = event.target.getAttribute('data-index');
        savedNotes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(savedNotes));
        displayNotes();
    }
});
