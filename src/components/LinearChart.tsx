import React from "react";
import Chart from "react-google-charts";

interface IProps {
  url: string;
}

class LinearChart extends React.Component<IProps> {
  state = { dataLoadingStatus: "loading", chartData: [] };
  didMount = async function (component) {
    const response = await fetch("https://api.exchangeratesapi.io/latest?symbols=USD,GBP,CAD");
    const json = await response.json();
    const rateCurrencyNames = Object.keys(json.rates);
    const rateCurrencyValues: string[] = Object.values(json.rates);
    const chartData = [["Currency Name", "Currency Rate"]];
    for (let i = 0; i < rateCurrencyNames.length; i += 1) {
      chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]]);
    }
    this.setState({
      dataLoadingStatus: "ready",
      chartData: chartData
    });
  };
  render() {
    return this.state.dataLoadingStatus === "ready" ? (
      <Chart
        chartType="BarChart"
        data={this.state.chartData}
        options={{
          chartArea: {
            width: "50%"
          },
          title: "EUR Price"
        }}
        rootProps={{ "data-testid": "1" }}
      />
    ) : (
      <div>Fetching data from API</div>
    );
  }
}

export default LinearChart;
