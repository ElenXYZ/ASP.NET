import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { login } from "../features/auth/authSlice";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(login({ name: "User" }));
        navigate("/");
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <Typography variant="h4">Авторизация</Typography>
            <Button variant="contained" onClick={handleLogin}>
                Войти
            </Button>
            <p>Ещё нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
        </Box>
    );
}