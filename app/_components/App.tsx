"use client"

import React, { useState } from 'react';
import './App.module.css';

function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const [joinWords, setJoinWords] = useState(true);

    function removeDiacritics(str: string) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }    

    const processInput = (input: any) => {

        // 1) Split by comma, remove surrounding quotes, brackets, and braces
        const cleanedInput = input.split(/,|\r?\n/)
            .map((part: string) => part.split(':')[0].replace(/['"\[\]{}]/g, '').trim())
            .map((word: string) => removeDiacritics(word).toLowerCase())
            .filter(Boolean); // lastly remove empty strings after trimming


        // 2) If joinWords is true, then combine words together, else skip
        const lastPass = joinWords ? cleanedInput.map((word: string) => word.replace(/\s+/g, '')) : cleanedInput;

        // 3) Convert array to object with values set to true
        const result: { [key: string]: boolean } = {};
        lastPass.forEach((word: string) => {
            result[word] = true;
        });
        
        return result;
    };

      

    const handleProcess = () => {
        const resultObj = processInput(input);
        const resultStr = JSON.stringify(resultObj, null, 2);  // Pretty print the JSON
        setOutput(resultStr);
    }
    

    return (
        <div className="App">
            <div>
                <textarea
                    placeholder="Paste your text here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleProcess}>Process</button>
            </div>
            <div>
                <textarea
                    placeholder="Processed text will appear here..."
                    value={output}
                    readOnly
                />
            </div>
        </div>
    );
}

export default App;
