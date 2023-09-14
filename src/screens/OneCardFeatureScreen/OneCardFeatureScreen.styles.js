
import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
    boxID: {
        background: 'rgba(255, 255, 255, 0.7)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        backdropFilter: 'blur(19.5px)',
        WebkitBackdropFilter: 'blur(19.5px)',
        padding: "1rem",
        marginBottom: "2rem"
    },
    typo: {
        "&.MuiTypography-root": {
            marginBottom: "1rem",
            fontSize: "1.1rem"
        }
    }

}));