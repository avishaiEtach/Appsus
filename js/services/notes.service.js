import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'
import { notes } from '../../assets/notes.js'

export const notesService = {
    query,
    addNote,
    DeleteNote,
    queryTrash,
    _saveNoteToStorage,
    addPinned,
    revrstPin
}



const KEY = 'NOTESDB';
let gnotes = storageService.loadFromStorage(KEY) || notes;
let gnotesTrash = storageService.loadFromStorage('TrashDB') || [];

function query() {
    return Promise.resolve(gnotes)
}

function queryTrash() {
    return Promise.resolve(gnotesTrash)
}

function addNote(txt, url, type, todo, label) {
    console.log(type);
    if (type === 'txt') {
        var note = _createNoteTxt(txt)
    } else if (type === 'img') {
        var note = _createNoteImg(txt, url)
    } else if (type === 'dotoCopy') {
        var note = _createNoteTodoCopy(todo, label)
    } else {
        var note = _createNoteTodo(todo, label)
    }
    gnotes.unshift(note)
    _saveNoteToStorage()
    return Promise.resolve()
}


function addPinned(note) {
    let idx = gnotes.findIndex(noteId => noteId.id === note.id)
    gnotes.splice(idx, 1)
    gnotes.unshift(note)
    _saveNoteToStorage()
    return Promise.resolve()
}

function revrstPin(note) {
    let unPinnedNote = gnotes.find(Cnote => !Cnote.isPinned && Cnote.id !== note.id) //  -first not pinned
    let unPinnedNoteIdx = gnotes.findIndex(Cnote => Cnote === unPinnedNote) // -firstIDX  not pinned
    let noteIdx = gnotes.findIndex(Cnote => Cnote.id === note.id) // - crr note
    console.log('unPinnedNote', unPinnedNote)
    console.log('unPinnedNoteIdx', unPinnedNoteIdx)
    console.log('noteIdx', noteIdx)
    gnotes.splice(noteIdx, 1)
    gnotes.push(note)
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



function _createNoteTodo(label, todo) {
    console.log(todos)
    const id = utilService.makeId()
    return {
        id: 'n' + id,
        type: 'note-todos',
        isPinned: false,
        info: {
            label: label,
            todos: todo
        },
    }
}

function _createNoteTodoCopy(todos, label) {
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

function _saveTrashNoteToStorage() {
    storageService.saveToStorage('TrashDB', gnotesTrash)
}


function DeleteNote(noteId) {
    var noteIdx = gnotes.findIndex(function (note) {
        return noteId === note.id
    })
    getNoteById(noteId)
        .then((note) => {
            gnotesTrash.push(note)
            console.log(gnotesTrash)
            _saveTrashNoteToStorage()
        })

    gnotes.splice(noteIdx, 1)
    _saveNoteToStorage();
    return Promise.resolve()
}

function getNoteById(noteId) {
    var note = gnotes.find(function (note) {
        return noteId === note.id
    })
    return Promise.resolve(note)
}

