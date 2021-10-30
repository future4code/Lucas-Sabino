import { createTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor }from './colors'

const theme = createTheme({
    palette: {
        primary: {
        main: primaryColor,
        contrastText: secondaryColor
        },
    },
});

export default theme