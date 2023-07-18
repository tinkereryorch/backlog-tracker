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
            <div className="flex justify-center items-center">
                <div className="bg-cyan-900 rounded-lg w-2/3 ml-8 px-8 py-8">
                    <table className="table table-auto text-lg rounded-lg ">
                        <thead className="text-lg  text-white">
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
                                <th>
                                    Platform
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((game) => (
                                <tr key={game.id} className="hover:bg-gray-600">

                                    <td>{game.title}</td>
                                    <td>{game.status}</td>
                                    <td>{game.timeSpent}</td>
                                    <td>{game.platform}</td>
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
                </div>
            </div>
        </>
    )
}

