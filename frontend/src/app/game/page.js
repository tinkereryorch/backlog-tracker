import GameDetails from "./components/GameDetails";
import GameTitle from "./components/GameTitle";

export default function Game() {
    return (
        <div>
            <GameTitle title="Game Title" />
            <GameDetails />
        </div>
    );
}