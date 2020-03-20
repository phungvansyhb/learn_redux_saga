import {createMuiTheme} from '@material-ui/core/styles'

const theme  = createMuiTheme({
    palette : {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
        },
        secondary :{
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        error:{
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
        },
       
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    },
    shape: {
        borderRadius: "10px",
        border: "1px solid black"
    },
    font : {
        tieude1: {
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: 0.2,
        },
        tieude2:{},
        normal : {
            fontSize: "12px",
            
        }
    }
    
})
export default theme;