import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import dadosIniciais from './data/dados_iniciais.json'
import Footer from './components/Footer';
import Personalizado from './components/MeuComp';

function App() {
  return (
    <div>
      <Menu href='/Cadastro/Produto'>
        Novo Video
      </Menu>
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'Testanto essa merda toda!'}
      />

      <Carousel 
        category={dadosIniciais.categorias[3]}
      />

      <Personalizado />
      
      <Carousel 
        category={dadosIniciais.categorias[4]}
      />

      <Footer />
    </div>
  );
}

export default App;
