import React from "react";
import styled from "styled-components";

export const CustomChartXTick = props => {
  const { x, y, payload, className } = props;

  let text = payload.value;
  if (text.length > 12) {
    text = text.substring(0, 12) + "...";
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <StyledText className={className} textAnchor="middle" width={70} transform="rotate(-45)" dx="-45">
        {text}
      </StyledText>
    </g>
  );
};

const StyledText = styled.text`
  font-size: 12px;
`;