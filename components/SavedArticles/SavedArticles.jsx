import './SavedArticles.css';
import NewsCard from '../NewsCard/NewsCard';
import trashLogo from "../../images/trash.svg";
import { useEffect } from 'react';
import NothingFound from '../NothingFound/NothingFound';


function SavedArticles(props) {
    props.handleKeywords(props.savedCards);
    props.handleKeywordText(props.keywords);

    useEffect(() => {
        const storedCards = localStorage.getItem('savedCards');
        if(storedCards) {
            const filteredCards = [];
            const newCardTitles = [];
            JSON.parse(storedCards).forEach(item => {
                if(!newCardTitles.includes(item.title)) {
                    filteredCards.push(item);
                    newCardTitles.push(item.title);
                }
            });

            props.setSavedCards(filteredCards);
        }
    }, []);

    return (
        <>
            <div className="saved-article">
                <p className="saved-article__heading">Saved articles</p>
                <h2 className="saved-article__description">Reynaldo, you have {props.savedCards.length} saved article{props.savedCards.length===1?'':'s'}</h2>
                {
                    props.keywords!==0 ? 
                        <p className="saved-article__keyword">By keywords: <strong>{props.keywordText}</strong></p>
                        :
                        ''
                }
            </div>
            
            {
                (props.savedCards.length===0) ?
                    <NothingFound message="No saved cards yet" title="No articles found"></NothingFound>
                :
                    <ul className="saved-article__section-list">
                    {
                        props.savedCards.map((card, index) => (
                            <NewsCard key={index} savedNews={true} card={card} imageSrc={trashLogo} imageSrc2={trashLogo} description="Removed from saved" handleUnsaveCard={props.handleUnsaveCard} imageSource={props.imageSource} handleImageSource={props.handleImageSource} isLoggedIn={props.isLoggedIn} savedCards={props.savedCards}/>
                        ))
                    }   
                    </ul>
            }
        </>
    )
}

export default SavedArticles;