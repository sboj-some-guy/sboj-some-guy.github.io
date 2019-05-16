import React from "react";
import styled from "styled-components"

const CustomChartTooltip = props => {
  const { className, payload, getJSX, } = props;

  const tooltip = getJSX(payload);
  return tooltip ? <div className={`chart-tooltip ${className}`}>{tooltip}</div> : <div />;
};

const StyledCustomChartTooltip = styled(CustomChartTooltip)`
  min-width: 200px;
  max-width: 600px;
  min-height: 75px;
  background-color: white;
  border: solid 1px #c0c0c0;
  text-align: left;
  padding: 10px;
  white-space: pre-wrap;

  .chart-tooltip-key {
    font-weight: normal;
  }

  .chart-tooltip-value {
    font-weight: 900;
  }
`;

export { StyledCustomChartTooltip as CustomChartTooltip }