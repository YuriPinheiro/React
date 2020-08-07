import { makeStyles } from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {purple } from '@material-ui/core/colors';
import styled from 'styled-components'

export const style = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3, 2),
        height: '200px',
        display: "flex",
        marginTop: '10%',
        flexDirection: "column",
        justifyContent: "center"

      },
      squad:{
        border: '2px solid palevioletred',
        borderRadius: '3px',
      },
    paper: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(2),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    main:{
        marginTop: '10%'
    },
  }));

  export const ButtonP = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);

  export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
  
export const border = {
border: '2px solid rgb(220,220,220,0.6)',
borderRadius: '5px',
webkitBoxShadow: "1px 3px 1px rgb(220,220,220,0.3)",
mozBoxShadow: "1px 3px 1px rgb(220,220,220,0.3)",
boxShadow: "1px 3px 1px rgb(220,220,220,0.3)"
  
};