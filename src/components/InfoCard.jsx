function InfoCard({ dica = 'Desligar aparelhos da tomada quando não estão em uso ajuda a reduzir o consumo em standby.' }) {
  return (
    <div className="info-card">
      <h3>Dica de economia</h3>
      <p>{dica}</p>
    </div>
  )
}

export default InfoCard
