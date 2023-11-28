import React from 'react';
import styles from './modal.module.css';

export const Modal = (props) => {
  const closeWindowFocus = (e) => {
    if (e.target.className !== styles.modal) {
      closeWindow();
    }
  };

  const closeWindow = () => {
    props.setIsViewed(false);
  }

  if (!props.isViewed || !props.showOnePhotos) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={closeWindowFocus}>
      <div className={styles.modal}>
        <div className={styles.container}>
          <img className={styles.photo} src={props.photosOne.image} alt="bigPhoto"/>

          <div className={styles.title}>{props.photosOne.title}</div>

          <div className={styles.description}>Описание:</div>

          {props.photosOne.description.map((item) => {
            return <div className={styles.pointDescription} q>{item}</div>
          })}

          <div className={styles.link}>Сссылки</div>
          <a className={styles.linkItem} href={props.photosOne.Github} target={'_blank'}> Ссылка на GitHub</a>

          <div className={styles.blockBtn}>
            <a className={styles.btnSave} href={props.photosOne.site} target={'_blank'}>
              Перейти на сайт
            </a>
            <a className={styles.btnSave} onClick={(e) => closeWindow(e)}>
              Выйти
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

