// import ENTIRE consume.js and then take the message variable (which is an array) 
//use state/use effect
// here will take messages from message component(s) and props it up to App.jsx

import axios from "axios";
import { useEffect, useState } from "react";

export const MessageContainer = () => {
    const [deadLetterMessages, setDeadLetterMessages] = useState([])

    axios.post("Placeholder for url")
    .then(res => {
        //what data type is res and how to access the message?
        setDeadLetterMessages(res)
        // console.log(res)
    })
    .catch((err) => {
        console.log(`Error occured in DeadLetterMessage component: ${err}`);
    })
}




