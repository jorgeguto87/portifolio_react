import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"


import "../meuComponente.css"

import sites from "../assets/sites.jpeg"
import java from "../assets/java.svg"

export default function CriacaoSites(){

return(

<div>

<Helmet>

<title>Criação de Sites Profissionais | Dev Augusto</title>

<meta
name="description"
content="Criação de sites profissionais modernos e responsivos para empresas que desejam fortalecer sua presença digital e atrair novos clientes."
/>

<link
rel="canonical"
href="https://www.devaugusto.com.br/criacao-de-sites"
/>

</Helmet>

<div className="pagina__inicial pagina__sites">

<img
className="imagem__pages"
src={sites}
alt="Criação de sites profissionais"
/>

<div className="texto__principal">

<h1 className="texto__principal__titulo">
Criação de Sites Profissionais
</h1>

<h2 className="texto__principal__subtitulo">
Presença digital sólida para empresas que querem crescer
</h2>

<p className="texto__principal__paragrafo">

Um site profissional é o ponto de partida para empresas que desejam
transmitir credibilidade, fortalecer sua marca e conquistar novos
clientes pela internet.

Desenvolvo sites modernos, rápidos e responsivos que funcionam
perfeitamente em computadores, tablets e celulares.

<br /><br />

✔ experiência do usuário<br />  
✔ design moderno<br />  
✔ performance e velocidade<br />  
✔ estrutura otimizada para Google<br />  
✔ integração com WhatsApp<br />  

<br /><br />

Mais do que apenas um site, o objetivo é criar uma presença digital
capaz de gerar oportunidades reais de negócio.

</p>

<Link to="/" className="botao__voltar">
← Voltar
</Link>


</div>

<img
className="imagem__fundo"
src={java}
alt="background tecnologia"
/>

</div>

</div>

)

}