import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useStyles from './styles';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function TopBar(props) {
    const { toggleDrawer, openQuoteModal } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>

                        <div className={classes.actionsContainer}>
                            <a href="tel:0061415505106" className={classes.actionButton}>
                                Call Now
                                &nbsp;
                                <PhoneOutlinedIcon />
                            </a>

                            <a className={classes.actionButton} onClick={() => openQuoteModal()}>
                                Request a Quote
                                &nbsp;
                                <DescriptionOutlinedIcon />
                            </a>
                        </div>

                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
}