'use client';

import Link from 'next/link';
import { useState } from 'react';
import { data } from "@/data/mockData";

export default function AddGameForm() {

    const [gameStatus, setGameStatus] = useState('');

    const handleGameStatusChange = (event) => {
        setGameStatus(event.target.value);
    }

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
        const gameTitle = formData.get('game_title');
        const id = data.length;

        const objectData = { id, status, startDate, timeSpent, notes, guide, gameTitle };

        data.push(objectData);
        console.log(data);
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center my-4 text-white">Add Game</h1>
            <section className="my-12">
                <form className="space-y-10 text-xl font-bold" onSubmit={handleSubmit} method="post">
                    <div className="flex items-center">
                        <label className="w-36" htmlFor="game_title">Game Title:</label>
                        <input className="w-64 input input-bordered max-w-xs" type="text" id="game_title" name="game_title" />
                    </div>
                    <div className="flex items-center">
                        <label className="w-36" htmlFor="game_status">Status:</label>
                        <select className="w-64 select select-bordered max-w-xs" name="game_status" id="game_status" value={gameStatus} onChange={handleGameStatusChange}>
                            <option className="font-bold">In Progress</option>
                            <option className="font-bold">Finished</option>
                        </select>

                        {gameStatus == 'Finished' && (
                            <div className="mx-10 flex items-center">
                                <label className="w-36" htmlFor="rating">Rating:</label>
                                <input className="w-64 input input-bordered max-w-xs" type="text" id="rating" name="rating" />
                            </div>
                        )}
                    </div>
                    <div className="flex items-center">
                        <label className="w-36" htmlFor="start_date">Start Date:</label>
                        <input className="w-64 input input-bordered max-w-xs" type="datetime-local" id="start_date" name="start_date" />
                    </div>
                    <div className="flex items-center">
                        <label className="w-36" htmlFor="time_spent">Time spent:</label>
                        <input className="w-64 input input-bordered max-w-xs" type="number" id="time_spent" name="time_spent" placeholder="in hours" />
                    </div>
                    <div className="flex items-center">
                        <label className="w-36" htmlFor="notes">Notes:</label>
                        <textarea className="textarea textarea-bordered w-full" type="text" id="notes" name="notes"></textarea>
                    </div>
                    <div className="flex justify-between">
                        <button className="btn btn-outline btn-success" type="submit" onClick={handleSave}>Save</button>
                        <Link href="/games" passHref ><button className="btn btn-outline btn-error">Cancel</button></Link>
                    </div>
                </form>
            </section>
        </>
    );
}