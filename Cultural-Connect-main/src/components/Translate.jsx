// src/TranslateComponent.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'


const TranslateComponent = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('es');
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        (async () => {
            const options = {
                method: 'GET',
                url: 'https://text-translator2.p.rapidapi.com/getLanguages',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                    'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                const lang = response.data.data.languages;
                setLanguages(lang);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);


    useEffect(() => {
        (async () => {
            const options = {
                method: 'POST',
                url: 'https://google-translator9.p.rapidapi.com/v2',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                    'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
                    'Content-Type': 'application/json'
                },
                data: {
                    q: inputText,
                    source: sourceLanguage,
                    target: targetLanguage,
                    format: 'text'
                }
            };

            try {
                const response = await axios.request(options);
                const text = response.data.data.translations[0].translatedText
                setTranslatedText(text);
            } catch (error) {
                console.error(error);
            }
        })()
    },[inputText, sourceLanguage, targetLanguage])

    
    const handleTranslate = () => {
        const mockTranslation = `${inputText} (translated to ${targetLanguage})`;
        setTranslatedText(mockTranslation);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(translatedText).then(() => {
            alert('Copied to clipboard!');
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 h-full min-h-screen flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-center mb-8">Text Translator</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                    <select
                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        value={sourceLanguage}
                        onChange={(e) => setSourceLanguage(e.target.value)}
                    >
                        {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.name}
                            </option>
                        ))}
                    </select>

                    <textarea
                        className="resize-none mt-3 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        rows="10"
                        placeholder="Enter text to translate"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                    <select
                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        value={targetLanguage}
                        onChange={(e) => setTargetLanguage(e.target.value)}
                    >
                        {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.name}
                            </option>
                        ))}
                    </select>

                    <div className="relative">
                        <textarea
                            className="resize-none mt-3 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            rows="10"
                            placeholder="Translated text"
                            value={translatedText}
                            readOnly
                        />
                        <button
                            className="absolute top-0 right-0 mt-3 mr-3 text-gray-500 hover:text-gray-700"
                            onClick={handleCopy}
                        >
                            <FontAwesomeIcon icon={faCopy} />
                        </button>
                    </div>
                </div>
            </div>

            <button
                onClick={handleTranslate}
                className="mt-6 w-full md:w-1/2 lg:w-1/3 mx-auto bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 lg:ml-[34%]"
            >
                Translate
            </button>
        </div>
    );
};

export default TranslateComponent;
