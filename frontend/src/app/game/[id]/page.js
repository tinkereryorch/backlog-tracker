import Link from 'next/link';
import { data } from "@/data/mockData";

export default function Game({ params }) {
    let game = data[params.id];
    const propertiesToShow = ['title', 'status', 'startDate', 'timeSpent', 'notes', 'platform', 'rating'];
    
    const filteredProperties = Object.entries(game).filter(([key, value]) => 
        propertiesToShow.includes(key) && value !== null
    );

    const gameItems = filteredProperties.map(([key, value]) => (
        <li key={key}>
            {key}: {value}
        </li>
    ));

    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-white mt-6">Game Details</h1>
            <br>
            </br>
            <ul>
                {gameItems}
            </ul>
            <Link href="/games"><button>Back</button></Link>
        </div>
    )
}