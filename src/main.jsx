import { createRoot } from 'react-dom/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router";
import Routers from './routes/route.jsx';


createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <BrowserRouter >
            <Routers />
        </BrowserRouter>
    </Provider>
)
