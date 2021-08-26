import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'
import { notes } from '../../assets/notes.js'

export const notesService = {
    query,
    addNote,
    DeleteNote
}



const KEY = 'NOTESDB';
let gnotes = storageService.loadFromStorage(KEY) || notes;
let gnotesTrash = [];

function query() {
    return Promise.resolve(gnotes)
}

function addNote(txt, url, type, todo, label) {
    console.log(todo);
    if (type === 'txt') {
        var note = _createNoteTxt(txt)
    } else if (type === 'img') {
        var note = _createNoteImg(txt, url)
    } else {
        var note = _createNoteTodo(todo, label)
    }
    gnotes.unshift(note)
    _saveNoteToStorage()
    return Promise.resolve()
}

function _createNoteImg(txt, url) {
    const id = utilService.makeId()
    return {
        id: 'n' + id,
        type: 'note-img',
        isPinned: false,
        info: {
            url: url,
            title: txt
        },
    }
}


function _createNoteTxt(txt) {
    const id = utilService.makeId()
    return {
        id: 'n' + id,
        type: 'note-txt',
        isPinned: false,
        info: {
            txt: txt
        }
    }
}


function _createNoteTodo(label, todos) {
    console.log(todos)
    const id = utilService.makeId()
    return {
        id: 'n' + id,
        type: 'note-todos',
        isPinned: false,
        info: {
            label: label,
            todos: todos
        },
    }
}


function _saveNoteToStorage() {
    storageService.saveToStorage(KEY, gnotes)
}


function DeleteNote(noteId) {
    var noteIdx = gnotes.findIndex(function (note) {
        return noteId === note.id
    })
    gnotes.splice(noteIdx, 1)
    var note = getNoteById(noteId)
    gnotesTrash.push(note)
    _saveNoteToStorage();
    return Promise.resolve()
}

function getNoteById(noteId) {
    var note = gnotes.find(function (note) {
        return noteId === note.id
    })
    return Promise.resolve(note)
}