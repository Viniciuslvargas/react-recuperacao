export default function Livro({Titulo,Autor, Ano, Sinopse}){
    return(
        <>
        <div className="livrodivc">
        <img className="livrof" src="https://d2i0w0hu6hvxgc.cloudfront.net/B00AQI6C6M/405920c1/cover.jpeg" alt="" />
        <div className="Livrodiv" >
        
        <h1 className="livrot">{Titulo}</h1>
                <p>{Autor}</p>
                <p>{Ano}</p>
                <p>{Sinopse}</p>
        </div>
        </div>
        </>
    )
}