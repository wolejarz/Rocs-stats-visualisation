import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function App() {
  
  const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  }));

  const showImg = () => <img src="https://plotly.com/~M1kol4j/21898.png?share_key=qut1EDishqKWlv0plN4fwW" alt="vilje_cost_per_user"  width="600" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" />

  
  return (
    <div className="App">
     <Grid container spacing={1}>
         <Grid item sm={12} md={6} lg={4}>
          <Item>{showImg()}</Item>
        </Grid>
         <Grid item sm={12} md={6} lg={4}>
          <Item>{showImg()}</Item>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Item>{showImg()}</Item>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Item>{showImg()}</Item>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Item>{showImg()}</Item>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Item>{showImg()}</Item>
        </Grid>
      
  
</Grid>
    </div>
  );
}

export default App;
