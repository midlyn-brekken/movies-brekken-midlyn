import createView from "../createView.js"

export default function addNewMovieView(props) {
    return `
<form class="container">
    <h1>New movies</h1>
    <form>
        <label for="dogFactText" class="form-label">User picks</label>
        <input class="form-control" list="datalistOptions" id="movie-title" placeholder="Movie Title">
        <input class="form-control" list="datalistOptions"  type="input" placeholder="Rating" id="rating">
      
        <button class="form-control" id="movie-btn">Add movie to list</button>
    </form>
</div>
<h1 id="a" ></h1>
`;
}


export function addNewMovieEvents() {
    let movieButton = document.getElementById("movie-btn");
    movieButton.addEventListener("click", function (event){
        let userMovieTitle = document.getElementById("movie-title").value;
        let userMovieRating = document.getElementById("rating").value;
        let a = document.getElementById("a");
        a.innerText = `Movie Title: ${userMovieTitle} Rating: ${userMovieRating}`;


        let addedMovies = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({title:userMovieTitle})
        }
        fetch('https://codeup-json-server.glitch.me/movies', addedMovies)
            .then(function(response) {
                if(!response.ok) {
                    console.log("movie added error: " + response.status);
                } else {
                    console.log("movie added");
                    createView('/register');
                }
            });





    })



}

