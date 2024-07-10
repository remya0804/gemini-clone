
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";   //********** changed
  
  const apiKey = 'AIzaSyCs26g6CODMUCn_sH8INn5iLNiVkGc2G2g'; // **********changed
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  async function run(input) {      //  ********** changed
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(input); //  ********** changed
    const response = result.response; // ***********added
    console.log(result.response.text());
    return response.text();  //   **********added
  }
  
  export default run //   **********changed

  // /*
//  * Install the Generative AI SDK
//   *
//   * $ npm install @google/generative-ai
//   *
//   * See the getting started guide for more information
//   * https://ai.google.dev/gemini-api/docs/get-started/node
//   */
 
//  const {
//    GoogleGenerativeAI,
//    HarmCategory,
//    HarmBlockThreshold,
//  } = require("@google/generative-ai");
 
//  const apiKey = process.env.GEMINI_API_KEY;
//  const genAI = new GoogleGenerativeAI(apiKey);
 
//  const model = genAI.getGenerativeModel({
//    model: "gemini-1.5-flash",
//  });
 
//  const generationConfig = {
//    temperature: 1,
//    topP: 0.95,
//    topK: 64,
//    maxOutputTokens: 8192,
//    responseMimeType: "text/plain",
//  };
 
//  async function run() {
//    const chatSession = model.startChat({
//      generationConfig,
//   // safetySettings: Adjust safety settings
//   // See https://ai.google.dev/gemini-api/docs/safety-settings
//      history: [
//      ],
//    });
 
//    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//    console.log(result.response.text());
//  }
 
//  run();