import { NotesContext } from "@/src/notes-context";
import { writeFile } from "@/src/persistence";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function NotesScreen() {
  const [text, setText] = useState<string>("");

  const ctx = useContext(NotesContext);
  if (!ctx) {
    throw new Error("AddNoteScreen must be used within NotesContext.Provider");
  }

  const { notes, setNotes } = ctx;
  const router = useRouter();

  function handleSave() {
    if (text.trim().length === 0) return;

    const appended = [...notes, text];

    setNotes(appended);
    writeFile(appended);

    router.back();
  }

  return (
    <View className="flex-1 bg-white p-4">
      <TextInput
        placeholder="Write your note..."
        value={text}
        onChangeText={setText}
        className="mb-4 rounded-md border border-gray-300 p-3 text-base"
      />

      <Pressable
        onPress={handleSave}
        className="rounded-md bg-blue-600 py-3"
      >
        <Text className="text-center text-white text-lg font-semibold">
          Save Note
        </Text>
      </Pressable>
    </View>
  );
}
