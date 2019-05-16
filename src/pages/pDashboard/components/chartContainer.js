import React from "react";
import { Row, Col } from "antd";

import { SimpleLineChart } from "../../../common/components/charts/simpleLineChart";
import { ErrorMessageDiv } from "../../../common/styled";

const ChartContainer = (props) => {
  let { dashboard, error } = props;

  const getTooltipJSX = (tooltipData) => {
    let data = null;
    if (tooltipData && tooltipData.length) {
      data = tooltipData[0].payload;
    }
    return (
      <div>
        {
          (data) ?
            <>
              <Row type="flex" justify="start">
                <Col className="chart-tooltip-key">Date - </Col>
                <Col className="chart-tooltip-value">{data.timestamp}</Col>
              </Row>
              <Row type="flex" justify="start">
                <Col className="chart-tooltip-key">Revenue - </Col>
                <Col className="chart-tooltip-value">{data.revenue}</Col>
              </Row>
              <Row type="flex" justify="start">
                <Col className="chart-tooltip-key">Impressions - </Col>
                <Col className="chart-tooltip-value">{data.impressions}</Col>
              </Row>
              <Row type="flex" justify="start">
                <Col className="chart-tooltip-key">Game - </Col>
                <Col className="chart-tooltip-value">{data.game}</Col>
              </Row>
              <Row type="flex" justify="start">
                <Col className="chart-tooltip-key">eCPM - </Col>
                <Col className="chart-tooltip-value">{Number(data.eCPM.toFixed(4))}</Col>
              </Row>
            </> : null
        }
      </div>
    );
  }



  return (
    <>
      {
        (!error) ?
          < SimpleLineChart
            data={dashboard}
            yAxisDataKey="eCPM"
            xAxisDataKey="timestamp"
            lineStroke="#0366a8"
            getTooltipJSX={getTooltipJSX}
            yAxisLabel="eCPM"
          />
          :
          <ErrorMessageDiv>
            {error}
          </ErrorMessageDiv>
      }
    </>
  )
}

export default ChartContainer;