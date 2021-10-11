import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Chart from "react-google-charts";


function App() {
  
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    width: `1600px`,
    margin: 'auto',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  }));

  const showImg = (url, title) => <Chart
    width={'1600px'}
    height={'1000px'}
    chartType="LineChart"
    spreadSheetUrl={url}
    options={{
      title: `${title}`,
      chartArea: {'width': '70%', 'height': '80%'},
    vAxis: {
      format: 'decimal',
    },
  }}
/>
  
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item  lg={12} xl={12}>
         <Button width="200" variant="outlined"><h2>Vilje</h2></Button>
        </Grid>
        <Grid item  lg={12} xl={12}>
          <Item>{showImg("https://drive.google.com/file/d/1MS_oWTvPENSYzfFhf2sVRxH-h1NQZtJb/view?usp=sharing","Cost per user")}</Item>
        </Grid>
</Grid>
    </div>
  );
}

export default App;
