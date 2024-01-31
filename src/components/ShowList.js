// components/ShowList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css'; // Import the corresponding CSS file

const ShowList = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
                const data = await response.json();
                setShows(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className={"body"}>
            <div className="container"> {/* Apply the container class here */}
                <h1>Show List</h1>
                <ul className={"flex"}>
                    {shows.map((show) => (
                        <li key={show.show.id}>
                            <Link to={`/show/${show.show.id}`} className="link"> {/* Apply the link class here */}
                                {show.show.name} - {show.show.genres ? show.show.genres.join(', ') : 'Genre Not Available'}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default ShowList;
