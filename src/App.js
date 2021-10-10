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
    width={'800px'}
    height={'650px'}
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

        <Grid item  lg={12} xl={6}>
          <Item>{showImg("https://docs.google.com/spreadsheets/d/13fzV3SpaDRSUNtol3zFI9g4uFQBtgghXx3bQiQXizP0/edit?usp=sharing","Running tasks per user")}</Item>
        </Grid>
        <Grid item  lg={12} xl={6}>
          <Item>{showImg("https://docs.google.com/spreadsheets/d/11zsbU-pxub5AfNs00Gy3zkw6InI29-VD0Txy9WyYL7U/edit?usp=sharing","Running tasks per user")}</Item>
        </Grid>
         <Grid item  lg={12} xl={6}>
          <Item>{showImg("https://docs.google.com/spreadsheets/d/1aM-Y2ibpgEGJKRzp-osmu0loPqsJmh-2yDS8fKVytzQ/edit?usp=sharing","Queuing tasks per user")}</Item>
        </Grid>
        <Grid item  lg={12} xl={6}>
          <Item>{showImg("https://docs.google.com/spreadsheets/d/1F--Mw0JMRilA4hyQENiD9dkYt25efxAwWIn4ipefRww/edit?usp=sharing","Queuing tasks per user")}</Item>
        </Grid>
        <Grid item  lg={12} xl={6}>
          <Item>{showImg("https://docs.google.com/spreadsheets/d/1z5_FkSoOk9vhoFktOulf05baN69IAoi5x-ItQnfNaBI/edit?usp=sharing","R vs Q")}</Item>
        </Grid>
         <Grid item  lg={12} xl={6}>
          <Item>{showImg("https://docs.google.com/spreadsheets/d/12Mt9Py47qsDVmK-h98uV0rNolzDPYY9WgalIF_l4g0c/edit?usp=sharing","R vs Q")}</Item>
        </Grid>
  
</Grid>
    </div>
  );
}

export default App;
