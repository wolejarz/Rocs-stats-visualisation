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
    title: `${title}`,
    vAxis: {
      format: 'decimal',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>

  
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item  lg={12} xl={6}>
         <Button width="200" variant="outlined"><h2>Vilje</h2></Button>
        </Grid>
        <Grid item lg={12} xl={6}>
          <Button variant="outlined"><h2>Fram</h2></Button>
        </Grid>
        <Grid item  lg={12} xl={6}>
          <Item>{showImg("https://docs.google.com/spreadsheets/d/1ZL4Jv61ODAufPLiC-ssOy4Yqzq7jYbLi4tqXH1uHIO8/edit?usp=sharing","Cost per user")}</Item>
        </Grid>
        <Grid item  lg={12} xl={6}>
          <Item>{showImg("https://docs.google.com/spreadsheets/d/1eDZ6E0fMx147tG-uEI2fymvSYbh_Uq58fqNoocmXnUo/edit?usp=sharing","Cost per user")}</Item>
        </Grid>

      
  
</Grid>
    </div>
  );
}

export default App;
