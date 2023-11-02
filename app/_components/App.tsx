"use client"

import React, { useState } from 'react';
import './App.module.css';

function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const [joinWords, setJoinWords] = useState(true);

    const processInput = (input: any) => {

        // 1) Remove surrounding quotes, brackets, and braces, and then split by comma
        const cleanedInput = input
        .replace(/['"\[\]{}]/g, '')
        .split(',')
        .map((word: string) => word.trim());

        // 2) If joinWords is true, then combine words together
        const processedWords = joinWords ? cleanedInput.map((word: string) => word.replace(/\s+/g, '')) : cleanedInput;

        // 3) Filter out empty strings
        const validWords = processedWords.filter(Boolean);

        // 4) Convert array to object with values set to true
        const result: { [key: string]: boolean } = {};
        validWords.forEach((word: string) => {
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
