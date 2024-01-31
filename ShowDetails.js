
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {

    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (!show) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Show Details</h1>
      <h2>{show.name}</h2>
      <p>Language: {show.language}</p>
      <p>Genres: {show.genres.join(', ')}</p>
      <img src={show.image.original} alt={show.name} />
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />

      {/* Button to Book Ticket */}
      <Link to={`/book/${id}`}>
        <button>Book Ticket</button>
      </Link>
    </div>
  );
};

export default ShowDetails;
