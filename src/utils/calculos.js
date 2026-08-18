// Toda a "matemática" do simulador fica aqui, separada do JSX.
// Assim o App.jsx só chama a função e usa o resultado.

export function calcularGastoMensal(potenciaWatts, horasPorDia, precoKwh) {
  const DIAS_NO_MES = 30

  // 1 kWh = 1000 Watts usados durante 1 hora
  const consumoKwhDia = (potenciaWatts / 1000) * horasPorDia
  const consumoKwhMes = consumoKwhDia * DIAS_NO_MES
  const gastoMensal = consumoKwhMes * precoKwh

  return {
    consumoKwhDia,
    consumoKwhMes,
    gastoMensal
  }
}
