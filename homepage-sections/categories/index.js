import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from '../../components/modal';

import styles from './styles.module.css';

const ITEMS = [
    { src: "/standard-double-gate.png", title: "Standard Double Gate", description: "description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text " },
    { src: "/standard-double-gate.png", title: "Standard Double Gate", description: "description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text " },
    { src: "/standard-double-gate.png", title: "Standard Double Gate", description: "description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text " },
]

export default function Categories() {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    const onCardClick = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    }

    const onModalClose = () => setShowModal(false);

    return (
        <div className={styles.container + " container"} id='categories'>

            {ITEMS.map((item, index) =>
                <Card className={styles.card} key={index} onClick={() => onCardClick(item)}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="340"
                            className={styles.cardMedia}
                            image={item.src}
                            title={item.title}
                        />
                        <CardContent className={styles.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )}

            {showModal &&
                <Modal
                    open={showModal}
                    onClose={onModalClose}
                    title={selectedItem.title}
                >
                    <img src={selectedItem.src} className={styles.selectedImg} />
                    <div className={styles.selectedItemTitle + " defaultTitle"}>{selectedItem.title}</div>
                    <div className="defaultDescription">{selectedItem.description}</div>
                </Modal>
            }

        </div >
    );
}