class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set movie(movie) {
        this._movie = movie;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
            
                .poster {
                    width: 200px;
                    height: auto;
                    object-fit: cover;
                    object-position: center;
                    margin-top: 10px;
                }
            
                .movie-info {
                    padding: 24px;
                    display: block;
                    text-decoration:none;
                }

                .movie-info:hover{
                    background-color: #efefef
                }
            
                .movie-info > h2 {
                    font-weight: lighter;
                }
            
                .movie-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10;
                }
                .title{
                    border-width: 5px;
                    color: #000;
                }
                .release{
                    color: #000;
                }
            </style>
            
            <div class="movie-info">
                <input class="valueId" value="${this._movie.id}" type="hidden">
                <h2 class="title">${this._movie.title}</h2>
                <img class="poster" src='https://image.tmdb.org/t/p/w220_and_h330_face${this._movie.poster_path}' alt="poster">
                <p class="release">Release Date : ${this._movie.release_date}</p>
            </div>`;
    }   
 }
  
 customElements.define("movie-item", MovieItem);