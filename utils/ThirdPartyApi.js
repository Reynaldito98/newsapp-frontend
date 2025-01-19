const apiKey = 'BlzFiz0ALsWFAnkHTr9t2wUCR0Hmvgl0TieQopbK';
const currentDate = new Date();
const sevenDaysDate = new Date(currentDate. getTime() - 7 * 24 * 60 * 60 * 1000);
const dateNow = `${currentDate.getFullYear()}-${String(currentDate.getMonth()+1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
const dateSevenDaysAgo = `${sevenDaysDate.getFullYear()}-${String(sevenDaysDate.getMonth()+1).padStart(2, '0')}-${String(sevenDaysDate.getDate()).padStart(2, '0')}`;

const checkResponse = (res) => {
  if(res.ok){
    return res.json();
  } else{
    return Promise.reject(`Error: ${res.status}`);
  }
}

function getNewsItems(keyword) {
  return fetch(`https://api.thenewsapi.com/v1/news/all?locale=us&language=en&api_token=${apiKey}&search=${keyword}&country=us&published_before=${dateNow}&published_after=${dateSevenDaysAgo}`)
          .then(checkResponse);
}


export {getNewsItems};