function ToolBar({ onLoad, onNext, hasData }) {
    return (
        <div style={{ marginBottom: '20px' }}>
            <button onClick={onLoad}>
                Загрузить факты
            </button>

            <button
                onClick={onNext}
                disabled={!hasData}
                style={{ marginLeft: '10px' }}
            >
                Следующий факт
            </button>
        </div>
    );
}

export default ToolBar;