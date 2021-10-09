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
  width={'600px'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'dogs'],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ]}
  options={{
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Popularity',
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
          <Item>{showImg()}</Item>
        </Grid>
      
  
</Grid>
    </div>
  );
}

export default App;
