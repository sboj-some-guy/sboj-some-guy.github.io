import { takeEvery, call, put, all } from "redux-saga/effects";
import { createAction, createReducer, createSelector } from "redux-starter-kit";
import { normalCheck } from "../../common/utils/responseCheckers";
import { getRequest } from "../../common/utils/requestAPIs";
import { getTransformedData } from "./utils/transformers"

const GET_DASHBOARD_DATA_REQUEST = "[dashboard] get dashboard data request";
const GET_DASHBOARD_DATA_REQUEST_SUCCESS = "[dashboard] get dashboard data request success";
const GET_DASHBOARD_DATA_REQUEST_ERROR = "[dashboard] get dashboard data request error";

const initialState = {
  loading: true,
  dashboard: [],
  error: false
};

export const getDashboardRequestAction = createAction(GET_DASHBOARD_DATA_REQUEST);

export const getDashboardSelector = createSelector(
  ["dashboard.dashboard"],
  dashboard => dashboard
);

export const getLoadingSelector = createSelector(
  ["dashboard.loading"],
  loading => loading
);

export const getErrorSelector = createSelector(
  ["dashboard.error"],
  error => error
);

export const dashboard = createReducer(initialState, {
  [GET_DASHBOARD_DATA_REQUEST]: (state, { payload }) => {
    state.loading = true;
  },
  [GET_DASHBOARD_DATA_REQUEST_SUCCESS]: (state, { payload }) => {
    state.loading = false;
    state.dashboard = payload.dashboard
  },
  [GET_DASHBOARD_DATA_REQUEST_ERROR]: (state, { payload }) => {
    state.loading = false;
    state.error = payload.error
  },
});

function* getDashboardDataRequest({ payload }) {
  try {
    const dashboardData = yield call(getRequest, "http://www.mocky.io/v2/5cd04a20320000442200fc10", payload, normalCheck);
    const transformedData = getTransformedData(dashboardData.body);
    yield put({
      type: GET_DASHBOARD_DATA_REQUEST_SUCCESS,
      payload: { dashboard: transformedData }
    })
  } catch (error) {
    const msg = "Oops...! Something went wrong! Please reload the page..."
    yield put({
      type: GET_DASHBOARD_DATA_REQUEST_ERROR,
      payload: { error: error.message ? error.message : msg }
    })
  }
}

export function* dashboardSaga() {
  yield all([yield takeEvery(GET_DASHBOARD_DATA_REQUEST, getDashboardDataRequest)]);
}
