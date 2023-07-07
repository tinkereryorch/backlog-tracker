'use client';

import { data } from "@/data/mockData";
import Link from "next/link";

export default function Games() {

    function handleDelete() {
        // to be implemented
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center text-white space-y-4">My Games</h1>
            <Link href="/addGame"><button className="btn btn-outline btn-primary">+ Add Game</button></Link>
            <ul  className="text-white">
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

