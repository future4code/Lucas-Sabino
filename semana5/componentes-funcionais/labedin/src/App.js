import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/M1xq4Tv/20210701-143437.jpg" 
          nome="Lucas Homero Sabino" 
          descricao="Oi, eu sou o Lucas, tenho 27 anos e moro em Carpina - PE. Sou estudante do curso de Dev Full Stack da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno 
        img="https://static.vecteezy.com/ti/vetor-gratis/p1/2205854-email-vector-icon-gr%C3%A1tis-vetor.jpg"
        dados="emailinventadodolucas@email.com"
        />
      </div>
      <div>
        <CardPequeno 
        img="data:image/png;base64,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"
        dados="Rua inventada, nº 123"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Labenu" 
          descricao="Estudante e futuro contratado da empresa! 😃" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Voando alto!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
