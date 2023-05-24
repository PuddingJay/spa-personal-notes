import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
import NoteApp from './NoteApp';

import './styles/style.css';


const root = createRoot(document.getElementById('root'));
root.render(
  // <Index />
  <BrowserRouter>
    <NoteApp />
  </BrowserRouter>
);

// function User(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// export default function Index() {
//   return (
//     <div>
//       <User name="John" />
//       <User name="Jane" />
//       <User name="Jimmy" />
//     </div>
//   )
// }
