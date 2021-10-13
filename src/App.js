import './App.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


import LinearChart from "./components/LinearChart";
import PieChart from "./components/PieChart";


function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <Grid container spacing={2} justify="center">
        <Grid item  lg={12} xl={12} align="center">
         <Button width="200" variant="outlined"><h2>Vilje</h2></Button>
        </Grid>
         

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} centered>
              <Tab label="COST PER USER" sx={{ typography: 'body1', fontWeight:"bold"}}/>
            <Tab label="RUNNING TASKS PER USER"  sx={{ typography: 'body1', fontWeight:"bold"}}/>
            <Tab label="QUEUING TASKS PER USER"  sx={{ typography: 'body1', fontWeight:"bold"}}/>
              <Tab label="R vs Q" sx={{ typography: 'body1', fontWeight:"bold"}}/>
          </Tabs>
        </Box>
      </Box>
        <TabPanel value={value} index={0}>
          <LinearChart url={"http://localhost/vilje.hpc.ntnu.no.cost.csv"}/>
        </TabPanel>
        <TabPanel value={value} index={0}>
          <LinearChart url={"http://localhost/vilje.hpc.ntnu.no.running.csv"} />
        </TabPanel>
        <TabPanel value={value} index={0}>
          <LinearChart url={"http://localhost/vilje.hpc.ntnu.no.queuing.csv"}/>
        </TabPanel>
        <TabPanel value={value} index={0}>
         <PieChart url={"http://localhost/vilje.hpc.ntnu.no.summary.csv"}/>
        </TabPanel>
       

       

       
         
        
          
      
      </Grid>
    </div>
  );
}

export default App;
