class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            :host {
                display: block;
                padding: 20px;
                width: 100%;
                background-image: url("https://cdn.shopify.com/s/files/1/2391/5185/articles/UPDATED_List_of_filmmaking_blogs_and_Websites_for_Guest_Blogging_wallpaper.png?v=1560254668");
                background-size: cover;
                background-position-y: center;
                color: white;
            }
            .head-title{
                padding: 50px 25px;
            }
        </style>
        <h2 class="head-title">Movie's Search</h2>`;
    }
 }
  
 customElements.define("app-bar", AppBar);