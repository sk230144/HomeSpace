// File Responsible for what will be render after this file, if return nulll nothing will render.

import { Stack } from "expo-router";



export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title:"Meditations"
            }}/>
        </Stack>
    )
}