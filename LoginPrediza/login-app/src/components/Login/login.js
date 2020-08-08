import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom'

import {style} from './styles'
import {ButtonP, Box, border} from './styles';

import apiPost from '../Api/api'



  export default class SignIn extends React.Component {

    state ={
        email:'',
        password:'',
        token:'',
        redirect: null,
    }

    handleSignUp = event => {
        event.preventDefault();
        
          if((this.state.email !== '')&&(this.state.password !== '')){

            try{
              apiPost({
                username:this.state.email,
                password: this.state.password
              }).then((chave) => {
                if(chave){
                this.setState({token: chave});
                this.setState({redirect: '/logado'});
              }else{
                alert("Usuário ou Senha incorretos!")
              }
              });
            
            }catch(erro){
              console.log('👉 Error:');
              alert('Usuario ou senha inválidos!');
            }

          }else{
            alert("Preencha os campos!");
          }
        
       
      };

render() {

    if(this.state.redirect){
      return <Redirect to={this.state.redirect} />
    }
    return (
    <Box>
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={style.main}
      >
    <Grid item>
      <Container component="main" maxWidth="xs" style={border}>
        <CssBaseline />
        <div className={style.paper} style={{margin: '40px'}}>

          <Typography component="h1" variant="h5">
            Login
            
          </Typography>
          <form className={style.form} onSubmit={this.handleSignUp}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={event => this.setState({ email: event.target.value })}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="senha"
              onChange={event => this.setState({ password: event.target.value })}
              autoComplete="current-password"
            />
            <ButtonP
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={style.submit}
            >
              Entrar
            </ButtonP>
          </form>
        </div>
      </Container>
      </Grid>
      </Grid>
      </Box>
    
    );
}
}