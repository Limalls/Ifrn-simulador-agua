import { useState } from 'react'
import FormularioAparelho from './components/FormularioAparelho'
import Resultado from './components/Resultado'
import InfoCard from './components/InfoCard'
import { calcularGastoMensal } from './utils/calculos'
import './App.css'

function App() {
  // Estados dos campos do formulário — cada input controlado
  // tem seu próprio useState e é atualizado a cada onChange.
  const [potencia, setPotencia] = useState('')
  const [horasPorDia, setHorasPorDia] = useState('')
  const [precoKwh, setPrecoKwh] = useState('')

  // Estado separado que guarda o resultado, só depois de calcular.
  // Começa como null porque ainda não existe resultado nenhum.
  const [resultado, setResultado] = useState(null)

  // Função chamada pelo botão. Faz a validação simples
  // e delega a conta pesada para utils/calculos.js
  function handleCalcular() {
    const potenciaNum = Number(potencia)
    const horasNum = Number(horasPorDia)
    const precoNum = Number(precoKwh)

    if (potenciaNum <= 0 || horasNum <= 0 || precoNum <= 0) {
      alert('Preencha todos os campos com valores maiores que zero.')
      return
    }

    const calculo = calcularGastoMensal(potenciaNum, horasNum, precoNum)
    setResultado(calculo)
  }

  return (
    <div className="container">
      <h1>Simulador de Conta de Energia</h1>
      <p className="subtitulo">Descubra quanto um aparelho gasta por mês</p>

      <FormularioAparelho
        potencia={potencia}
        horasPorDia={horasPorDia}
        precoKwh={precoKwh}
        onPotenciaChange={setPotencia}
        onHorasChange={setHorasPorDia}
        onPrecoChange={setPrecoKwh}
        onCalcular={handleCalcular}
      />

      {resultado && <Resultado dados={resultado} />}

      <InfoCard />
    </div>
  )
}

export default App
