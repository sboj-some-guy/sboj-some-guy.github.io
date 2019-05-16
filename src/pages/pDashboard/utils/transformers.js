import moment from "moment";

export const getTransformedData = (data) => {
  return data.map((item, index) => {
    let eCPM = item.revenue / item.impressions * 1000;
    eCPM = isNaN(eCPM) ? 0 : eCPM;
    return {
      ...item,
      xAxisDatakey: item.timestamp,
      date: moment(item.timestamp).valueOf(),
      eCPM: eCPM,
      index
    }
  });
}