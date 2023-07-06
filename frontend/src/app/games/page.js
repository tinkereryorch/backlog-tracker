import { data } from "@/data/mockData";
import Link from "next/link";

export default function Games() {

    function handleDelete() {
        // to be implemented
    }

    return (
        <>
            <h1>My Games</h1>
            <Link href="/addGame"><button>+ Add Game</button></Link>
            <ul>
                {data.map((game) => (
                    <li key={game.id}>
                        <div>
                            <span>Game: {game.title}</span>
                            <span>Status: {game.status}</span>
                            <span>Hours Spent: {game.timeSpent}</span>
                            {game.rating && <span>Rating: {game.rating}</span>}
                            <Link href={`/game/${game.id}`}><button>View</button></Link>
                            <button onClick={handleDelete}>Delete</button>            
                        </div>
                        <hr></hr>
                    </li>
                    
                ))}
            </ul>
        </>
    )
}

