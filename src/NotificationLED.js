import React from "react";
import LED from "./LED";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

class NotificationLED extends React.Component {
  render() {
    const { type, color, effect, level, effects, range, style } = this.props;

    return (
      <div style={style}>
        <LED
          color={color}
          effect={effect}
          level={level}
          type={type}
          effects={effects}
          range={range}
        />
      </div>
    );
  }
}

export default withStyles(styles)(NotificationLED);
