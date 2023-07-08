'use client';

import { data } from "@/data/mockData";
import Link from "next/link";

export default function Games() {

    function handleDelete() {
        // to be implemented
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center text-white mt-6">My Games</h1>
            <div className="w-full flex justify-end">
                <Link href="/addGame">
                    <button className="btn btn-sm btn-info ml-auto mr-10 mt-6">+ Add Game</button>
                </Link>
            </div>
            <table className="table table-auto w-9/12 mt-6 ml-10 text-lg">
                <thead className="text-lg text-white">
                    <tr>
                        <th>
                            Game
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Hours Spent
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((game) => (
                        <tr key={game.id} className="hover:bg-teal-700">

                            <td>{game.title}</td>
                            <td>{game.status}</td>
                            <td >{game.timeSpent}</td>
                            <td>
                                <Link href={`/game/${game.id}`}><button className="font-bold">View</button></Link>
                            </td>
                            <td>
                                <button className="font-bold" onClick={handleDelete}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

