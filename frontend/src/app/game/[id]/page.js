import Link from 'next/link';
import { data } from "@/data/mockData";

export default function Game({ params }) {
    let game = data[params.id];
    let date = game.startDate;

    return(
        <div>
            <h1>Edit/View Game</h1>
            <br>
            </br>
            <p>Game Title: {game.title}</p>
            <p>Status: {game.status}</p>
            <p>Start Date: {date}</p>
            <p>Time Spent in Hours: {game.timeSpent}</p>
            {game.rating && <p>Rating: {game.rating}</p>}
            <Link href="/games"><button>Back</button></Link>
        </div>
    )
}