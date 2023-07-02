import GameDetails from "./components/GameDetails";
import GameTitle from "./components/GameTitle";

export default function Game() {
    return (
        <div className="container">
            <GameTitle title="MyGame" />
            <GameDetails />
        </div>
    );
}