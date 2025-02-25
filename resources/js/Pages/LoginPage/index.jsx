import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import loginService from '../../services/authService';
import { useLoading } from '../../contexts/LoadingContext';
import Card from '@mui/material/Card';

function LoginPage() {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {handleLogin} = loginService();
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    handleLogin(email, password).then((response) => {
        if (!response || response.status == 401) {
            setError(true);
            console.log('error',response);
            return;
        }
        localStorage.setItem('token', response.access_token);
        navigate('/');
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
      <Container component="main" maxWidth="xs" >
        <Card sx={{ padding: 6, marginTop: 10 }} 
        variant="outlined">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              error={error}
              id="username"
              label="Usuário"
              name="email"
              autoComplete="email"
              variant='standard'
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField 
              required
              fullWidth
              error={error}
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              variant='standard'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
          </Box>
        </Box>
        </Card>
      </Container>
  );
}

export default LoginPage;