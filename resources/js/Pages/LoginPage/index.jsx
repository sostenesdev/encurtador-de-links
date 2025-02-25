import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid2 from '@mui/material/Grid2'; // Importando Grid2
import loginService from '../../services/authService';
import { useLoading } from '../../contexts/LoadingContext';
const theme = createTheme();

function LoginPage() {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {handleLogin} = loginService();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    handleLogin(email, password).then((response) => {
        localStorage.setItem('token', response.access_token);
        navigate('/');
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid2 container>
              <Grid2 xs={12} sm={6}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid2>
              <Grid2>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;