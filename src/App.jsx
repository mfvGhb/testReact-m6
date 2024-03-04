import "./styles.css";
import { useState , useEffect  } from "react";

export default function App() {
const [error, setError] = useState(null);  
const [isButtonDisabled, setIsButtonDisabled] = useState(false);
let [cnt , cntSet]=useState(0) ;  
let [nT , nTset]=useState([]) ;  
const q=50  ;
useEffect(() => { 
                 console.log('==========use effect start==================');
                 console.log(new Date().toLocaleString(),'cnt= ' , cnt ,'q=' ,q);
                 if (cnt > 0) { var fVr= fQ(cnt , q) ;  }
                 console.log('==========use effect end==================');
                },
          [cnt] );
let fR= ()=>{ if (!isButtonDisabled && cnt >1) { cntSet(pcnt=>1) ; setIsButtonDisabled(true); }} 
let fF= ()=>{ if (!isButtonDisabled){
                  if( cnt >0 ){   setIsButtonDisabled(true);  cntSet(pcnt=>pcnt+q); }  
                  if( cnt ===0){   setIsButtonDisabled(true);  cntSet(pcnt=>1); } 
            }      
}
let fB=  ()=>{if (!isButtonDisabled) {
                 if (cnt >q){   cntSet(pcnt=>pcnt-q);  setIsButtonDisabled(true); }
             }
 }
/*------------------------------------------------------------*/
async function  fQ(pv1=1, pv2=4){
nTset([]) ;   setError(null);
var url="https://xk6vz5-3000.csb.app/page2?p1=" +pv1 + "&p2=" + pv2;
let cors='https://cors.eu.org/';
let cors1='https://corsproxy.io/?';
let url1=cors1+url ;
try {
 let r1=await fetch(url1) ;
 console.log('r1.ok=', r1.ok) ;
 if (!r1.ok) {  throw new Error('Ошибка : ' + response.status)}

 let data=await r1.json() ;
 let dataC=arrD(data)
 nTset(dataC) ;
 console.log('dataC.length=' , dataC.length);
} 
 catch (error) {
  setError(error);
} 
finally { setTimeout(() =>  setIsButtonDisabled(false), 2000) }
}
if (error) {  console.log('Error............'+ error.message + ' push the Next button')}
/*---------------------------------------------------------------*/
return (
    <div className="App">
      {+isButtonDisabled} <br/>
      <div style={{ backgroundColor: 'lightgrey'}}>
      { cnt>1 && <button className="bt" onClick={fR}>Home</button>}
      <button className="bt" onClick={fB}>Previous</button>
      <button className="bt" onClick={fF}>Next</button>
      </div><br/>
      {!isButtonDisabled && cnt > 0 &&  <h2>Товар : {cnt} - {cnt+q-1}</h2> }<br/>
      {error  && <div>Error...{error.message}...  push the Next button</div>} 
      {isButtonDisabled && <div>Loading...</div>} 
   
      {nT.map((item,index) =><div key={item.id+index} className="card"><p>{cnt+index}.{index+1}) {item.brand}{item.product} : {item.price}</p></div> )}
    
    </div>
  );
}

let arrD=(array)=>{
const uniqueArray = array.filter((obj, index, self) => index === self.findIndex((o) => (
    o.id === obj.id 
  ))
);
return uniqueArray
}