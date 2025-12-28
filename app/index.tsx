import { deleteNote, NotesContext } from "@/src/notes-context";
import { readFile } from "@/src/persistence";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";

export default function Index() {
  const ctx = useContext(NotesContext);

  if (!ctx) {
    throw new Error("NotesContext is missing. Make sure you wrapped this screen in a Provider.");
  }

  const { notes, setNotes } = ctx;
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    readFile().then((notes) => {
      setNotes(notes);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const handleDelete = (index: number) => {
    Alert.alert(
      "Delete note?",
      "Are you sure you want to delete this note?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => deleteNote(ctx, index) }
      ]
    );
  };

  return (
    <View className="flex-1 bg-white">
      <Pressable 
        onPress={() => router.push("/add-note")}
        className="px-4 py-3 bg-blue-600"
      >
        <Text className="text-white text-lg font-semibold">Add Note</Text>
      </Pressable>

      <ScrollView className="p-4">
        {notes.length === 0 ? (
          <Text className="text-gray-500">No notes yet.</Text>
        ) : (
          notes.map((note, index) => (
            <View
              key={index}
              className="mb-2 rounded-lg bg-gray-100 p-3"
            >
              <Text className="text-base text-gray-900">
                {note}
              </Text>

              <Pressable
                className="px-3 py-1 bg-red-600 rounded"
                onPress={() => handleDelete(index)}
              >
                <Text className="text-white font-semibold">Delete</Text>
              </Pressable>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
