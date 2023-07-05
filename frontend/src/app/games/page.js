import { data } from "@/data/mockData";

export default function Games() {
    return (
        <>
            <h1>My Games</h1>
            <ul>
                {data.map((game) => (
                    <li key={game.id}>
                        <div>
                            <span>Game: {game.title}</span>
                            <span>Status: {game.status}</span>
                            <span>Hours Spent: {game.timeSpent}</span>
                            {game.rating && <span>Rating: {game.rating}</span>}
                            <button>👁️‍🗨️</button>
                            <button>✖️</button>            
                        </div>
                        <hr></hr>
                    </li>
                    
                ))}
            </ul>
        </>
    )
}