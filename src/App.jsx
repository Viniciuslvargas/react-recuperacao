import { useState } from 'react'
import Cabecalho from './componentes/Cabecalho'
import Banner from './componentes/Banner'
import Livro from './componentes/Livro'
import Galeria from './componentes/Galeria'
import Rodape from './componentes/Rodape'
function App() {


  return (
    <>
    <Cabecalho/> 
    <Banner/>
    <Livro
        Titulo = {"O Alquimista"}
        Autor = {"Autor: Paulo Coelho"}
        Ano = {"Ano 1988"}
        Sinopse = {"O Alquimistaé uma obra famosa do autor brasileiro Paulo Coelho, publicada em 1988. O livro é uma mistura de ficção e filosofia, centrando-se na jornada de Santiago, um jovem pastor andaluz que tem um sonho recorrente sobre um tesouro escondido no Egito. Inspirado por esse sonho, ele decide deixar sua vida previsível na Espanha e embarca em uma jornada para encontrar esse tesouro."}
        /> 
    <Galeria/>
    <Rodape/>
        </>
  )
}

export default App
