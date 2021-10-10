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
    width={'1000px'}
  height={'800px'}
  chartType="LineChart"
  spreadSheetUrl="https://docs.google.com/spreadsheets/d/1Y3Cbr_p4F6TrIZIjdHaHcDI9u5LuyMUIBOlBmVLYc6Y/edit?usp=sharing"
  options={{
    hAxis: {
      title: 'short',
      textStyle: { fontSize: 12, color: '#999999' },
      
      format: 'short',
    },
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
