import { test, expect,afterEach } from 'vitest';
import useNoteStore from '../store';

describe('store zustand', () => {
    afterEach(() => {
      var { reset } = useNoteStore.getState();
      reset();
    });

    test('addNote adds a new note to the store', (t) => {
    const note = {
        title: 'New Note',
        note: 5,
        comment: 'This is a new note.',
        date: '2023-06-02',
    };

    const store = useNoteStore.getState();

    // Call the addNote function
    store.addNote(note);
    const {notes} = useNoteStore.getState();

    // Check if the note was added correctly
    expect(notes.length).toEqual(1);
    expect(notes[0]).toEqual(note);
    });

    test('deleteNote deletes the note with the given title from the store', (t) => {
    const note1 = {
        title: 'Note 1',
        note: 5,
        comment: 'This is note 1.',
        date: '2023-06-02',
    };
    const note2 = {
        title: 'Note 2',
        note: 8,
        comment: 'This is note 2.',
        date: '2023-06-03',
    };

    const store = useNoteStore.getState();

    // Add two notes to the store
    store.addNote(note1);
    store.addNote(note2);

    // Call the deleteNote function
    store.deleteNote(note1.title);

    const {notes} = useNoteStore.getState();
    // Check if the note was deleted correctly
    expect(notes.length).toEqual(1);
    });

    test('modifyNote modifies the note with the given title in the store', (t) => {
    const note1 = {
        title: 'Note 1',
        note: 5,
        comment: 'This is note 1.',
        date: '2023-06-02',
    };

    const updatedNote1 = {
        title: 'Note 1',
        note: 10,
        comment: 'Updated note 1.',
        date: '2023-06-04',
    };

    const store = useNoteStore.getState();
    

    // Add a note to the store
    store.addNote(note1);

    // Call the modifyNote function
    store.modifyNote({
        title: note1.title,
        updatedNote: updatedNote1,
    });

    const {notes} = useNoteStore.getState();
    useNoteStore.getState();
    // Check if the note was modified correctly
    console.log(notes[0]);
    console.log(notes.length);
    expect(notes.length).toEqual(1);
    expect(notes[0]).toEqual(updatedNote1);
    });

    test('test reset', async () => {
        const note1 = {
            title: 'Note 1',
            note: 5,
            comment: 'This is note 1.',
            date: '2023-06-02',
        };

        const store = useNoteStore.getState();
        store.addNote(note1);

        store.reset();
        useNoteStore.getState();
        expect(store.notes).toEqual([]);
    });
});