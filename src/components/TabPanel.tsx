import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface IProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

class TabPanel extends React.Component<IProps> {
  render() {
    const { children, value, index } = this.props;
    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

export default TabPanel;
