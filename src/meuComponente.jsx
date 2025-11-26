import React from 'react'
import devjorge from './assets/devjorge.png'
import java from './assets/java.svg'

const titulo = '<Dev Jorge />';
const imagemCapa = <img className='imagem__capa' src={devjorge} alt='Dev Jorge' />;
const imagemFundo = <img className='imagem__fundo' src={java} alt='fundo_Java' />;
const textoPrincipal = (
  <div className='texto__principal'>
    <h1 className='texto__principal__titulo'>Tenha mais credibilidade</h1>
    <h2 className='texto__principal__subtitulo'>no seu negócio com estratégias de qualidade!</h2>
    <p className='texto__principal__paragrafo'><strong>Credibilidade, design e tecnologia — tudo em um só projeto.</strong><br />
Sites e landing pages desenvolvidos com visual marcante, navegação fluida e estratégia inteligente para fortalecer a presença digital da sua marca.<br />
Se o que você precisa é um chatbot que transforma atendimento em resultado, conte com o desenvolvimento de assistentes personalizados para WhatsApp, integrados ao seu funil de marketing e atendimento.
<br /><strong>Sua presença digital merece ser notada. Vamos dar o próximo passo?</strong>
</p>
  </div>
);

const cabecalho = (
    <header>
        <div className='menu__cabecalho'>
            <a href="#">Início</a>
            <a href="#">Soluções</a>
            <a href="#">Contato</a>
        </div>
        <h1 className='titulo__cabecalho'>{titulo}</h1>
    </header>
);

function MeuComponente() {
  return (    
    <div>
        {cabecalho}
        {imagemCapa}
        {textoPrincipal}
        {imagemFundo}
    </div>
  )
}

export default MeuComponente