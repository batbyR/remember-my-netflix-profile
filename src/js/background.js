import '../img/icon-128.png'
import '../img/icon-34.png'

console.log('hello world');

const NUMBER_OF_SECONDS_IN_ONE_YEAR = 31536000;

const oneYearLater = (expirationDate) =>  expirationDate + NUMBER_OF_SECONDS_IN_ONE_YEAR;

chrome.cookies.getAll({}, function(cookies) {
    const netflixCookie = cookies.filter(cookie => cookie.name === "profilesNewSession")[0];
    console.log("netflixCookie", netflixCookie, oneYearLater(netflixCookie.expirationDate));
});

