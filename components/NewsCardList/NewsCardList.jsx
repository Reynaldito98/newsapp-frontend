import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import saveLogo from "../../images/save.svg";
import savedLogo from "../../images/blue.svg";
import signinLogo from "../../images/signin.svg";

function NewsCardList(props) {
    {
        if(props.keyword!=="") {
            props.newsData.map(item => {
                item.keyword = props.keyword;
            })

            localStorage.setItem('newsCards', JSON.stringify(props.newsData));
        }
    }

    return (
        <section className="card-section">
            <h2 className="card-section__title">Search results</h2>

            <ul className="card-section__list">

                {
                    props.newsData.slice(0, props.visibleCards).map((card, index) => (
                        <NewsCard key={index} card={card} imageSrc={saveLogo} imageSrc2={savedLogo}  savedNews={false} signinLogo={signinLogo} description={props.isLoggedIn?'Save article':'Sign in to save article'} handleSavedCard={props.handleSavedCard} savedCard = {props.savedCard} imageSource={props.imageSource} handleImageSource={props.handleImageSource} isLoggedIn={props.isLoggedIn} savedCards={props.savedCards}/>
                    ))
                }
            </ul>

            {
                (props.visibleCards < props.newsData.length || props.visibleCards===props.newsData.length) && (<button className="card-section__show-more" onClick={props.handleShowMore}>Show more</button>)
            }
        </section>
    )
}

export default NewsCardList;