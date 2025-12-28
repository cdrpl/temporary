import { createContext } from "react";

export type NotesContextType = {
  notes: string[],
  setNotes: React.Dispatch<React.SetStateAction<string[]>>,
};

export const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function deleteNote(ctx: NotesContextType, index: number) {
    ctx.setNotes(prev => prev.filter((_, i) => i !== index));
}
