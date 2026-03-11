import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"


import "../meuComponente.css"
import { Cabecalho, Contato, Rodape } from "../meuComponente"


import chatbot_zap from "../assets/chatbot_zap.png"
import java from "../assets/java.svg"


function ChatbotZap(){

return(

<div id="section1">

<Helmet>

<title>Chatbot para WhatsApp para Empresas | Dev Augusto</title>

<meta
name="description"
content="Desenvolvimento de chatbots para WhatsApp que automatizam atendimento e ajudam empresas a captar e atender clientes."
/>

<link
rel="canonical"
href="https://www.devaugusto.com.br/chatbot-whatsapp"
/>

</Helmet>

<section className="pagina__inicial pagina__chatbot">

            <img
        className="imagem__pages"
        src={chatbot_zap}
        alt="Criação de Chatbot Whatsapp"
        />


<div className="texto__principal">

    

<h1 className="texto__principal__titulo">
Chatbot para WhatsApp
</h1>

<h2 className="texto__principal__subtitulo">
Automatize o atendimento da sua empresa
</h2>

<p className="texto__principal__paragrafo">

O WhatsApp se tornou um dos principais canais de comunicação entre
empresas e clientes.

Com um chatbot personalizado é possível automatizar atendimentos,
responder perguntas frequentes e organizar o fluxo de contato com os
clientes.

Os chatbots podem:

<br /><br />

✔ responder automaticamente clientes<br />  
✔ enviar informações sobre produtos ou serviços<br />  
✔ captar leads<br />  
✔ organizar atendimento<br />  
✔ integrar com processos de vendas<br />  

<br /><br />

Tudo isso mantendo a identidade da sua empresa e proporcionando uma
experiência rápida e eficiente para quem entra em contato.

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

export default function ChatbotWhatsapp(){

    return(
        <>
        <Cabecalho ocultarSolucoes />
        <ChatbotZap />
        <Contato />
        <Rodape />
        </>
    )
}