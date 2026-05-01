import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import withAuth from "../hoc/withAuth";

import FactCard from '../components/FactCard';
import ErrorCard from '../components/ErrorCard';
import ToolBar from '../components/ToolBar';

import Button from '@mui/material/Button';

import catImage from '../assets/cat.png';
import { logout } from "../features/auth/authSlice";
import './../App.css';

function HomePage() {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [facts, setFacts] = useState([]);
    const [index, setIndex] = useState(0);
    const [error, setError] = useState('');

    const loadFacts = async () => {
        setError('');

        try {
            const response = await axios.get(
                'https://catfact.ninja/facts?limit=10'
            );

            setFacts(response.data.data);
            setIndex(0);
        } catch (err) {
            setFacts([]);
            if (err.response) {
                setError(`Ошибка сервера: ${err.response.status}`);
            } else if (err.request) {
                setError('Нет ответа от сервера');
            } else {
                setError('Ошибка запроса');
            }
        }
    };

    const nextFact = () => {
        if (facts.length === 0) return;

        setIndex((prev) => (prev + 1) % facts.length);
    };

    const currentFact = facts[index]?.fact;

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className="app">
            <div className="app-header">
                <h6>Приветствую, {user?.name}</h6>
                <Button variant="contained" onClick={handleLogout}>Выход</Button>
            </div>
            <div className="app-title">
                <img src={catImage} alt="Кошка" />
                <h4>Факты о кошках</h4>
            </div>

            <ToolBar
                onLoad={loadFacts}
                onNext={nextFact}
                hasData={facts.length > 0}
            />

            <ErrorCard message={error} />

            <FactCard fact={currentFact} />
        </div>
    );
}

export default withAuth(HomePage);
