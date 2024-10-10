import "./Main.css";
import { useState } from "react";

function Main(props) {
    const [validationMessage, setValidationMessage] = useState('');
    const [searchValid, setSearchValid] = useState(false);

    function handleValidation(evt) {
        if(evt.target.value==="") {
            setValidationMessage("Please enter a keyword");
            setSearchValid(false);
        } else {
            setValidationMessage("");
            setSearchValid(true);
        }
        props.setKeyword(evt.target.value);
    }

    return (
        <main className="main-page">
            <div className="main-page__container">
                <h1 className="main-page__title">What is going on in the world?</h1>
                <p className="main-page__description">Find the latest news on any topic and save them in your personal account. </p>

                <form className="main-page__input-container" onSubmit={props.handleSubmit} id="search-form">
                    <input placeholder="Enter topic" className="main-page__input" type="text" onChange={handleValidation}/>
                    <button type="submit" className="main-page__button" disabled={!searchValid}>Search</button>
                </form>
                <span className="main-page__error-message">{validationMessage}</span>
            </div>
        </main>
    )
}

export default Main