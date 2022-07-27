import createView from "../createView.js"


export default function editMovieView(props) {
    return `
    <form class="container">
    <h1>Edit Movie</h1>
    <form>
        <label for="dogFactText" class="form-label"></label>
        <input class="form-control" list="datalistOptions" id="updated-title" placeholder="jhb">
        <input class="form-control" list="datalistOptions" placeholder="Rating" id="updated-rating">

        <button class="form-control" id="movie-btn">Edit movie</button>
    </form>
</div>
<h1 id="a" ></h1>


    `;
}




export function editMovieEvents() {


}