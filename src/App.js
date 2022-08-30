import BarChart from './Components/Barchart/Barchart'
import BarChart1 from './Components/BarChart1/Barchart1'
import Scatter from './Components/Scatter/Scatter'
function App() {
  return (
<>
  
 <div style={{marginTop: "5%", marginBottom: "10%"}}>
    <BarChart/>
   
 
 
 <div style={{marginTop: "5%", marginBottom: "5%"}}><BarChart1/></div>
 <Scatter />
 </div>
  
</>
  );
}

export default App;
