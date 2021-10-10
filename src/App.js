import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Chart from "react-google-charts";


function App() {
  
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
  width: `800px`,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  }));

  const showImg = (url, title) => <Chart
    width={'750px'}
    height={'700px'}
    chartType="LineChart"
    spreadSheetUrl={url}
    options={{
    vAxis: {
      format: 'decimal',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>

  
  return (
    <div className="App">
     <Grid container spacing={1}>
         <Grid item sm={12} md={8} lg={10}>
          <Item>{showImg}</Item>
        </Grid>
         
      
  
</Grid>
    </div>
  );
}

export default App;
