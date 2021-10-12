import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LinearChart from "./components/LinearChart";


function App() {
  
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    width: `1600px`,
    margin: 'auto',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  }));

  const showImg = (url, title) =>
    <LinearChart url={url}/>

  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item  lg={12} xl={12}>
         <Button width="200" variant="outlined"><h2>Vilje</h2></Button>
        </Grid>
        <Grid item  lg={12} xl={12}>
          <Item>{showImg("http://localhost/vilje.hpc.ntnu.no.cost.csv")}</Item>
        </Grid>
</Grid>
    </div>
  );
}

export default App;
