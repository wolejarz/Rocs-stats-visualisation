import React from "react";
import Chart from "react-google-charts";
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
    ) : (
      <div>Fetching data from API</div>
    );
  }
}

export default LinearChart;
