import React from "react";
import Chart from "react-google-charts";

interface IProps {
  url: string;
}

class LinearChart extends React.Component<IProps> {
  state = { dataLoadingStatus: "loading", chartData: [] };
  async componentDidMount() {
    const COUNTRY_CODE = "lb";
    const INDICATOR = "DT.DOD.DECT.CD";
    const response = await fetch(
      "https://api.worldbank.org/v2/countries/" + COUNTRY_CODE + "/indicators/" + INDICATOR + "?format=json"
    );
    const json = await response.json();
    const [metadata, data] = json;
    {
      /* console.log(data,metadata) */
    }
    const columns = [
      { type: "date", label: "Year" },
      { type: "number", label: "Debt" }
    ];
    let rows: any[] = [];
    const nonNullData = data;

    for (let row of nonNullData) {
      const { date, value } = row;
      rows.push([new Date(Date.parse(date)), value]);
    }
    this.setState({
      chartData: [columns, ...rows],
      dataLoadingStatus: "ready"
    });
  }

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
