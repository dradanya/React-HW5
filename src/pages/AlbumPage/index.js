import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './styles.css';

function AlbumPage() {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, [userId]);

  const fetchAlbums = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      );
      const data = await response.json();
      setAlbums(data);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  return (
    <div className='main-wrapper'>
      <div className='wrapper'>
        <h2>Albums</h2>
        {albums.map((album) => (
          <div key={album.id}>
            <p>{album.title}</p>
            <Link to={`/photos/${album.id}`}>Photos</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumPage;