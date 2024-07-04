import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
import './feed.css';

const SearchResults = () => {
    const { query } = useParams();
    const [results, setResults] = useState([]);

    const fetchSearchResults = async () => {
        const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${query}&key=${API_KEY}`;
        const response = await fetch(searchUrl);
        const data = await response.json();
        setResults(data.items);
    };

    useEffect(() => {
        fetchSearchResults();
    }, [query]);

    return (
        <div className="feed">
            {results.map((item, index) => (
                <Link to={`video/${item.id.videoId}`} className='card' key={index}>
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
            ))}
        </div>
    );
};

export default SearchResults;
