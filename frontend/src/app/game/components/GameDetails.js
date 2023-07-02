'use client';

import { data } from "@/data/mockData";

export default function GameDetails() {

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleSave(event) {
        const formData = new FormData(event.target.form);
        const status = formData.get('game_status');
        const startDate = formData.get('start_date');
        const timeSpent = formData.get('time_spent');
        const notes = formData.get('notes');
        const guide = formData.get('guide');
        const id = data.length;

        const objectData = {id, status, startDate, timeSpent, notes, guide};

        data.push(objectData);

        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit} method="post" >
            <div style={{padding: '10px'}}>
                <label htmlFor="game_status">Status: </label>
                <select name="game_status" id="game_status" style={{ color: 'black' }} >
                    <option>In Progress</option>
                    <option>Finished</option>
                </select>
            </div>
            <div style={{padding: '10px'}}>
                <label htmlFor="start_date">Start Date: </label>
                <input type="datetime-local" id="start_date" name="start_date" style={{ color: 'black' }} />
            </div>
            <div style={{padding: '10px'}}>
                <label htmlFor="time_spent">Time spent in hours: </label>
                <input type="number" id="time_spent" name="time_spent" style={{ color: 'black' }} />
            </div>
            <div style={{padding: '10px'}}>
                <label htmlFor="notes">Notes: </label>
                <input type="text" id="notes" name="notes" style={{ color: 'black' }} />
            </div>
            <div style={{padding: '10px'}}>
                <label htmlFor="guide">Guide: </label>
                <input type="text" id="guide" name="guide" style={{ color: 'black' }} />
            </div>
            <button type="submit" onClick={handleSave}>Save</button>
        </form>
    );
}