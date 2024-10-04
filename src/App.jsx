import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('Breno')
  let novoNome = 'Gustavo';
  const alunos = [
    {
      nome: 'Alberto',
      nomeCompleto: 'Alberto Wowtilla Silva Galdino'
    },
    {
      nome: 'Breno',
      nomeCompleto: 'Breno Oliveira Gomes'
    },
    {
      nome: 'Gustavo',
      nomeCompleto: 'Luis Gustavo'
    }
  ]
  return (
    <>
      {alunos.map((alunos) =>
        <>
        <h3>{alunos.nome}</h3>
        <p>{alunos.nomeCompleto}</p>
        </>
        
      )}

    </>
  )
}

export default App
