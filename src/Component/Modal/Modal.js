import React, { useState } from 'react';
import styles from './modal.module.css';

export const Modal = (props) => {
  const closeWindow = (e) => {
    if (e.target.className !== styles.modal) {
      props.setIsViewed(false);
    }
  };

  const [inputComment, setInputComment] = useState('');

  const data = {
    comment: inputComment,
  };

  const postRequest = () => {
    fetch(`http://test-backend.itdelta.agency/api/image/${props.id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
  };

  if (!props.isViewed || !props.showOnePhotos) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={closeWindow}>
      <div className={styles.modal}>
        <img className={styles.photo} src={props.photosOne.largeImage} alt="bigPhoto" />
        {props.photosOne.comments.map((item) => {
          return (
            <div className={styles.blockWriteComment}>
              <span className={styles.authorComment}>{item.author}</span>
              <span className={styles.textComment}>&gt; {item.text}</span>
            </div>
          );
        })}
        <div className={styles.blockComment}>
          <label for={'inputComment'} className={styles.nameBlockComment}>
            Comment
          </label>
          <textarea
            id={'inputComment'}
            className={styles.inputComment}
            onChange={(e) => setInputComment(e.target.value)}
          />
          <span className={styles.infoComment}>Write a few sentences about the photo.</span>
        </div>
        <button className={styles.btnSave} onClick={postRequest}>
          Save
        </button>
      </div>
    </div>
  );
};
