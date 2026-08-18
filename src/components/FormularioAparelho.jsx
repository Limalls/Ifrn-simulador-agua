// Este componente só "mostra" o formulário.
// Ele recebe tudo pronto do App.jsx através de props:
// os valores atuais dos campos e as funções para avisar quando o usuário digita.

function FormularioAparelho({
  potencia,
  horasPorDia,
  precoKwh,
  onPotenciaChange,
  onHorasChange,
  onPrecoChange,
  onCalcular
}) {
  return (
    <div className="formulario">
      <label>
        Potência do aparelho (Watts)
        <input
          type="number"
          value={potencia}
          onChange={(e) => onPotenciaChange(e.target.value)}
          placeholder="Ex: 1200"
        />
      </label>

      <label>
        Horas de uso por dia
        <input
          type="number"
          value={horasPorDia}
          onChange={(e) => onHorasChange(e.target.value)}
          placeholder="Ex: 3"
        />
      </label>

      <label>
        Preço do kWh (R$)
        <input
          type="number"
          value={precoKwh}
          onChange={(e) => onPrecoChange(e.target.value)}
          placeholder="Ex: 0.95"
        />
      </label>

      <button onClick={onCalcular}>Calcular gasto</button>
    </div>
  )
}

export default FormularioAparelho
