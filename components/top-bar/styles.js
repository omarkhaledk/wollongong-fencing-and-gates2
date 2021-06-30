
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'fixed',
        width: '100%',
        zIndex: '1000',
        top: '0'
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    title: {
        flexGrow: 1,
    },

    actionsContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },

    actionButton: {
        display: 'flex',
        fontSize: '18px',
        cursor: 'pointer',
        alignItems: 'center',
    },
}));