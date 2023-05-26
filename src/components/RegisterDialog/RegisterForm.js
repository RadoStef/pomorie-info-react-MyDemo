import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import classes from './RegisterForm.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const RegisterForm = () => {
  const [open, setOpen] = useState(false);
  const [showError, setShowError] = useState(true);
  const [errorMessage, showErrorMessage] = useState('error message');
  const {register, handleSubmit } = useForm();

    //   const schema = yup.object().shape({
    //     firstName: yup.string().required(),
    //     lastName: yup.string().required(),
    //     age: yup.number().positive().integer(),
    //     email: yup.string.email().required(),
    //     city: yup.string().required(),
    //     phoneNumber: yup.number().positive(),
    //     password: '',
    //     confirmPassword: '',
    //   })

  const onSubmit = (data) => {
    console.log(data);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <HowToRegIcon/>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullScreen={true}
      >
        <DialogTitle>{"Register in pomorie-info.com"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Регистрирайте се за да получавате новини, оферти и опции за ранни записвания и резервации в най-добрите хотели и къщи за гости в Поморие.
          </DialogContentText>

          <div className={classes['form-wrapper']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes["input-error"]}>
                    <p>{showError}{errorMessage}</p>
                </div>
                <div className={classes["input-wrapper"]}>
                    <label>First name </label>
                    <input type='text' name='firstName' {...register("firstName")}/>
                </div>

                <div className={classes["input-wrapper"]}>
                    <label htmlFor='lastName'>Last name </label>
                    <input type='text' name='lastName' id='lastName' {...register("lastName")}/>
                </div>

                <div className={classes["input-wrapper"]}>
                    <label htmlFor='lastName'>Age </label>
                    <input type='number' name='age' id='lastName' {...register("age")}/>
                </div>

                <div className={classes["input-wrapper"]}>
                <label>Emai address </label>
                    <input type='text' name='email' {...register("email")}/>
                </div>

                <div className={classes["input-wrapper"]}>
                    <label>City </label>
                    <input type='text' name='city' {...register("city")}/>
                </div>

                <div className={classes["input-wrapper"]}>
                    <label>Phone</label>
                    <input type='number' name='phoneNumber' {...register("phoneNumber")}/>
                </div>

                <div className={classes["input-wrapper"]}>
                    <label>Password</label>
                    <input type='password' name='password' {...register("password")}/>
                </div>

                <div className={classes["input-wrapper"]}>
                    <label>Confirm Password</label>
                    <input type='password' name='confirmPassword' {...register("confirmPassword")}/>
                </div>
                <button className={classes.submit}>Регистрация</button>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className={classes.submit}>Обратно към сайта</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}