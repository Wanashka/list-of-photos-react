import { useState } from 'react';
import './App.css';
import { ListPhotos } from './Component/listPhotos/listPhotos';
import { Modal } from './Component/Modal/Modal';

const App = () => {
  const [isViewed, setIsViewed] = useState(false);
  const [id, setId] = useState();
  const [photosOne, setPhotosOne] = useState(null);
  const [showOnePhotos, setShowOnePhotos] = useState(false);

  return (
    <div className="Container">
      <ListPhotos
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
