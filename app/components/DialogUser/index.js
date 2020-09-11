import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
  colors,
  TextField,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%',
  },
  container: {
    marginTop: theme.spacing(3),
  },
  actions: {
    justifyContent: 'flex-end',
  },
  closeButton: {
    color: theme.palette.white,
    backgroundColor: colors.blue[500],
    '&:hover': {
      backgroundColor: colors.blue[700],
    },
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[500],
    '&:hover': {
      backgroundColor: colors.green[700],
    },
  },
}));

const DialogUser = props => {
  const {
    open,
    setOpen,
    row,
    staticContext,
    className,
    isEdit,
    onEdit,
    onCreate,
    ...rest
  } = props;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [classS, setClassS] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const classes = useStyles();
  useEffect(() => {
    clearData();
    if (row) {
      setName(row.name);
      setPhone(row.phone);
      setClassS(row.class);
      setStudentId(row.studentId);
      setEmail(row.email);
      setPassword(row.password);
      setRole(row.role);
    }
  }, [props]);
  function clearData() {
    setName();
    setPhone();
    setClassS();
    setStudentId();
    setEmail();
    setPassword();
    setRole('user');
  }

  function onSubmit() {
    if (isEdit) {
      onEdit({
        ...row,
        ...{ name },
        ...{ phone },
        ...{ className: classS },
        ...{ studentId },
        ...{ email },
        ...{ password },
        ...{ role },
      });
    } else {
      onCreate({
        ...{ name },
        ...{ phone },
        ...{ className: classS },
        ...{ studentId },
        ...{ email },
        ...{ password },
        ...{ role },
      });
    }
    setOpen(false);
    props.history.push('/user');
  }
  return (
    <Modal onClose={() => setOpen(false)} open={open}>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent>
          <Typography align="center" gutterBottom variant="h3">
            {isEdit ? 'Chỉnh sửa người dùng' : 'Thêm người dùng'}
          </Typography>
          <ValidatorForm onSubmit={onSubmit}>
            <Grid className={classes.container} container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Tên"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  value={name}
                  errorMessages={['This field is required']}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Số Điện Thoại"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={phone}
                  onChange={e => {
                    setPhone(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Lớp"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={classS}
                  onChange={e => {
                    setClassS(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Mã Sinh Viên"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={studentId}
                  onChange={e => {
                    setStudentId(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Mã Sinh Viên"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Mật Khẩu"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  select
                  variant="outlined"
                  style={{ width: '100%' }}
                  label="Vị Trí"
                  value={role}
                  onChange={e => setRole(e.target.value)}
                >
                  <MenuItem value="user">user</MenuItem>
                  <MenuItem value="admin">admin</MenuItem>
                  <MenuItem value="judge">judge</MenuItem>
                  <MenuItem value="receptionist">receptionist</MenuItem>
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Email"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </ValidatorForm>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
            className={classes.closeButton}
          >
            Đóng
          </Button>
          <Button
            className={classes.saveButton}
            variant="contained"
            onClick={() => onSubmit()}
          >
            Lưu
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

DialogUser.displayName = 'DialogUser';

DialogUser.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default withRouter(DialogUser);
