import { createContext, useState } from "react";
import run from '../assets/config/gemini'

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recent,setRecent] = useState("");
    const [prevInputs,setPrevInputs] = useState([]);
    const [load,setLoad] = useState(false);
    const [resultData,setResultData] = useState("");
    const [showResult,setshowResult] = useState(false);

    const newChat = () => {

        setLoad(false);
        setshowResult(false);
    }

    const onSent = async (prompt) => {

        setResultData("");
        setLoad(true);
        setshowResult(true);

        let response;

        if(prompt !== undefined){

            response = await run(prompt);
            setRecent(prompt);

        } else{

            setPrevInputs(prev => [...prev,input])
            setRecent(input);
            response= await run(input);
        }
        setRecent(input);


        let splittedArray = response.split("**");
        let newArray = [];

        // console.log(splittedArray);

        for(let i=0; i< splittedArray.length; i++){

            if(i===0 || i%2 !== 1){

                newArray += splittedArray[i];
            } else{

                newArray += "<b>" + splittedArray[i] + "</b>"
            }
        }

        let newArray2 = newArray.split("*").join("<br/>");

        let finalArray = newArray2.split(" ");

        for(let i=0; i < finalArray.length ; i++){

            const nextword = finalArray[i];

            delayPara(i,nextword + ' ')
        }

        // setResultData(newArray2);
        setLoad(false);
        setInput("");
    }

    const delayPara = (index,nextword) => {

        setTimeout(() => {

            setResultData(prev => prev+nextword);
        }, 75*index)


    }


    const contextValue = {

        input,setInput,
        recent,setRecent,
        prevInputs,setPrevInputs,
        load,setLoad,
        resultData,setResultData,
        showResult,setshowResult,
        onSent,
        newChat

    };

    return (

        <Context.Provider value={contextValue}>

            {props.children}


        </Context.Provider>
    )


}

export default ContextProvider