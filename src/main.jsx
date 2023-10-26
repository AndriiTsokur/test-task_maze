import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from 'src/redux/store.js';
import App from './App.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <BrowserRouter basename="/test-task_maze"> */}
		<Provider store={store}>
			<App />
		</Provider>
		{/* </BrowserRouter> */}
	</React.StrictMode>,
);
