import React from 'react';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/index'
import ReactDOM from "react-dom/client";
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.querySelector('#root')
// );
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    // </React.StrictMode>
);