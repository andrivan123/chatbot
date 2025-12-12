import { GoogleGenAI } from "@google/genai";

console.log(process.env)
// gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey: process.env.REACT_APP_GEMINI_API_KEY });


export async function mainchat(text) {
   let responseText =  Date.now();
   console.log("mainchat()<",text)

//    let response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents:text,
//   });
//   console.log(response.text);
//   responseText = response.text

console.log("mainchat()>",responseText)
return responseText;
}

let q= "Explain how AI works in a few words"
//mainchat(q);