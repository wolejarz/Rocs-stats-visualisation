import React from "react";
import Chart from "react-google-charts";
import { dataFromCSV } from "../utilities/Utilities";

interface IProps {
  url: string;
}

class LinearChart extends React.Component<IProps> {
  state = { dataLoadingStatus: "loading", chartData: [] };
  async componentDidMount() {
    const data = await dataFromCSV("http://localhost/vilje.hpc.ntnu.no.cost.csv");
    console.log("data", data);
    this.setState({
      chartData: data,
      dataLoadingStatus: "ready"
    });
  }

  render() {
    return this.state.dataLoadingStatus === "ready" ? (
      <Chart
        chartType="LineChart"
        width={"1600px"}
        height={"1000px"}
        data={this.state.chartData}
        options={{
          chartArea: { width: "70%", height: "80%" },
          title: "COST"
        }}
      />
    ) : (
      <div>Fetching data from API</div>
    );
  }
}

export default LinearChart;
