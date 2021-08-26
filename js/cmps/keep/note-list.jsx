import { NotesPreview } from "./note-preview.jsx";
export function NotesList({ notes }) {

    return (
        <div className="nots-list">
            {notes.map((note) => (
                <NotesPreview key={note.id} note={note} />
            ))}
        </div>
    );
}