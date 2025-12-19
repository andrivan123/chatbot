import { GoogleGenAI } from "@google/genai";

console.log(process.env)
// gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey: process.env.REACT_APP_GEMINI_API_KEY });


export async function mainchat(text) {
   let responseText = Date.now();
   console.log("mainchat()<",text)

   responseText = await usingLib(text)

   console.log("mainchat()>",responseText)
   return responseText;
}

async function usingLib(text){
   let response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:text,
  });
  console.log(response);
  return response.text
}

function usingRest(text){
   fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': process.env.REACT_APP_GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: text
              }
            ]
          }
        ]
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
        // Handle the API response here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
      });

}
let q= "Explain how AI works in a few words"
//mainchat(q);