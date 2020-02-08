import '../img/icon.png'

const NUMBER_OF_SECONDS_IN_ONE_HOUR = 3600;
const NUMBER_OF_SECONDS_IN_ONE_YEAR = 31536000;

const isNetflixProfileCookie = (cookie) => cookie.name === "profilesNewSession";

const extendCookie = ({expirationDate, name, domain, value}) =>
({url: "https://www.netflix.com", expirationDate: expirationDate + NUMBER_OF_SECONDS_IN_ONE_YEAR, name, domain, value})

chrome.cookies.onChanged.addListener(({cookie}) => {
    if(isNetflixProfileCookie(cookie) && cookie.expirationDate - Date.now() / 1000 < NUMBER_OF_SECONDS_IN_ONE_HOUR) {
        let extendedCookie = extendCookie(cookie);
        chrome.cookies.set(extendedCookie, cookie => console.log('Cookie updated', cookie));}});
