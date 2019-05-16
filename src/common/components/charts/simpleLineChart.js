import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line
} from "recharts";
import styled from "styled-components";
import { CustomChartTooltip } from "./chartUtils/CustomChartToolTip";
import { CustomChartXTick } from "./chartUtils/CustomChartXTick";
import { ErrorMessageDiv } from "../../../common/styled";

const _yTickFormatter = val => {
  return Number(val.toFixed(4));
};

const SimpleLineChart = (props) => {
  let {
    className,
    data = [],
    yAxisDataKey,
    xAxisDatakey = "xAxisDatakey",
    yAxisLabel = "",
    yTickFormatter = _yTickFormatter,
    getTooltipJSX,
    lineStroke
  } = props;

  const constants = {
    TICK_FILL: { fill: "#010101", fontWeight: "normal" },
    Y_AXIS_LABEL: { value: yAxisLabel, angle: -90, dx: -25 }
  };

  return (
    <div>
      {
        (data.length) ?
          <ResponsiveContainer width={"100%"} height={400} className={className}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 50 }}>
              <CartesianGrid strokeWidth={0.5} />
              <XAxis dataKey={xAxisDatakey} tick={<CustomChartXTick />} />
              <YAxis
                tick={constants.TICK_FILL}
                tickFormatter={yTickFormatter}
                label={constants.Y_AXIS_LABEL}
              />
              <Tooltip cursor={false} content={<CustomChartTooltip getJSX={getTooltipJSX} />} />
              <Line dataKey={yAxisDataKey} stroke={lineStroke} />
            </LineChart>
          </ResponsiveContainer>
          :
          <ErrorMessageDiv>No Data Available.</ErrorMessageDiv>
      }
    </div>
  )
}

const StyledSimpleLineChart = styled(SimpleLineChart)`
  font-size: 12px;
`;

export { StyledSimpleLineChart as SimpleLineChart }