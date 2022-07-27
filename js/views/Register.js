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
                    <div class="panel" style="background-image: url('https://i1.sndcdn.com/artworks-000123690573-uhuyr7-t500x500.jpg')">
                        <h3>${movies[0].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://www.thenewsfetcher.com/wp-content/uploads/2020/08/DSKY-Movie-Poster_FINAL-scaled-1-e1593800575920.jpg')">
                        <h3>${movies[1].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://www.lcc.edu/lookout/_resources/images/uncharted-photo.jpeg')">
                        <h3>${movies[2].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQThsB03pbw5vcIx6r3G-Q6BbJ0lp8ukajvWye5b7b38B-5fwKu6dcbPm5vohzOwS_HFF2L0AcdvR43I6bwtDGNH1eYU70dv4wEdVdelqy5lik5krQgmAtCBuK9o4vau57QBFfFUPLy2Tvfyq2CMuLtmu.jpg?r=4bf')">
                        <h3>${movies[3].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg')">
                        <h3>${movies[4].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://www.themoviedb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg')">
                        <h3>${movies[5].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://m.media-amazon.com/images/I/91tuQ9AVNxL._AC_SY679_.jpg')">
                        <h3>${movies[6].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg')">
                        <h3>${movies[7].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://m.media-amazon.com/images/I/710nsn-AYoL._SL1140_.jpg')">
                        <h3>${movies[8].title}</h3>
                    </div>
                    <div class="panel" style="background-image: url('https://movieposters2.com/images/1256021-b.jpg')">
                        <h3>${movies[9].title}</h3>
                        <button id="edit">edit</button>
                    </div>

                `
            // for (let j = 0; j < movies.length; j++) {
            //     movieTitles.innerHTML += `
            //         <div class="panel" style="background-image: url('${movies[j].poster}')">
            //             <h3>${movies[j].title}</h3>
            //         </div>
            //     `
            // }

            movieTitles.innerHTML += `
                </div>
            `
            const editBtn = document.querySelector("#edit");
            editBtn.addEventListener("click", function(){

            })

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