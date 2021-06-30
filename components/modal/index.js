import React from 'react';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

import styles from './styles.module.css';

export default function TransitionModal(props) {

    const {
        open,
        onClose,
        title,
        description,
        narrow,
        children
    } = props;

    return (
        <div>
            <Modal
                aria-labelledby={title || ""}
                aria-describedby={description || ""}
                className={styles.modal}
                open={open}
                onClose={onClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={open}>
                    <div className={styles.mainContainer + (narrow ? " " + styles.narrow : "")}>
                        <div className={styles.subContainer}>
                            <div className={styles[narrow ? 'hidden' : 'closeIconContainer']}>
                                <Button onClick={onClose}><CloseIcon className={styles.closeIcon} /></Button>
                            </div>
                            {children}
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}