import React, { useState, useEffect } from 'react';
import Tower from "./Tower"

function App() {
  const [towerArray,setTowerArray]=useState([[1,2,3,4],[0,0,0,0],[0,0,0,0]])
  const [selectedTower,setSelectedTower]=useState(null)

  function swap(swapFindex,swapTindex){
    setTowerArray(prevTowerArray=>{
      let prevTowerArrayCopy=[...prevTowerArray]
      let 
    })
  }
  
  const towerElements=towerArray.map((tower,index)=>{
    return (
      <Tower 
        disks={tower} 
        selectedTower={selectedTower} 
        isSelected={selectedTower===index} 
        selectSelf={()=>setSelectedTower(index)}
        swap={()=>}
        key={index}
       />
    )
  })

  return (
    <>
      {towerElements}
    </>
  );
}

export default App;