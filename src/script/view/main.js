import '../component/movie-list.js';
import '../component/search-bar.js';
import '../component/movie-detail.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
     };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    const onButtonDetailClicked = async (e) => {
        try{
            const result = await DataSource.searchMovieDetail(e);
            console.log("result", result)
            // renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

     searchElement.clickEvent = onButtonSearchClicked;
     movieListElement.clickEvent = onButtonDetailClicked;
};

export default main;