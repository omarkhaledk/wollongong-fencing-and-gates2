import React, { useState } from 'react';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { isBrowser } from '../../utils';
import styles from './styles.module.css';

export default function GoToTop() {
    const [isShown, setIsShown] = useState(false);

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const checkScrollPosition = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setIsShown(true);
        }
        else setIsShown(false);
    }

    if (isBrowser()) {
        window.onscroll = function () { checkScrollPosition() };
    }

    return (
        <div className={styles.container + (!isShown ? " " + styles.hidden : "")} onClick={() => scrollToTop()}>
            <a className={styles.button}><ExpandLessIcon /></a>
        </div>
    );
}