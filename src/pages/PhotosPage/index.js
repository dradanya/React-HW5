import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PhotosPage() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, [albumId]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div>
      <h2>Photos</h2>
      {photos.map(photo => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.title} />
        </div>
      ))}
    </div>
  );
}

export default PhotosPage;
