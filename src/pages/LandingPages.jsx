import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

import "../meuComponente.css"
import { Cabecalho, Contato, Rodape } from "../meuComponente"

import land from "../assets/land.jpeg"
import java from "../assets/java.svg"



function LandingPage(){

return(

<div id='section1' className="pagina__inicial pagina__landingPages">

<Helmet>

<title>Landing Pages de Alta Conversão | Dev Augusto</title>

<meta
name="description"
content="Criação de landing pages profissionais para campanhas, captação de leads e aumento de vendas."
/>

<link
rel="canonical"
href="https://www.devaugusto.com.br/landing-pages"
/>

</Helmet>

<section className="pagina__inicial">

<img
className="imagem__pages"
src={land}
alt="Criação de Landing Pages"
/>

<div className="texto__principal">

<h1 className="texto__principal__titulo">
Landing Pages de Alta Conversão
</h1>

<h2 className="texto__principal__subtitulo">
Transforme visitantes em clientes
</h2>

<p className="texto__principal__paragrafo">

Landing pages são páginas estratégicas criadas para campanhas de
marketing digital, com foco total em conversão.

Diferente de um site institucional, uma landing page possui uma
estrutura pensada para guiar o visitante até uma ação específica.

Ela pode ser utilizada para:

<br /><br />

✔ captação de leads<br/>  
✔ campanhas de anúncios<br/>  
✔ lançamentos de produtos<br/>  
✔ promoções<br/>  
✔ geração de contatos via WhatsApp<br/>

<br /><br />

Cada landing page é desenvolvida com design moderno, carregamento
rápido e estrutura pensada para maximizar resultados.

</p>

<Link to="/" className="botao__voltar">
← Voltar
</Link>

<img
className="imagem__fundo"
src={java}
alt="background tecnologia"
/>

</div>

</section>

</div>

)

}



export default function LandingPages(){

return(

<>
<Cabecalho ocultarSolucoes />
<LandingPage />
<Contato />
<Rodape />
</>

)

}