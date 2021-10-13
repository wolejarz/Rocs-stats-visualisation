import React from "react";
import Chart from "react-google-charts";
import Paper from "@mui/material/Paper";

import { dataFromCSV } from "../utilities/Utilities";

interface IProps {
  url: string;
}

class PieChart extends React.Component<IProps> {
  state = { dataLoadingStatus: "loading", chartData: [] };
  async componentDidMount() {
    const data = await dataFromCSV(this.props.url);
    this.setState({
      chartData: data,
      dataLoadingStatus: "ready"
    });
  }

  render() {
    const index = this.state.chartData.length - 1;
    return this.state.dataLoadingStatus === "ready" ? (
      <Paper
        elevation={5}
        style={{
          width: "1200px"
        }}
      >
        <Chart
          chartType="PieChart"
          width={"1200px"}
          height={"800px"}
          data={[
            ["Type", "Amount"],
            ["Queuing", this.state.chartData[index][1]],
            ["Running", this.state.chartData[index][2]]
          ]}
          options={{
            chartArea: { width: "70%", height: "80%" }
          }}
        />
      </Paper>
    ) : (
      <div>Fetching data from API</div>
    );
  }
}

export default PieChart;
