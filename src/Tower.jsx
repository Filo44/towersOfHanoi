import React from "react";
import Disk from "./Components/Disk";

function Tower({disks,selectedTower,isSelected,selectSelf}) {
     const diskElements=disks.map(disk=>{
          return (
               <>
                    {disk!=0 &&<Disk diskNum={disk}/>}
               </>
          )
     })
     function handleClick(){
          if(selectedTower==null){
               selectSelf()
          }
     }

     return ( 
          <div className={`tower ${isSelected?"selected":""}`} onClick={handleClick}>
               <div className="stick">
                    {diskElements}
               </div>
          </div>     
     );
}

//Remove after
Tower.defaultProps={
     disks:[1,2,3,4]
}

export default Tower;
