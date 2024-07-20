import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Alert from './Alert';

const Home = () => {
    const [text, setText] = useState("");
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({ msg: message, type: type });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const UpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const LowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const capitalizeAfterPeriod = (str) => {
        const sentences = str.split('. ');
        const capitalizedSentences = sentences.map((sentence) => {
            return sentence.toLowerCase().replace(/(^\w|\.\s+\w)/g, (match) => match.toUpperCase());
        });
        return capitalizedSentences.join('. ');
    };

    const handleSentenceCase = () => {
        setText(capitalizeAfterPeriod(text));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        showAlert("Text has been copied");
    };

    const handleClear = () => {
        setText("");
    };

    const removeExtraSpaces = () => {
        const newText = text.replace(/\s+/g, ' ');
        setText(newText);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            showAlert("Dark mode has been enabled");
        } else {
            setMode("light");
            showAlert("Light mode has been enabled");
        }
    };

    const labelStyle = {
        fontSize: '32px',
        fontWeight: 'bold',
        margin: 'auto'
    };
    const textareaStyle = {
        width: "100%",
    };

    useEffect(() => {
        document.body.className = mode === "dark" ? "dark-mode" : "light-mode";
    }, [mode]);

    return (
        <div>
             <Navbar title="Text-Edit" head="Home" num="3" obj={{}} mode={mode} toggleMode={toggleMode} />
            <div className={`container ${mode === "dark" ? "dark-mode" : "light-mode"}`} style={{ margin: 'auto', width: '100%', marginTop: "18px" }}>
                <Alert alert={alert} />
                <label className='my-1' htmlFor="textArea" style={labelStyle}>Analyze Text</label>
                <textarea id="textArea" onChange={handleChange} value={text} rows={6} placeholder="Enter your text here" style={textareaStyle}></textarea>
                <div className="flex my-2">
                    <button type="button" className="btn btn-primary" onClick={UpperCase}>To UpperCase</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={LowerCase}>To LowerCase</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={handleSentenceCase}>To SentenceCase</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container">
                <h3>Text Summary</h3>
                <p>{text.split(" ").length - 1} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length - 0.008} Minutes required to read</p>
            </div>
            <div className="preview container " style={textareaStyle}>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Home;
