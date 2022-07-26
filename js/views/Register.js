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
        for (let i = 0; i < movies.length; i++) {
            let  movieTitles = document.getElementById("movies");
            // movieTitles.innerHTML  += "Movie Title:" + movies[i].title
            movieTitles.innerHTML = `
                <div class="container">
                    <div class="panel active" style="background-image: url('https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80')">
                        <h3>${movies[0].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1508144322886-717c284ab392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
                        <h3>${movies[1].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1537640685236-a9df2496e232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
                        <h3>${movies[2].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1617692987974-afd15d7bf15b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')">
                        <h3>${movies[3].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
                        <h3>${movies[4].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
                        <h3>${movies[5].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1508144322886-717c284ab392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
                        <h3>${movies[6].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1537640685236-a9df2496e232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
                        <h3>${movies[7].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1617692987974-afd15d7bf15b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')">
                        <h3>${movies[8].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
                        <h3>${movies[9].title}</h3>
                    </div>
                </div>

                `

            console.log(movies[i].title)
        }
        const panels = document.querySelectorAll('.panel')
        panels.forEach((panel) => {
            panel.addEventListener('click', () => {
                removeActiveClasses()
                panel.classList.add('active')
            })
        })
        function removeActiveClasses () {
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