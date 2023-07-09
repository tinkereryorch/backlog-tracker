'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import { data } from "@/data/mockData";

export default function Game({ params }) {
    let game = data[params.id];
    const propertiesToShow = ['title', 'status', 'startDate', 'timeSpent', 'notes', 'platform', 'rating', 'image', 'owned', 'provider'];
    const propertyMapping = {
        title: 'Game Title',
        status: 'Status',
        startDate: 'Start Date',
        timeSpent: 'Hours Spent',
        notes: 'Notes',
        platform: 'Platform',
        rating: 'Rating',
        image: 'Image',
        owned: 'Owned',
        provider: 'Provider'
    }
    const [editableProperty, setEditableProperty] = useState(null);
    const [editedValue, setEditedValue] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(selectedImage);
        } else {
            setImagePreview(null);
        }
    }, [selectedImage]);

    const handlePropertyClick = (propertyKey, propertyValue) => {
        setEditableProperty(propertyKey);
        setEditedValue(propertyValue);
    }

    const handleInputChange = (event) => {
        setEditedValue(event.target.value);
    }

    const handleInputBlur = () => {
        if (editableProperty) {
            game[editableProperty] = editedValue;
            setEditableProperty(null);
        }
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    }

    const renderPropertyValue = (key, value) => {
        if (key === 'image') {
            return (
                <div>
                    {imagePreview ? (
                        <img src={imagePreview} alt="Selected" className="w-64 h-64" />
                    ) : (
                        <span>No image selected</span>
                    )}
                    <input type="file" onChange={handleImageChange} className="py-2 px-4 rounded-lg" />
                </div>

            )
        } else if (key === editableProperty) {
            switch (editableProperty) {
                case 'status':
                    return (
                        <select value={editedValue} onChange={handleInputChange} onBlur={handleInputBlur} >
                            <option>In Progress</option>
                            <option>Finished</option>
                        </select>
                    )
                case 'startDate':
                    return (
                        <input
                            type="datetime-local"
                            value={editedValue}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            className="w-64 input input-bordered max-w-xs"
                        />
                    )
                case 'owned':
                    return (
                        <select value={editedValue} onChange={handleInputChange} onBlur={handleInputBlur} >
                            <option>Yes</option>
                            <option>No</option>
                            <option>Shared</option>         
                        </select>
                    )
                default:
                    return (
                        <input
                            type="text"
                            value={editedValue}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            className="w-64 input input-bordered max-w-xs"
                        />
                    )
            }
        }
        return <span onClick={() => handlePropertyClick(key, value)}>{value}</span>;
    }

    const filteredProperties = Object.entries(game).filter(([key, value]) =>
        propertiesToShow.includes(key) && value !== null
    );

    const gameItems = filteredProperties.map(([key, value]) => (
        <li key={key} className="text-xl">
            <span className="font-bold">{propertyMapping[key]}</span>: {renderPropertyValue(key, value)}
        </li>
    ));

    return (
        <>
            <h1 className="text-3xl font-bold text-center text-white mt-6">Game Details</h1>
            <div className="flex justify-center mt-6 ">
                <ul className="space-y-6">
                    {gameItems}
                </ul>
            </div>
            <div className="flex mt-6 justify-center">
                <Link href="/games"><button className="btn btn-outline btn-error">Back</button></Link>
            </div>
        </>
    )
}