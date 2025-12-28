import { createContext } from "react";

type NotesContextType = {
  notes: string[],
  setNotes: React.Dispatch<React.SetStateAction<string[]>>,
};

export const NotesContext = createContext<NotesContextType | undefined>(undefined);
