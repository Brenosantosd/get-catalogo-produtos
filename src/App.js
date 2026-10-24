import React , {useState , useEffect} from "react";
import "./App.css"

//Objetivo: Criar um aplicativo de e-commerce que consome uma API pública de produtos, exibindo o título, a imagem, o preço e a categoria de cada item em cards estilizados.

// api url : https://fakestoreapi.com/products
function App(){

  const [produtos , setProdutos] = useState([])

 useEffect(()=> {
   
   function loadApi(){

     let url = 'https://fakestoreapi.com/products'

    fetch(url)
    .then((r)=> r.json())
    .then((json)=>{
      console.log(json)
      setProdutos(json)
    })

    .catch((error)=>{
      console.log("Erro ao carregar a Api ")
    })
      
   }

    loadApi()

 } , [])

  return(
    <div className="container">
       <header> 
       <h1>Consumindo API</h1>

       <div className="nav">
        <a>Home</a>
        <a>Produtos</a>
        <a>Sair</a>
       </div>  
       </header>

       {produtos.map((item)=>{
        return (
        
              <article className="produto" key={item.id}>
                
                <h1>{item.title}</h1>
                <p className="categoria">Categoria: {item.category}</p>
                <img src = {item.image}/>
                <p className="descricao">{item.description}</p>
               <p className="preco">
                    <span className="cifrao">R$</span> {item.price.toFixed(2)}
                </p>
                
        
              </article>
      ) })}

       
      

    </div>
  )
}

export default App; 