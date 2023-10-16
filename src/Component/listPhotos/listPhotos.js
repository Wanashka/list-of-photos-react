import React, { useEffect, useState } from 'react';
import styles from './listPhotos.module.css';
import avatar from '../../images/User.png';
import phone from '../../images/phone.png';
import message from '../../images/message.png';

export const ListPhotos = (props) => {
  const fetchPhotos = () => {
    fetch('http://test-backend.itdelta.agency/api/images')
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        setPhotos(data);
        setUploaded(true);
      });
  };

  const fetchOnePhotos = (id) => {
    props.setId(id);
    fetch(`http://test-backend.itdelta.agency/api/image/${id}`)
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        props.setPhotosOne(data);
        console.log(data);
        props.setShowOnePhotos(true);
      });
  };

  const [uploaded, setUploaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const openModal = (id) => {
    fetchOnePhotos(id);
    props.setIsViewed(true);
  };

  if (!uploaded) {
    return null;
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.background} />
        <div className={styles.aboutMe}>
          <img src={avatar} id={'avatar'} alt="avatar" className={styles.photoAvatar} />
          <label for={'avatar'} className={styles.userName}>
            Ricardo Cooper
          </label>
          <div className={styles.blockConnect}>
            <button className={styles.btn}>
              <img src={message} alt="phone" />
              Message
            </button>
            <button className={styles.btn}>
              <img src={phone} alt="phone" />
              Call
            </button>
          </div>
        </div>
      </header>
      <div className={styles.containerListPhotos}>
        {photos.map((item) => {
          return (
            <div className={styles.itemContainer} onClick={() => openModal(item.id)}>
              <img src={item.image} alt="" className={styles.itemPhoto} id={item.id} />
              <span className={styles.photoId}>id: {item.id}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
