import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  Button,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 700,
  },
  tableHeader: { backgroundColor: theme.palette.background.paper },
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
  page: {
    margin: '10px 0',
  },
}));
function DataTable(props) {
  const {
    rowsPerPage,
    page,
    count,
    rows,
    handleChangePage,
    handleChangeRowsPerPage,
    className,
    ...rest
  } = props;

  const classes = useStyles();
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
        className={classes.page}
      >
        {`${count} Bản ghi được tìm thấy. Trang ${page + 1} trên ${Math.ceil(
          count / rowsPerPage,
        )}`}
      </Typography>
      <Card>
        <CardContent className={classes.content}>
          <div className={classes.inner}>
            <Table>
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell align="center">Tên Bộ Câu Hỏi</TableCell>
                  <TableCell align="center">Tổng số câu hỏi</TableCell>
                  <TableCell align="center">Số câu hỏi sử dụng</TableCell>
                  <TableCell align="center">Ngẫu Nhiên</TableCell>
                  <TableCell align="right">Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  ? rows.map(row => (
                      <TableRow hover key={row._id}>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">
                          {row.questions.length}
                        </TableCell>
                        <TableCell align="center">
                          {row.usingQuestion}
                        </TableCell>
                        <TableCell align="center">
                          {row.isRandom ? 'True' : 'False'}
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            color="primary"
                            size="small"
                            variant="outlined"
                            onClick={() => {
                              props.history.push(`/questionlist/${row._id}`);
                            }}
                          >
                            XEM
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
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
    </div>
  );
}

DataTable.propTypes = {
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  count: PropTypes.number,
  rows: PropTypes.array,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  className: PropTypes.string,
};

export default DataTable;
