import React from 'react';
import styles from './listPhotos.module.css';
import avatar from '../../images/User.jpg';
import phone from '../../images/phone.png';
import message from '../../images/message.png';

export const ListPhotos = (props) => {

  const openModal = (item) => {
    props.setPhotosOne(item);//передаем обьект
    props.setShowOnePhotos(true);
    props.setIsViewed(true);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.background}/>
        <div className={styles.aboutMe}>
          <img src={avatar} id={'avatar'} alt="avatar" className={styles.photoAvatar}/>
          <label for={'avatar'} className={styles.userName}>
            Кочетов Иван
          </label>
          <div className={styles.blockConnect}>
            <a className={styles.btn} href={'https://t.me/Wanashka'} target={'_blank'}>
              <img src={message} alt="phone"/>
              Message
            </a>
            <a className={styles.btn} href="tel:+79508543094">
              <img src={phone} alt="phone"/>
              Call
            </a>
          </div>
        </div>
      </header>
      <div className={styles.containerListPhotos}>
        {props.project.map((item) => {
          return (
            <div className={styles.itemContainer} onClick={() => openModal(item)}>
              <img src={item.image} alt="" className={styles.itemPhoto} id={item.id}/>
              <span className={styles.photoId}>{item.title}</span>
            </div>
          );
        })}
      </div>
      <footer className={styles.footer}>
        <a className={styles.linkToMail} href={'mailto:wanashka@yandex.ru'} target={'_blank'}>wanashka@yandex.ru</a>
        <div className={styles.yearRelease}>2023</div>
      </footer>
    </div>
  );
};
