import React from "react";
import styles from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {
  return (
    <div className={[styles.myModal, styles.active].join(' ')}>
        <div className={styles.myModalContent}>
            {children}
        </div>
    </div>
//      <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
//      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
//          {children}
//      </div>
//  </div>
  )
}
export default MyModal;