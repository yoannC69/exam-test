import create from "zustand";

const useNoteStore = create((set) => ({
    notes: [],
    addNote: (note) => {
      set((state) => ({ notes: [...state.notes, note] }));
    },
    deleteNote: (title) => {
      set((state) => ({ notes: state.notes.filter((note) => note.title !== title) }));
    },
    modifyNote: ({title, updatedNote}) => {
        set((state) => ({
            notes: state.notes.map((note) => {
                
            if (note.title === title) {
                return { ...note, ...updatedNote };
            }
            return note;
            }),
        }));
    },
    reset: () => set(() => ({ notes: [] })),
  }));

  export default useNoteStore;