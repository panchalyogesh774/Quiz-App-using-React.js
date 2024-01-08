import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './styles/styles.scss';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   );
  
ReactDOM.render(<App />, document.getElementById('root'));