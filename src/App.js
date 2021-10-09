import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chart from "react-google-charts";


function App() {
  
  const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  }));

  const showImg = <Chart
  chartType="ScatterChart"
  spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA/edit#gid=0"
  options={{
    hAxis: {
      format: 'short',
    },
    vAxis: {
      format: 'decimal',
      // format:'scientific'
      // format:'long'
      // format:'percent'
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>

  
  return (
    <div className="App">
     <Grid container spacing={1}>
         <Grid item sm={12} md={6} lg={4}>
          <Item>{showImg}</Item>
        </Grid>
         <Grid item sm={12} md={6} lg={4}>
          <Item>{showImg}</Item>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Item>{showImg}</Item>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Item>{showImg}</Item>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Item>{showImg}</Item>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Item>{showImg}</Item>
        </Grid>
      
  
</Grid>
    </div>
  );
}

export default App;
