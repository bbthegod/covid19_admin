import React, { useState } from 'react';
import moment from 'moment/moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 700,
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1),
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end',
  },
  info: {
    margin: '30px 0',
  },
  tableHeader: { backgroundColor: theme.palette.background.paper },
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Question = props => {
  const { className, user, ...rest } = props;
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  console.log(user.name);
  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <>
      {props.user ? (
        <>
          <Card className={classes.info}>
            <Grid alignItems="center" container justify="space-between">
              <Grid className={classes.item} item md={3} sm={6} xs={12}>
                <Typography component="h2" gutterBottom variant="overline">
                  Tên Sinh Viên
                </Typography>
                <div className={classes.valueContainer}>
                  <Typography variant="h3">{user.name}</Typography>
                </div>
              </Grid>
              <Grid className={classes.item} item md={3} sm={6} xs={12}>
                <Typography component="h2" gutterBottom variant="overline">
                  Mã Sinh Viên
                </Typography>
                <div className={classes.valueContainer}>
                  <Typography variant="h3">{user.studentId}</Typography>
                </div>
              </Grid>
              <Grid className={classes.item} item md={3} sm={6} xs={12}>
                <Typography component="h2" gutterBottom variant="overline">
                  Tổng điểm
                </Typography>
                <div className={classes.valueContainer}>
                  <Typography variant="h3">
                    {user.playId.totalScore + user.playId.interviewScore}
                  </Typography>
                </div>
              </Grid>
              <Grid className={classes.item} item md={3} sm={6} xs={12}>
                <Typography component="h2" gutterBottom variant="overline">
                  Đã Phỏng vấn
                </Typography>
                <div className={classes.valueContainer}>
                  <Typography variant="h3">
                    {props.user.playId.isInterviewed ? 'True' : 'False'}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Card>
          <Card>
            <CardHeader title="Câu hỏi" />
            <Divider />
            <CardContent className={classes.content}>
              <div className={classes.inner}>
                <Table>
                  <TableHead className={classes.tableHeader}>
                    <TableRow>
                      <TableCell align="center">Câu Hỏi</TableCell>
                      <TableCell align="center">Câu Trả lời</TableCell>
                      <TableCell align="center">Đã Trả Lời</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.user.playId.history.questions.map(question => (
                      <TableRow hover>
                        <TableCell align="center">
                          {question.questionId.content}
                        </TableCell>
                        <TableCell align="center">{question.answer}</TableCell>
                        <TableCell align="center">
                          {question.answered ? 'True' : 'False'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <Typography component="h1" gutterBottom>
          Chưa dự thi
        </Typography>
      )}
    </>
  );
};

Question.propTypes = {
  className: PropTypes.string,
};

Question.defaultProps = {};

export default Question;
