import createView from "../createView.js"

export default function addNewMovieView(props) {
    return `
<form class="container">
    <h1>New movies</h1>
    <form>
        <label for="dogFactText" class="form-label">User picks</label>
        <input class="form-control" list="datalistOptions" id="movie-title" placeholder="Movie Title">
        <input class="form-control" list="datalistOptions"  type="input" placeholder="Rating" id="rating">
      
        <button class="form-control" id="quote-btn">Add movie to list</button>
    </form>
</div>

`;
}


export function addNewMovieEvents() {


}

