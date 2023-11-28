import { useState } from 'react';
import './App.css';
import { Modal } from './Component/Modal/Modal';
import ListPhotosContainer from './Component/listPhotos/listPhotosContainer';

const App = () => {
  const [isViewed, setIsViewed] = useState(false);
  const [id, setId] = useState();
  const [photosOne, setPhotosOne] = useState(null);
  const [showOnePhotos, setShowOnePhotos] = useState(false);

  return (
    <div className="Container">
      <ListPhotosContainer
        setIsViewed={setIsViewed}
        setPhotosOne={setPhotosOne}
        setShowOnePhotos={setShowOnePhotos}
        setId={setId}
      />
      <Modal
        isViewed={isViewed}
        setIsViewed={setIsViewed}
        photosOne={photosOne}
        showOnePhotos={showOnePhotos}
        id={id}
      />
    </div>
  );
};

export default App;
