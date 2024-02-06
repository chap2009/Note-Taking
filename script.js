const notesContainer = document.getElementById('notes');
const newNoteInput = document.getElementById('newNote');

function displayNotes(notes) {
    notesContainer.innerHTML = '';
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.innerHTML = <p>${note}</p><button onclick="deleteNote(${index})">Delete</button>;
        notesContainer.appendChild(noteElement);
    });
}

function addNote() {
    const newNote = newNoteInput.value.trim();
    if (newNote !== '') {
        notes.push(newNote);
        displayNotes(notes);
        newNoteInput.value = '';
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes(notes);
}

// Initial notes
let notes = ['Sample note 1', 'Sample note 2'];
displayNotes(notes);