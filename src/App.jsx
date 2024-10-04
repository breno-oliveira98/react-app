import { useState } from 'react'
import './App.css'
import NomeCards from './components/NomeCards';

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
        <NomeCards
        nome={alunos.nome} 
        nomeCompleto={alunos.nomeCompleto} 
        />
        </>
        
      )}

    </>
  )
}

export default App
