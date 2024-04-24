import React, { useState, useEffect, useRef } from 'react';

const wordArray = ['FrontEnd', 'BackEnd', 'Database', 'Mobile App', 'DevOps'];

const WordChanger = () => {
    const [currWord, setCurrWord] = useState(wordArray[0]);
    const [isActive, setIsActive] = useState(true);
    const index = useRef(0);
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                index.current++;
                setCurrWord(wordArray[index.current]);
                if (index.current === wordArray.length - 1) {
                    setIsActive(false);
                    // window.location.reload();
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    });
    return (
        <div>
            {currWord} Developer
        </div>
    );
};

export default WordChanger;