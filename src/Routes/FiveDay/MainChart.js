import React from 'react'


const MainChart = ({temp,date})=>

   {
    

       const exData = {
           lables : [date],
           dataSets:[
               {data:[temp]}
           ]
       }
   ( <>
    <Line data = {exData}/>
 
</>
)
   }

export default MainChart