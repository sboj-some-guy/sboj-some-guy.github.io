import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { DatePicker } from "antd";
import { maxBy, minBy, isEmpty } from "lodash";
import moment from "moment";

import { StyledCard } from "../../common/styled";
import ChartContainer from "./components/chartContainer";
import TableContainer from "./components/tableContainer";

import { getDashboardSelector, getLoadingSelector, getErrorSelector, getDashboardRequestAction } from "./ducks";

const { RangePicker } = DatePicker;

const Dashboard = (props) => {
  let { getDashboardRequestAction, dashboard, loading, error } = props;

  const [range, setRange] = useState(null);
  const [prevDashboard, setPrevDashboard] = useState(null);

  useEffect(() => {
    getDashboardRequestAction();
  }, []);

  const dateRange = useMemo(() => {
    if (dashboard.length) {
      return [moment(minBy(dashboard, "date").timestamp), moment(maxBy(dashboard, "date").timestamp)]
    }
    return []
  }, [dashboard]);

  if (prevDashboard !== dashboard && !isEmpty(dashboard)) {
    setPrevDashboard(dashboard);
    setRange([dateRange[0].valueOf(), dateRange[1].valueOf()]);
  }

  const filteredDashboard = useMemo(() => {
    if (range !== null) {
      return dashboard.filter((item, index) => {
        if (item.date >= range[0] && item.date <= range[1]) {
          return true;
        }
        return false;
      });
    } else {
      return [];
    }
  }, [dashboard, range]);


  const onPickerChange = (_range) => {
    setRange([_range[0].valueOf(), _range[1].valueOf()]);
  }

  const disabledDate = (current) => {
    return current && current > moment().endOf('day');
  }

  return (
    <div>
      <StyledCard loading={loading}>
        {
          (dashboard && !isEmpty(dashboard)) ?
            <RangePicker defaultValue={dateRange} disabledDate={disabledDate} onChange={onPickerChange} />
            : null
        }
        <ChartContainer dashboard={filteredDashboard} error={error} />
      </StyledCard>
      <StyledCard loading={loading}>
        <TableContainer dashboard={filteredDashboard} error={error} />
      </StyledCard>
    </div>
  )
}

export default connect(
  state => ({
    dashboard: getDashboardSelector(state),
    loading: getLoadingSelector(state),
    error: getErrorSelector(state),
  }),
  {
    getDashboardRequestAction: getDashboardRequestAction
  }
)(Dashboard);
