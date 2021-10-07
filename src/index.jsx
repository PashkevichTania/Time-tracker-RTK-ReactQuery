import ReactDOM from 'react-dom';
import {StrictMode} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {GlobalStyles} from 'styles/global';
import App from 'components/App';
import reportWebVitals from 'reportWebVitals';
import rootReducer from "redux/rootReducer";

const store = createStore(
    rootReducer,
    composeWithDevTools(),
);

ReactDOM.render(
    <Provider store={store}>
        <StrictMode>
            <GlobalStyles/>
            <App/>
        </StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
