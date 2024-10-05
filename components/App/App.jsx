import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import SuccessfulLoginModal from '../SuccessfulLoginModal/SuccessfulLoginModal';
import NothingFound from '../NothingFound/NothingFound';
import Searching from '../Searching/Searching';
import SavedArticles from '../SavedArticles/SavedArticles';
import UnsuccessfulSearch from '../UnsuccessfulSearch/UnsuccessfulSearch';
import { Route, Routes, useNavigate } from 'react-router-dom';
import newsLogo from "../../images/NewsExplorer.svg";
import newsLogoBlack from "../../images/NewsExplorerBlack.svg";
import logOutWhite from "../../images/logoutwhite.svg";
import logOut from "../../images/logout.svg";
import { getNewsItems } from '../../utils/ThirdPartyApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loginModalOpened, setLoginModalOpened] = useState(false);
  const [registerModalOpened, setRegisterModalOpened] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [newsData, setNewsData] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [searchResultVisible, setSearchResultVisible] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [keywordText, setKeywordText] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [searchSuccesful, setSearchSuccessful] = useState(true);
  const navigate = useNavigate();

  

  function handleKeywords(savedCards) {
    savedCards.map(card => {
      if(!keywords.includes(card.keyword)) {
        setKeywords([...keywords, card.keyword]);
      }
    })
  }

  function handleKeywordText(keywords) {
    if(keywords.length===0) {
      setKeywordText('No keywords found');
    } else if(keywords.length===1) {
      setKeywordText(`${keywords[0]}`);
    } else if(keywords.length===2) {
      setKeywordText(`${keywords[0]} and ${keywords[1]}`);
    } else {
      setKeywordText(`${keywords[0]}, ${keywords[1]} and ${keywords.length - 2} other`);
    }
  }

  function handleSavedCard(cardData) {
    if(savedCards.length!==0) {
      if(JSON.parse(localStorage.getItem('savedCards')).map(item => item.title).includes(cardData.title)) {
        setSavedCards([...savedCards]);
      } else {
        setSavedCards([...savedCards, cardData])
      }
    }
    localStorage.setItem('savedCards', JSON.stringify([...savedCards, cardData]));
  }
    
  function handleUnsaveCard(cardTitle) {
    setSavedCards(savedCards.filter((card) => card.title !== cardTitle));


    const parsedData = JSON.parse(localStorage.getItem('savedCards'));
    const updatedData = parsedData.filter(item => item.title !== cardTitle);
    localStorage.setItem('savedCards', JSON.stringify(updatedData));
  }
  
  function handleLogOutButton() {
    setIsLoggedIn(false);
    navigate('/');
  }

  function handleLogInModalOpened() {
    setLoginModalOpened(true);
    setRegisterModalOpened(false);
  }

  function handleLogOutModalClosed(evt) {
    evt.preventDefault();
    setLoginModalOpened(false);
  }

  function handleRegisterModalOpened() {
    setRegisterModalOpened(true);
    setLoginModalOpened(false);
  }

  function handleRegisterModalClosed(evt) {
    evt.preventDefault();
    setRegisterModalOpened(false);
  }

  function handleSearchNews(evt) {
    evt.preventDefault();
    setIsLoading(true);

    getNewsItems(keyword)
     .then(data => {
        setSearchSuccessful(true);
        setSearchResultVisible(true);
        if(data.articles.length!==0) {
          setNothingFound(false);
          setNewsData(data.articles); 
        } else {
          setNothingFound(true);
        }
        setIsLoading(false);
     })
    .catch(err => {
      setSearchSuccessful(false);
      setIsLoading(false);
      console.error(err);
    });
  }

  function handleShowMore() {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 3);
  }

  useEffect(() => {
      const cards = localStorage.getItem('newsCards');

      if(cards) {
        setNewsData(JSON.parse(cards));
        setSearchResultVisible(true);
      }
  }, []);

  return (
    searchSuccesful ?
      <div className="page">
        <Routes>
          <Route path='/' element={
            <div className="main-container">
              <Header borderBottom='header_border-bottom-color_white' fontColor='header__home-btn_color_white' fontColorSavedArticle="header__saved-article_color_white" imageSrc={newsLogo} isLoggedIn={isLoggedIn} logoutSrc={logOutWhite} border='header__profile_border-color_white' homeBorder='header__home-btn_border-color_white' handleLogOutButton={handleLogOutButton} handleModal={handleLogInModalOpened} borderBottom2="" fontColorProfile="header__profile_color_white" fontColorSignin="header__signin_color_white"/>
              <Main handleSubmit={handleSearchNews} setKeyword={setKeyword}/>
          </div>
          }></Route>
          <Route path='/saved-news' element={
            <div className="saved-news">
              <Header borderBottom='header_border-bottom-color_gray' fontColor='header__home-btn_color_black' imageSrc={newsLogoBlack} isLoggedIn={isLoggedIn} logoutSrc={logOut} border='header__profile_border-color_black' borderBottom2="header__saved-article_border-bottom-color_black" handleLogOutButton={handleLogOutButton} homeBorder="" fontColorSavedArticle="header__saved-article_color_black" fontColorProfile="header__profile_color_black" fontColorSignin="header__signin_color_black"/>
              <SavedArticles newsData={newsData} handleUnsaveCard={handleUnsaveCard} setSavedCards={setSavedCards} savedCards={savedCards} keyword={keyword} keywords={keywords} keywordText={keywordText} handleKeywords={handleKeywords} handleKeywordText={handleKeywordText} isLoggedIn={isLoggedIn}/>
            </div>
          }></Route>
        </Routes>
        <Routes>
          {
              (isLoading) ? 
              <Route path='/' element={<Searching></Searching>}></Route>
              :
              (!nothingFound) ?
                searchResultVisible && <Route path='/' element={<NewsCardList isLoggedIn={isLoggedIn} newsData={newsData} handleSavedCard={handleSavedCard} handleShowMore={handleShowMore} visibleCards={visibleCards} keyword={keyword} savedCards={savedCards}/>}></Route>
                :
                <Route path='/' element={<NothingFound message="Sorry, but nothing matched your search terms" title="Nothing found"></NothingFound>}></Route>
          }       
        </Routes>
        <Routes>
          <Route path='/' element={<About />}></Route>
        </Routes>
        <Footer />
        <RegisterModal modalOpened={registerModalOpened} onClose={handleRegisterModalClosed} handleLoginOpen={handleLogInModalOpened}/>
        <LoginModal onClose={handleLogOutModalClosed} modalOpened={loginModalOpened} handleRegisterOpen={handleRegisterModalOpened}/>
        <SuccessfulLoginModal />
    </div>
    :
    <UnsuccessfulSearch></UnsuccessfulSearch>
  )
}

export default App;
