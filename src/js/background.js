import '../img/icon-128.png'
import '../img/icon-34.png'

const NUMBER_OF_SECONDS_IN_ONE_YEAR = 31536000;

const getNetflixProfileCookie = (cookies) => cookies.filter(cookie => cookie.name === "profilesNewSession")[0];

const oneYearLater = (expirationDate) =>  expirationDate + NUMBER_OF_SECONDS_IN_ONE_YEAR;

const extendCookie = ({expirationDate, name, domain, value}) =>
({url: "https://www.netflix.com", expirationDate: oneYearLater(expirationDate), name, domain, value})

chrome.cookies.getAll({}, function(cookies) {
    const netflixCookie = getNetflixProfileCookie(cookies);
    const extendedNetflixCookie = extendCookie(netflixCookie);
    chrome.cookies.set(extendedNetflixCookie, cookie => console.log('Cookie updated', cookie));
});

