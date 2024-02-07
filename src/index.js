import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import Routes from './routes';  // Ajuste o caminho conforme a estrutura de seus arquivos

const elementoRoot = document.getElementById('root');

if (elementoRoot) {
  const root = ReactDOM.createRoot(elementoRoot);
  root.render(
    <>
      <Routes/>
      <GlobalStyle />
    </>
  );
}