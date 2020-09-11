import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  TableSortLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
  tableHeader: { backgroundColor: theme.palette.background.paper },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1),
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end',
  },
  page: {
    margin: '10px 0',
  },
}));
function DataTable(props) {
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState();
  const {
    rowsPerPage,
    page,
    count,
    rows,
    order,
    handleChangePage,
    handleChangeRowsPerPage,
    handleChangeSort,
    className,
    ...rest
  } = props;
  const classes = useStyles();
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography color="textSecondary" gutterBottom variant="body2" className={classes.page}>
        {`${count} Bản ghi được tìm thấy. Trang ${page + 1} trên ${Math.ceil(count / rowsPerPage)}`}
      </Typography>
      <Card>
        <CardContent className={classes.content}>
          <div className={classes.inner}>
            <Table>
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell align="center">Mã Sinh Viên</TableCell>
                  <TableCell align="center">Tên Sinh Viên</TableCell>
                  <TableCell align="center">Lớp-Khoá</TableCell>
                  <TableCell align="center">Điểm Thi</TableCell>
                  <TableCell align="center">Điểm Phỏng Vấn</TableCell>
                  <TableCell align="center">Tổng Điểm</TableCell>
                  <TableCell align="center">Tổng Điểm</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  ? rows
                      .filter(item => item.userID)
                      .map(row => (
                        <TableRow hover key={row._id}>
                          <TableCell align="center">{row.userID.studentId}</TableCell>
                          <TableCell align="center">{row.userID.name}</TableCell>
                          <TableCell align="center">{row.userID.class}</TableCell>
                          <TableCell align="center">{row.totalScore}</TableCell>
                          <TableCell align="center">{row.interviewScore}</TableCell>
                          <TableCell align="center">{row.interviewScore + row.totalScore}</TableCell>
                          <TableCell align="center">
                            <Button
                              variant="outlined"
                              color="primary"
                              onClick={() => {
                                setComment(row.comment);
                                setOpen(true);
                              }}
                            >
                              Xem Bình Luận
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                  : null}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            labelRowsPerPage="Số bản ghi mỗi trang"
            component="div"
            count={count}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[25, 50, 100]}
          />
        </CardActions>
      </Card>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Bình luận</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{ whiteSpace: 'pre-wrap' }}>
            {comment ? comment : 'Chưa có bình luận'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DataTable.propTypes = {
  className: PropTypes.string,
};

export default DataTable;
