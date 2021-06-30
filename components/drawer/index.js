import React from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BusinessIcon from '@material-ui/icons/Business';
import InfoIcon from '@material-ui/icons/Info';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import Link from 'next/link';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import { isBrowser } from "../../utils";

const MENU_ITEMS = [
    { text: 'Who Are We', icon: BusinessIcon, id: '#who-are-we' },
    { text: 'Why Choose Us', icon: HelpOutlineIcon, id: '#why-choose-us' },
    { text: 'Categories', icon: PhotoLibraryIcon, id: '#categories' },
    { text: 'About Us', icon: InfoIcon, id: '#about-us' },
]

export default function Drawer({ isOpen, toggleDrawer }) {

    let anchor = 'left';

    if (isBrowser()) {
        anchor = window.innerWidth > 768 ? 'left' : 'top';
    }

    return (
        <React.Fragment>
            <SwipeableDrawer
                anchor={anchor}
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >

                <div
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >

                    <List>
                        {MENU_ITEMS.map((item, index) => (
                            <Link key={index} href={item.id + ''}>
                                <ListItem button>
                                    <ListItemIcon><item.icon /></ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>

                </div>

            </SwipeableDrawer>
        </React.Fragment>
    )
}