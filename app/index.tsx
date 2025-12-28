import { NotesContext } from "@/context/notes-context";
import { Link } from "expo-router";
import { useContext } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Index() {
  const ctx = useContext(NotesContext);

  if (!ctx) {
    throw new Error("NotesContext is missing. Make sure you wrapped this screen in a Provider.");
  }

  const { notes } = ctx;

  return (
    <View className="flex-1 bg-white">
      {/* Add Note button */}
      <Link href="/add-note" asChild>
        <Pressable className="px-4 py-3 bg-blue-600">
          <Text className="text-white text-lg font-semibold">Add Note</Text>
        </Pressable>
      </Link>

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
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
