import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ToolBar({ onLoad, onNext, hasData }) {
    return (
        <Box sx={{ display: 'flex', gap: 2, mb: 2, justifyContent: 'center' }}>
            <Button variant="contained" onClick={onLoad}>
                Загрузить факты
            </Button>

            <Button variant="contained"
                onClick={onNext}
                disabled={!hasData}
            >
                Следующий факт
            </Button>
        </Box>
    );
}

export default ToolBar;