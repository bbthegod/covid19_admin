/* eslint-disable no-unused-vars */
/**
 *
 * InterviewPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import CachedIcon from '@material-ui/icons/Cached';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import saga from './saga';
import reducer from './reducer';
import makeSelectInterviewPage from './selectors';
import PaperList from './components/PaperList';
import UserDetail from './components/UserDetail';

import { getUser, interview, call } from './actions';

const useStyles = makeStyles(theme => ({
  root: {},
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '20px 10px',
  },
  inforText: {
    color: '#FF7043',
  },
}));
export function InterviewPage(props) {
  const classes = useStyles();
  const { interviewPage } = props;
  useInjectReducer({ key: 'interviewPage', reducer });
  useInjectSaga({ key: 'interviewPage', saga });
  const [users, setUser] = useState();
  const [usersDetail, setUserDetail] = useState();
  const [score, setScore] = useState();
  const [comment, setComment] = useState('');
  useEffect(() => {
    props.onGetUser();
  }, []);
  useEffect(() => {
    if (!localStorage.getItem('interviewer')) {
      const name = prompt('Nhập tên người phỏng vấn');
      if (name != null) {
        localStorage.setItem('interviewer', name);
      }
    }
  }, []);
  useEffect(() => {
    if (interviewPage && interviewPage.users) {
      setUser(interviewPage.users.data);
    }
  }, [interviewPage]);
  function search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].userID.studentId === nameKey) {
        return myArray[i];
      }
    }
  }
  async function handleChangeSearch(e) {
    const a = await search(e.target.innerHTML, users);
    setUserDetail(a);
  }
  function handleSubmit() {
    if (usersDetail) {
      if (localStorage.getItem('interviewer')) {
        props.onInterview({
          ...usersDetail,
          interviewScore: +score,
          comment,
          interviewer: localStorage.getItem('interviewer'),
        });
        props.onGetUser();
      }
      setUserDetail(null);
    } else {
      alert('Chọn một sinh viên !');
    }
  }
  return (
    <Grid container>
      <Grid item xs={4} style={{ padding: '10px', textAlign: 'center' }}>
        <Paper>
          <Typography
            variant="h4"
            gutterBottom
            style={{ padding: '15px 0px', marginBottom: '0px' }}
          >
            THÔNG TIN SINH VIÊN
          </Typography>
          <Divider variant="middle" />
          <div className={classes.searchBox}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => props.onCall()}
              style={{ margin: '0 20px 0 0' }}
            >
              Gọi SV
            </Button>
            <IconButton
              style={{ margin: '0 20px 0 0', color: '#4CAF50' }}
              onClick={() => props.onGetUser()}
            >
              <CachedIcon />
            </IconButton>
            <Autocomplete
              options={users}
              getOptionLabel={option =>
                option.userID ? option.userID.studentId : 'Mã Sinh Viên'
              }
              getOptionDisabled={option => option.isInterviewed === true}
              style={{ width: 300 }}
              onChange={handleChangeSearch}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Mã Sinh Viên"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>
          <Divider variant="middle" />
          <UserDetail
            comment={comment}
            setComment={setComment}
            score={score}
            setScore={setScore}
            usersDetail={usersDetail}
            handleSubmit={handleSubmit}
          />
        </Paper>
      </Grid>
      {/* ------------------------------------------------------------------------------ */}
      <Grid item xs={8} style={{ padding: '10px', textAlign: 'center' }}>
        <PaperList />
      </Grid>
    </Grid>
  );
}

InterviewPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  interviewPage: makeSelectInterviewPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetUser: () => dispatch(getUser()),
    onInterview: data => dispatch(interview(data)),
    onCall: () => dispatch(call()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(InterviewPage);
