import React, { useMemo } from "react";
import next from "immer";

import { NormalTable } from "../../../common/components/table/normalTable";

import tableColumns from "../static/tableColumns.json";

const TableContainer = (props) => {
  let { dashboard } = props;

  const sortNumbers = key => (a, b) => {
    let _a = a[key] || 0;
    let _b = b[key] || 0;

    return _a - _b;
  }

  const sortAlphabets = key => (a, b) => {
    if (a[key] < b[key]) {
      return -1;
    } else if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  }

  const columnData = useMemo(() => {
    return next(tableColumns, arr => {
      arr[0].render = (data, record) => {
        return record.timestamp;
      }
      arr[4].render = (data, record) => {
        return data.toFixed(4);
      }
      arr[0].sorter = sortNumbers("date");
      arr[1].sorter = sortAlphabets("game");
      arr[2].sorter = sortNumbers("revenue");
      arr[3].sorter = sortNumbers("impressions");
      arr[4].sorter = sortNumbers("eCPM");
    })
  }, [])

  return (
    <NormalTable columns={columnData} dataSource={dashboard} rowKey="index" />
  )
}

export default TableContainer;