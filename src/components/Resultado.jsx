// Recebe o objeto "dados" (calculado no App.jsx) via props
// e só se preocupa em exibir na tela. Nenhum cálculo acontece aqui.

function Resultado({ dados }) {
  return (
    <div className="resultado">
      <h2>Resultado</h2>
      <p>
        Consumo por dia: <strong>{dados.consumoKwhDia.toFixed(2)} kWh</strong>
      </p>
      <p>
        Consumo por mês: <strong>{dados.consumoKwhMes.toFixed(2)} kWh</strong>
      </p>
      <p className="destaque">
        Gasto mensal estimado: <strong>R$ {dados.gastoMensal.toFixed(2)}</strong>
      </p>
    </div>
  )
}

export default Resultado
