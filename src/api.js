//const variables for flickrApi
const ROOT_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.';
const SEARCH = 'search';
const TAGS = '&tags=';
const RECENT = 'getrecent';
const API_KEY = '&api_key=b9f02efe1f7718dfb00bc51d4d6024ff';
const FORMAT = '&format=json&nojsoncallback=1';
const PER_PAGE= '&per_page=44';

export const fetchData = async () => {
    try {
        const apiURL = `${ROOT_URL}${RECENT}${PER_PAGE}${API_KEY}${FORMAT}`;
        const response = await fetch(`${ROOT_URL}${RECENT}${PER_PAGE}${API_KEY}${FORMAT}`, {method: 'GET'});
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
}