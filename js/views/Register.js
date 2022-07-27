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
                    </div>
                `
            }

            movieTitles.innerHTML = html + `
                </div>
            `

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