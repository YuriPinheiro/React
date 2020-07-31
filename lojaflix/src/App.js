import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import dadosIniciais from './data/dados_iniciais.json'
function App() {
  return (
    <div>
      <Menu />
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'Testanto essa merda toda!'}
      />
    </div>
  );
}

export default App;
