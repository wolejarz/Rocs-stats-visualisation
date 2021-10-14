import React from "react";
import Paper from "@mui/material/Paper";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
            width: "800px",
            maxHeight: "500px",
            overflow: "scroll",
            marginTop: "20px",
            textAlign: "left"
          }}
        >
          <ReactMarkdown children={this.state.infoData} remarkPlugins={[remarkGfm]} />
        </Paper>
      </div>
    ) : (
      <div>Fetching data from API</div>
    );
  }
}

export default InfoArea;
