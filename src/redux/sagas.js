import { all } from "redux-saga/effects";

import { dashboardSaga } from "../pages/pDashboard/ducks";

export default function* () {
  yield all([dashboardSaga()]);
}
