// components/ShowDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ShowDetail.css'; // Make sure to use the correct CSS file name

const ShowDetails = () => {
    const { id } = useParams();
    const [shows, setShows] = useState([]);
    const [show, setShow] = useState(null);

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

        const selectedShow = shows.find((s) => s.show.id === parseInt(id, 10));

        // If the show is found, set it in the state
        if (selectedShow) {
            setShow(selectedShow.show);
        }
    }, [id, shows]);

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div className="overlay">
            <div className="container">
                <h1>{show.name}</h1>
                <p>Genres: {show.genres.join(', ')}</p>
                <p>Status: {show.status}</p>
                <p>Rating: {show.rating.average}</p>
                <p>
                    <strong>Summary:</strong>
                    <span dangerouslySetInnerHTML={{ __html: show.summary }} />
                </p>
                <Link to="/booking">
                    <button className={"button"}>Book a Movie Ticket</button>
                </Link>
            </div>
        </div>
    );
};

export default ShowDetails;
