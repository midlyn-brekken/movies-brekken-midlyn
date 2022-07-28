import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    return `
        <header>
            <h1 class="glow" style="font-family: cursive; margin: .5em;">Stack's Flicks <br>With Pickle Rick</h1>
            <img src="assets/picrik.gif" style="height: 25em; width: 25em">
        </header>
        <main>
            <div>
                <p>
<!--                    This is the home page text.-->
                </p>    
            </div>
        </main>
    `;
}

export function HomeEvents() {
    // TODO: use an enum for message type
    // const authority = getUserRole();
    const user = getUser();
    if(!user) {
        showNotification("Welcome visitor", "secondary");
    } else {
        showNotification("Welcome " + user.userName, "info");
    }
}