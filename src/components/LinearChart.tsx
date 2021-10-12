import React from "react";
import Chart from "react-google-charts";
import Paper from "@mui/material/Paper";

import { dataFromCSV } from "../utilities/Utilities";

interface IProps {
  url: string;
  title: string;
}

class LinearChart extends React.Component<IProps> {
  state = { dataLoadingStatus: "loading", chartData: [] };
  async componentDidMount() {
    const data = await dataFromCSV(this.props.url);
    console.log("data", data);
    this.setState({
      chartData: data,
      dataLoadingStatus: "ready"
    });
  }

  render() {
    return this.state.dataLoadingStatus === "ready" ? (
      <div>
        <Paper
          elevation={5}
          style={{
            padding: 20,
            width: "1200px"
          }}
        >
          <Chart
            chartType="LineChart"
            width={"1200px"}
            height={"800px"}
            data={this.state.chartData}
            options={{
              chartArea: { width: "70%", height: "80%" },
              title: `${this.props.title}`
            }}
          />
        </Paper>
      </div>
    ) : (
      <div>Fetching data from API</div>
    );
  }
}

export default LinearChart;
