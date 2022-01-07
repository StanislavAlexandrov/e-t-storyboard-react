import { useState, useRef, useEffect } from 'react';

const Storyboard = ({ selectedText, privateWord }) => {
    const classForInput = useRef();
    const [word, setWord] = useState(''); //handle input
    const [guessArray, setGuessArray] = useState(['']); //store an array of all guesses

    useEffect(() => {
        Object.values(localStorage).map((element) =>
            setGuessArray((prevState) => [...prevState, element])
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!guessArray.includes(word)) {
            setGuessArray((prevState) => [...prevState, word + privateWord]); //to avoid duplicates in the guess array, privateWord is unique for each text
            localStorage.setItem(word, word + privateWord);
        }

        if (!textObjectSanitized.includes(word)) {
            classForInput.current.className =
                'border-8 border-dotted border-rose-600';

            setTimeout(() => {
                classForInput.current.className = ' ';
            }, 100);
        }
        setWord(''); //clear input
    };

    let sts = selectedText;

    let textObject = sts.split(/\b/g); //split by word, punctuation and whitespace

    let textObjectSanitized = sts.toLowerCase().split(/\b/g);

    let newArrayOfArrays = []; //one to display the text
    let newArrayOfArraysSanitized = []; //one to check sanitized input against

    for (let i = 0; i < textObject.length; i++) {
        newArrayOfArrays.push(new Array(textObject[i], false)); //each enclosed array has the word/punct/whitespace and a boolean defaulting to false
        newArrayOfArraysSanitized.push(
            new Array(textObjectSanitized[i], false)
        );

        if (
            guessArray.includes(newArrayOfArraysSanitized[i][0] + privateWord)
        ) {
            newArrayOfArrays[i][1] = true; //check in the sanitized arrays, flip boolean in the 'display' arrays
        }
    }

    return (
        <>
            <div className="text-sm md:text-2xl lg:mx-64 md:my-16 ">
                <div className="mt-2">{privateWord}</div>
                {newArrayOfArrays.map((element, value) =>
                    element[1] === true ? (
                        <span key={value}>{element}</span>
                    ) : (
                        element[0].replaceAll(/[a-zA-Z]/gi, '_')
                    )
                )}

                <form onSubmit={handleSubmit} ref={classForInput}>
                    <input
                        className="md:mt-6 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-10 ring-1 ring-gray-300 shadow-sm"
                        type="text"
                        value={word}
                        onChange={(e) =>
                            setWord(e.target.value.toLowerCase().trim())
                        } //sanitize input
                    />

                    <input
                        className={
                            'md:mt-6 mt-1 ml-1 px-3 py-2 rounded-md bg-sky-500 text-white hover:bg-sky-700'
                        }
                        type="text"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </>
    );
};

export default Storyboard;
