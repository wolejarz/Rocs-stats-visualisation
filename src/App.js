import './App.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LinearChart from "./components/LinearChart";
import PieChart from "./components/PieChart";


function App() {

  return (
    <div className="App">
      <Grid container spacing={2} justify="center">
        <Grid item  lg={12} xl={12}>
         <Button width="200" variant="outlined"><h2>Vilje</h2></Button>
        </Grid>
        <Grid item lg={12} xl={12} align="center" >
          <LinearChart url={"http://localhost/vilje.hpc.ntnu.no.cost.csv"} title={"COST"}/>
        </Grid>
        <Grid item lg={12} xl={12} align="center">
          <LinearChart url={"http://localhost/vilje.hpc.ntnu.no.running.csv"} title={"RUNNING"}/>
        </Grid>
        <Grid item lg={12} xl={12} align="center">
          <LinearChart url={"http://localhost/vilje.hpc.ntnu.no.queuing.csv"} title={"QUEUING"}/>
        </Grid>
        <Grid item lg={12} xl={12} align="center">
          <PieChart url={"http://localhost/vilje.hpc.ntnu.no.summary.csv"} title={"SUMMARY"}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
