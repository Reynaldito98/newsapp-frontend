const apiKey = '183def0c951d4c2b9f084dbf18b3df1c';
const currentDate = new Date();
const sevenDaysDate = new Date(currentDate. getTime() - 7 * 24 * 60 * 60 * 1000);
const dateNow = `${currentDate.getFullYear()}-${String(currentDate.getMonth()+1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
const dateSevenDaysAgo = `${sevenDaysDate.getFullYear()}-${String(sevenDaysDate.getMonth()+1).padStart(2, '0')}-${String(sevenDaysDate.getDate()).padStart(2, '0')}`;

function newsApiRequest(keyword) {
    return `https://newsapi.org/v2/everything?q="${keyword}"&from=${dateSevenDaysAgo}&to=${dateNow}&pageSize=100&sortBy=publishedAt&apiKey=${apiKey}`;
}


const checkResponse = (res) => {
    if(res.ok){
      return res.json();
    } else{
      return Promise.reject(`Error: ${res.status}`);
    }
}

function getNewsItems(keyword) {
    return fetch(newsApiRequest(keyword))
           .then(checkResponse)
}

export {getNewsItems};