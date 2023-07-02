export default function GameDetails() {
    return (
        <form action="/send-data" method="post" >
            <div style={{padding: '10px'}}>
                <label for="game_status">Status: </label>
                <select name="game_status" id="game_status" style={{ color: 'black' }} >
                    <option>In Progress</option>
                    <option>Finished</option>
                </select>
            </div>
            <div style={{padding: '10px'}}>
                <label for="start_date">Start Date: </label>
                <input type="datetime-local" id="start_date" name="start_date" style={{ color: 'black' }} />
            </div>
            <div style={{padding: '10px'}}>
                <label for="time_spent">Time spent in hours: </label>
                <input type="number" id="time_spent" name="time_spent" style={{ color: 'black' }} />
            </div>
            <div style={{padding: '10px'}}>
                <label for="notes">Notes: </label>
                <textarea type="textarea" id="notes" name="notes" style={{ color: 'black' }}>Some notes</textarea>
            </div>
            <div style={{padding: '10px'}}>
                <label for="guide">Guide: </label>
                <input type="text" id="guide" name="guide" style={{ color: 'black' }} />
            </div>
            <input type="Submit" value="Save"/>
        </form>
    );
}