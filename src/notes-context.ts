import { createContext } from "react";
import { writeFile } from "./persistence";

export type NotesContextType = {
  notes: string[],
  setNotes: React.Dispatch<React.SetStateAction<string[]>>,
};

export const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function deleteNote(ctx: NotesContextType, index: number) {
  const updatedNotes = ctx.notes.filter((_, i) => i !== index);
  ctx.setNotes(updatedNotes);
  writeFile(updatedNotes);
}
