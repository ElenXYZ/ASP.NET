import { useState } from 'react';
import axios from 'axios';
import './App.css';

import FactCard from './components/FactCard';
import ErrorCard from './components/ErrorCard';
import ToolBar from './components/ToolBar';

import catImage from './assets/cat.png';

function App() {
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
                // сервер ответил, но с ошибкой
                setError(`Ошибка сервера: ${err.response.status}`);
            } else if (err.request) {
                // запрос ушёл, но ответа нет
                setError('Нет ответа от сервера');
            } else {
                // ошибка на клиенте
                setError('Ошибка запроса');
            }
        }
    };

    const nextFact = () => {
        if (facts.length === 0) return;

        setIndex((prev) => (prev + 1) % facts.length);
    };

    const currentFact = facts[index]?.fact;

    return (
        <div className="app">
            <img src={catImage} alt="Кошка" className="cat-image" />
            <h1>Факты о кошках</h1>

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

export default App;