/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_ADS_SUCCESS,
  LOAD_ADS,
  LOAD_ADS_ERROR,
} from '../AdsPage/constants';
import {
  LOAD_ANNOTATIONS_SUCCESS,
  LOAD_ANNOTATIONS,
  LOAD_ANNOTATIONS_ERROR,
} from '../AnnotationsPage/constants';
import {
  LOAD_COUNTS,
  LOAD_COUNTS_SUCCESS,
  LOAD_COUNTS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  ads: null,
  counts: {
    adsCount: null,
    annotationsCount: null,
  },
  annotations: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ADS:
        draft.loading = true;
        draft.error = false;
        draft.ads = null;
        break;

      case LOAD_ADS_SUCCESS:
        draft.loading = false;
        draft.ads = action.ads;
        break;

      case LOAD_ADS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_ANNOTATIONS:
        draft.loading = true;
        draft.error = false;
        draft.annotations = null;
        break;

      case LOAD_ANNOTATIONS_SUCCESS:
        draft.loading = false;
        draft.annotations = action.annotations;
        draft.annotations = action.annotations;
        break;

      case LOAD_ANNOTATIONS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_COUNTS:
        draft.loadingCounts = true;
        draft.errorCounts = false;
        break;

      case LOAD_COUNTS_SUCCESS:
        draft.loadingCounts = false;
        draft.counts = {
          adsCount: action.adsCount,
          annotationsCount: action.annotationsCount,
        };
        break;

      case LOAD_COUNTS_ERROR:
        draft.errorCounts = action.error;
        draft.loadingCounts = false;
        break;
    }
  });

export default appReducer;
