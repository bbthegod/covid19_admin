/* eslint-disable no-unused-vars */
/**
 *
 * InterviewPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import ClassIcon from '@material-ui/icons/Class';
import PhoneIcon from '@material-ui/icons/Phone';
import Grid from '@material-ui/core/Grid';
import CodeIcon from '@material-ui/icons/Code';
import Divider from '@material-ui/core/Divider';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
  root: {},
  scoreBox: {
    textAlign: 'left',
    margin: 10,
    display: 'flex',
    alignItems: 'center',
  },
  inforText: {
    color: '#FF7043',
  },
}));
export function InterviewPage({
  comment,
  setComment,
  usersDetail,
  score,
  setScore,
  handleSubmit,
  ...rest
}) {
  const classes = useStyles();
  return usersDetail ? (
    <List style={{ padding: '20px' }} {...rest}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CodeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={usersDetail.userID.studentId}
          secondary="Mã Sinh Viên"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={usersDetail.userID.name} secondary="Họ Tên" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ClassIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={usersDetail.userID.class} secondary="Lớp" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={usersDetail.userID.phone}
          secondary="Số Điện Thoại"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={usersDetail.userID.email} secondary="Email" />
      </ListItem>
      <div className={classes.scoreBox}>
        <Grid container md={12}>
          <Grid item md={12}>
            <TextField
              label="Tổng Điểm ( Tối đa 400đ )"
              variant="outlined"
              type="number"
              value={score}
              onChange={e => setScore(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {usersDetail.totalScore} +{' '}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={12} style={{ margin: '20px 0' }}>
            <TextareaAutosize
              value={comment}
              style={{ width: '100%', height: '200px' }}
              onChange={e => setComment(e.target.value)}
            />
          </Grid>
          <Grid item md={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Gửi đi
            </Button>
          </Grid>
        </Grid>
      </div>
    </List>
  ) : null;
}

InterviewPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  usersDetail: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  comment: PropTypes.number.isRequired,
  setComment: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default InterviewPage;
