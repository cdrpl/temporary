import { NotesContext } from "@/context/notes-context";
import { Stack } from "expo-router";
import { useState } from "react";
import "../global.css";

export default function RootLayout() {
  const [notes, setNotes] = useState<string[]>([]);
  
  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <Stack />
    </NotesContext.Provider>
  );
}
