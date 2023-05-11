import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() =>({
    root:{
        maxWidth: '100%'
    },
    media: {
        height: 240,
    },
    cartContent:{
        display:'flex',
        justifyContent:'space-between',
    },
    cardActions:{
        justifyContent: 'space-between',
    },
    buttons:{
        display: 'flex',
        alignItems:'center',
    },
}));
