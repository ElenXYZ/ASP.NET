import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { login } from "../features/auth/authSlice";

export default function Register() {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = () => {
        if (!name.trim()) {
            setError("Введите имя");
            return;
        }
        if (name.trim().length < 3) {
            setError("Имя должно содержать минимум 3 символа");
            return;
        }
        setError("");
        dispatch(login({ name: name.trim() }));
        navigate("/");
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4">Регистрация</Typography>
            <TextField
                label="Введите имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!error}
                helperText={error}
                fullWidth
            />
            <Button variant="contained" onClick={handleRegister}>
                Зарегистрироваться
            </Button>
        </Box>
        );
}
