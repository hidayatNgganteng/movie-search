class ModalDetail extends HTMLElement {
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
            .modal_detail {
                background-color: #dedede;
                left: 50px;
                right: 50px;
                top: 50px;
                bottom: 50px;
                position: absolute;
                z-index: 999;
                border-radius: 5px;
            }
            .modal_title {
                color: #000;
            }
            .modal-img{
                margin-top: 7px;
                max-width: 500px;
            }
            .modal-desc{
                margin-top: 7px;
                color: #000;
            }
            .wrapper{
                position: relative
                width: 100%;
                height: 100%;
                padding: 30px;
            }
            .close{
                width: 50px;
                height: 50px;
                position: absolute;
                top: 15px;
                right: 30px;
                font-size: 30px;
                color: #fff;
                background-color: rgba(0,0,0,0.75);
                border-radius: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
            span{
                margin-top: -3px;
            }
        </style>
        <div class="modal_detail">
            <div class="wrapper">
                <h1 class="modal_title">This title</h1>
                <image class="modal-img" src="https://lh3.googleusercontent.com/JoMoID1OsGuVIZuZqa-jjx0U5NNksLHOQjy4ZP6czvamyhpddiNlU5YQhHT1GBBsIVq_xrN2pDclSDjLbDReevGLfI598xI=s700" />
                <p class="modal-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus. Quam nulla porttitor massa id neque aliquam. Ultrices mi tempus imperdiet nulla malesuada. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Egestas sed sed risus pretium. Lorem dolor sed viverra ipsum. Gravida rutrum quisque non tellus. Rutrum tellus pellentesque eu tincidunt tortor. Sed blandit libero volutpat sed cras ornare. Et netus et malesuada fames ac. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Lacus sed viverra tellus in. Sollicitudin ac orci phasellus egestas. Purus in mollis nunc sed. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Interdum consectetur libero id faucibus nisl tincidunt eget.</p>
                <div class="close"><span>x</span></div>
            </div>
        </div>`;
    }
 }
  
 customElements.define("modal-detail", ModalDetail);