import './NewsCard.css';
import {useEffect, useState } from 'react';

function NewsCard(props) {
    const [savedCard, setSavedCard] = useState(false);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const formattedDate = new Date(props.card.publishedAt.slice(0, 10)).toLocaleDateString('en-US', options);

    useEffect(() => {
        if(props.savedCards.length!==0){
            const cardTitles = JSON.parse(localStorage.getItem('savedCards')).map(item => item.title);                
            if(cardTitles.includes(props.card.title)) {
                setSavedCard(true);
            } else {
                setSavedCard(false);
            }
        }
    }, []);

    return(
        <div className="news-card">
            <img src={props.card.urlToImage} alt={props.card.title} className="news-card__image"></img>
            <div className="news-card__container">
                <p className="news-card__date">{formattedDate}</p>
                <h3 className="news-card__heading">{props.card.title}</h3>
                <p className="news-card__description">{props.card.description}</p>
                <h3 className="news-card__category">{props.card.source.name}</h3>
            </div>
            <div className="news-card__save-container">
                <p className="news-card__save-description">{props.description}</p>
                <button className="news-card__save" disabled={!props.isLoggedIn} onClick={(props.handleSavedCard) ? ()=>{
                    props.handleSavedCard(props.card);
                    setSavedCard(true);
                } : ()=>{
                    props.handleUnsaveCard(props.card.title);
                    setSavedCard(false);
                }}
             >{
                props.isLoggedIn ? 
                    <img src={savedCard?props.imageSrc2:props.imageSrc}></img>
                    :
                    <img src={props.signinLogo}></img>
             }</button>
            </div>
            {
                props.savedNews ?
                    <p className="news-card__keyword">{props.card.keyword}</p> :
                    ''
            }
        </div>
    )
}

export default NewsCard;