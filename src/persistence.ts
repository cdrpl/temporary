import { File, Paths } from 'expo-file-system';

export function writeFile(notes: string[]) {
    try {
        const file = new File(Paths.document, 'notes.txt');
        
        if (!file.exists) {
            file.create();
        }

        file.write(JSON.stringify(notes, null, 2));
    } catch (error) {
        console.log(error);
    }
}

export async function readFile(): Promise<string[]> {
    try {
        const file = new File(Paths.document, 'notes.txt');

        if (!file.exists) {
            return [];
        }

        const fileText = await file.text();
        return JSON.parse(fileText) as string[];
    } catch (error) {
        console.log(error);
    }

    return [];
}
