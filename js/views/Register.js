import createView from "../createView.js"
import {getHeaders, isLoggedIn} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/users/create`;

export default function Register(props) {
    return `
    <h3 id="movies"></h3>

    <a data-link href="/add-movie">Add a movie</a>
    
    `;
}

let imageArr = [
    "assets/attack-on-titan-cover.jpeg",
    "assets/demon-slayer-movie-cover.jpeg",
    "assets/uncharted-movie-cover.webp"
]

console.log(imageArr);

export function RegisterEvent(){
    async function randomMovies(response) {



        let movies = await response.json()
        console.log(response)
        console.log(movies)
        // for (let i = 0; i < movies.length; i++) {
            let  movieTitles = document.getElementById("movies");
            // movieTitles.innerHTML  += "Movie Title:" + movies[i].title
            let html  = `
                <div class="container">
                `;

            for (let j = 0; j < movies.length; j++) {
                let activeString = '';
                if(j === 0)
                    activeString = 'active'
                html += `
                    <div class="panel ${activeString}" style="background-image: url('${movies[j].poster}')">
                        <h3>${movies[j].title}</h3>
<!--                        <p>${movies[j].rating + "⭐️"}</p>-->
                        <input type="button" value="💣" style="width: 40px;border-radius: 20px" id="delete">
                        <input type="button" value="✏️" style="width: 40px;border-radius: 20px; float: right;" id="edit">
                    </div>
                `
            }

            movieTitles.innerHTML = html + `
                </div>
            `

        let deleteButton = document.querySelectorAll("#delete");
        for (let i = 0; i < movies.length; i++) {
            deleteButton[i].addEventListener("click", function (event){

                let deleteMovies = {
                    method: "Delete",
                    headers: {
                        'Content-Type': 'application/json',

                    },

                }

                let id = movies[i].id

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

        let editButton = document.querySelectorAll("#edit");
        for (let i = 0; i < movies.length; i++) {
            editButton[i].addEventListener("click", function (event) {

                let userMovieTitle = prompt(`Title:${movies[i].title} Rating:${movies[i].rating} 💫`)
                let newMovie = ""

                newMovie = userMovieTitle
                let editMovies = {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify({title: newMovie})
                }

                let id = movies[i].id;

                fetch(`https://horse-shore-neon.glitch.me/movies/${id}`, editMovies)
                    .then(function (response) {
                        if (!response.ok) {
                            console.log("movie added error: " + response.status);
                        } else {
                            console.log("movie updated");
                            createView('/register');
                        }
                    });

            })
        }






        const panels = document.querySelectorAll('.panel')
        panels.forEach((panel) => {
            panel.addEventListener('click', () => {
                console.log("click")

                removeActiveClasses()
                panel.classList.add('active')
            })
        })
        function removeActiveClasses () {
            const panels = document.querySelectorAll('.panel')
            panels.forEach((panel) => {
                panel.classList.remove('active')
            })
        }

    }


    fetch('https://horse-shore-neon.glitch.me/movies')

        .then(randomMovies)
        .catch(function(error){
            console.log("error" + error)
        })



}