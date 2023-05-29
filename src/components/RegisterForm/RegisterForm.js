import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import classes from './RegisterForm.module.css';

const errorMessageRequired = 'Това поле е задължително.';
const errorMessagePassword = 'Това поле трябва да съдържа минимум 6 символа.'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const RegisterForm = () => {
  const [open, setOpen] = useState(false);

  const schema = yup.object().shape({
    firstName: yup.string().required(errorMessageRequired).matches(/^\D*$/),
    lastName: yup.string().required(errorMessageRequired).matches(/^\D*$/),
    email: yup.string().email().required(errorMessageRequired),
    city: yup.string().required(errorMessageRequired),
    phoneNumber: yup.number().positive('Only positive numbers...'),
    password: yup.string().min(6).max(25).required(errorMessagePassword),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Паролата не съвпада...').required(),
  });

  const {register, handleSubmit, formState: {
    errors,
    }} = useForm({
    resolver: yupResolver(schema),
  });

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
        <PersonAddAltIcon/>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullScreen={true}
      >
        <DialogTitle>{"Създай профил в pomorie-info.com"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Регистрирайте се за да получавате новини, оферти и опции за ранни записвания и резервации в най-добрите хотели и къщи за гости в Поморие.
          </DialogContentText>

          <div className={classes['form-wrapper']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes["input-wrapper"]}>
                  <label>Име *</label>
                  <input type='text' name='firstName' {...register("firstName")}/>
                  <p className={classes['input-error']}>  {errors.firstName?.message}</p>
                </div>

                <div className={classes["input-wrapper"]}>
                  <label htmlFor='lastName'>Фамилия *</label>
                  <input type='text' name='lastName' id='lastName' {...register("lastName")}/>
                  <p className={classes['input-error']}>  {errors.lastName?.message}</p>
                </div>

                <div className={classes["input-wrapper"]}>
                  <label>Email адрес *</label>
                  <input type='text' name='email' {...register("email")}/>
                  <p className={classes['input-error']}>  {errors.email?.message}</p>
                </div>

                <div className={classes["input-wrapper"]}>
                  <label>Град </label>
                  <input type='text' name='city' {...register("city")}/>
                  <p className={classes['input-error']}>  {errors.city?.message}</p>
                </div>

                <div className={classes["input-wrapper"]}>
                  <label>Телефонен номер </label> 
                  <input type='number' name='phoneNumber' {...register("phoneNumber")}/>
                  <p className={classes['input-error']}>  {errors.phoneNumber?.message}</p>
                </div>

                <div className={classes["input-wrapper"]}>
                  <label>Парола *</label>
                  <input type='password' name='password' {...register("password")}/>
                  <p className={classes['input-error']}>  {errors.password?.message}</p>
                </div>

                <div className={classes["input-wrapper"]}>
                  <label>Потвърди паролата *</label>
                  <input type='password' name='confirmPassword' {...register("confirmPassword")}/>
                  <p className={classes['input-error']}>  {errors.confirmPassword?.message}</p>
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