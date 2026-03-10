import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import CriacaoSites from "./pages/CriacaoSites"
import LandingPages from "./pages/LandingPages"
import ChatbotWhatsapp from "./pages/ChatbotWhatsapp"

export default function AppRoutes(){

return(

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/criacao-de-sites" element={<CriacaoSites/>}/>

<Route path="/landing-pages" element={<LandingPages/>}/>

<Route path="/chatbot-whatsapp" element={<ChatbotWhatsapp/>}/>

</Routes>

)

}