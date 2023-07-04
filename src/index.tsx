import {createRoot} from 'react-dom/client';
import {render} from 'react-dom';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

// const root = createRoot(document.getElementById('root'))

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
    , 
    document.getElementById('root')
)