export function Tasks({ pointsData }: { pointsData: Points }) {
  return(
    <>
      <h3 style={{fontWeight: 'bold'}}>📋 Active Tasks 📋</h3>
      <div style={{padding: '1vh 1vw'}}>
        {
          (pointsData.activeTasks === undefined) ? 
          (<p>No tasks</p>) : 
          (pointsData.activeTasks.map(t => (
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <p>💰</p>
              <p style={{margin: '0vh 1vw', fontWeight: 'bold'}}>{t.points}</p>
              <p>{t.event}</p>
            </div>
          )))
        }
      </div>
    </>
  )
}