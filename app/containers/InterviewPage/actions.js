/*
 *
 * InterviewPage actions
 *
 */

import * as types from './constants';

//----------------------------------------------------
export function getUser(query) {
  return {
    type: types.GET_USER,
    query,
  };
}

export function getUserSuccess(data) {
  return {
    type: types.GET_USER_SUCCESS,
    data,
  };
}

export function getUserFail() {
  return {
    type: types.GET_USER_FAIL,
  };
}
//----------------------------------------------------
export function call(query) {
  return {
    type: types.CALL,
    query,
  };
}

export function callSuccess(data) {
  return {
    type: types.CALL_SUCCESS,
    data,
  };
}

export function callFail() {
  return {
    type: types.CALL_FAIL,
  };
}
//----------------------------------------------------
export function interview(data) {
  return {
    type: types.INTERVIEW,
    data,
  };
}

export function interviewSuccess() {
  return {
    type: types.INTERVIEW_SUCCESS,
  };
}

export function interviewFail() {
  return {
    type: types.INTERVIEW_FAIL,
  };
}
