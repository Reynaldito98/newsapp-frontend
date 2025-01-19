import './NewsCard.css';
import {useEffect, useState } from 'react';
import black from '../../images/black.jpeg';

function NewsCard(props) {
    const [savedCard, setSavedCard] = useState(false);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const formattedDate = new Date(props.card.published_at.slice(0, 10)).toLocaleDateString('en-US', options);

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
        <li className="news-card">
            <img src={props.card.image_url?props.card.image_url:black} alt={props.card.title} className="news-card__image"></img>
            <div className="news-card__container">
                <p className="news-card__date">{formattedDate}</p>
                <h3 className="news-card__heading">{props.card.title==='[Removed]'?'Not available':props.card.title}</h3>
                <p className="news-card__description">{props.card.description==='[Removed]'?'':props.card.description}</p>
                <h3 className="news-card__category">{props.card.source==='[Removed]'?'':props.card.source.name}</h3>
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
                    <img src={savedCard?props.imageSrc2:props.imageSrc} alt="signin logo"></img>
                    :
                    <img src={props.signinLogo} alt="save logo"></img>
             }</button>
            </div>
            {
                props.savedNews ?
                    <p className="news-card__keyword">{props.card.keyword}</p> :
                    ''
            }
        </li>
    )
}

export default NewsCard;