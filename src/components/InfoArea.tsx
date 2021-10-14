import React from "react";
import Paper from "@mui/material/Paper";

class InfoArea extends React.Component {
  state = { dataLoadingStatus: "loading", infoData: "" };
  async componentDidMount() {
    const response = await fetch("http://localhost/infoarea.md");
    const data = await response.text();
    this.setState({
      infoData: data,
      dataLoadingStatus: "ready"
    });
  }

  render() {
    return this.state.dataLoadingStatus === "ready" ? (
      <div>
        <Paper
          elevation={5}
          style={{
            width: "1200px",
            height: "500px"
          }}
        ></Paper>
      </div>
    ) : (
      <div>Fetching data from API</div>
    );
  }
}

export default InfoArea;
