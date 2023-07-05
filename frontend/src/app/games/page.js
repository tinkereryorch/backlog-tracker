import { data } from "@/data/mockData";

export default function Games() {
    return(
        <ul>
            {data.map((game, index) => (
                <li key={index}>{game.title}</li>
            ))}
        </ul>
    )
}