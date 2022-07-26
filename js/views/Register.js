import createView from "../createView.js"
import {getHeaders, isLoggedIn} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/users/create`;

export default function Register(props) {
    // language=HTML
    return `
    <h3 id="movies"></h3>

    <a data-link href="/add-movie">Add a movie</a>
    
    `;
}
// function z() {
//     let m = document.getElementById("movies")
//     m.style.visibility = "hidden"
// }  z()

export function RegisterEvent(){
    async function randomMovies(response) {
        // for (let i = 0; i < response.length; i++) {



            let movies = await response.json()
            console.log(response)
            console.log(movies)
            console.log(movies[8].title)

        for (let i = 8; i < movies.length; i++) {
            let  movieTitles = document.getElementById("movies")
            movieTitles.innerHTML  += "Movie Title:" + movies[i].title
            console.log(movies[i].title)
        }
        // }

    }


    fetch('https://codeup-json-server.glitch.me/movies')

        .then(randomMovies)
        .catch(function(error){
            console.log("error" + error)
        })



}