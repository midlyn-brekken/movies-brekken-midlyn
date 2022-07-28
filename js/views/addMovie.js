import createView from "../createView.js"

export default function addNewMovieView(props) {
    return `
<form class="container" style="color: crimson">
    <h1>New movies</h1>
    <form>
        <label for="dogFactText" class="form-label">User picks</label>
        <input class="form-control" list="datalistOptions" id="movie-title" placeholder="Movie Title" style="height: 50px;margin: 10px">
        <input class="form-control" list="datalistOptions"  type="input" placeholder="Rating" id="rating" style="height: 50px;margin: 10px">
      
        <button class="form-control" id="movie-btn" style="border: 5px dotted yellow;margin-top: 100px;position: absolute">Add movie to list</button>
<!--        <input type="button" id="delete" value="delete">-->
    </form>
</div>
<h1 id="a" ></h1>
`;
}


export function addNewMovieEvents() {
    let movieButton = document.getElementById("movie-btn");
    movieButton.addEventListener("click", function (event) {
        let userMovieTitle = document.getElementById("movie-title").value;
        let userMovieRating = document.getElementById("rating").value;
        let a = document.getElementById("a");
        a.innerText = `Movie Title: ${userMovieTitle} Rating: ${userMovieRating}`;


        let addedMovies = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({title: userMovieTitle,rating:userMovieRating})
        }
        fetch('https://horse-shore-neon.glitch.me/movies', addedMovies)
            .then(function (response) {
                if (!response.ok) {
                    console.log("movie added error: " + response.status);
                } else {
                    console.log("movie added");
                    createView('/register');
                }
            });

    })
        let deleteButton =  document.getElementById("delete");
        deleteButton.addEventListener("click", function (event){


            let deleteMovies = {
                method: "Delete",
                headers: {
                    'Content-Type': 'application/json',

                },

            }

            let id = 11

            fetch(`https://horse-shore-neon.glitch.me/movies/${id}`, deleteMovies)
                .then(function(response) {
                    if(!response.ok) {
                        console.log("movie deleted error: " + response.status);
                    } else {
                        console.log("movie delete");
                        createView('/register');
                    }
                });




    })



}

