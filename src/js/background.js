import '../img/icon-128.png'
import '../img/icon-34.png'

const FIRST_OF_JANUARY_2021 = 1609459200;

const isNetflixProfileCookie = (cookie) => cookie.name === "profilesNewSession";

const extendCookie = ({name, domain, value}) =>
({url: "https://www.netflix.com", expirationDate: FIRST_OF_JANUARY_2021, name, domain, value})

chrome.cookies.onChanged.addListener(({cookie}) => {
    if(isNetflixProfileCookie(cookie) && cookie.expirationDate !== FIRST_OF_JANUARY_2021) {
        const extendedCookie = extendCookie(cookie);
        chrome.cookies.set(extendedCookie, cookie => console.log('Cookie updated', cookie));}});
