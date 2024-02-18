import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import classes from '../Signup/AuthenticationTitle.module.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../../redux/user/userSlice";
import GoogleAuth from "../../components/GoogleAuth";
const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  // const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const {loading,error} = useSelector(state => state.user)

  const navigate = useNavigate();
  const navigateTo = (path) => {
      navigate(path);
  }
  let role = localStorage.getItem('role');

  const postData = async () => {
  
    // setLoading(true); // Set loading to true when the request starts
    dispatch(signInStart());
    try {
      const res = await axios.post(`/auth/${role}/login`, {
        email,
        password
      });
      dispatch(signInSuccess(res.data))
      toast.success("user successfully logged in", {
        className: 'bg-second text-black'
      });
      console.log(res);
      localStorage.setItem('token', res.data.token);
      navigateTo('/edit');
    } catch (err) {
      dispatch(signInFailure(err.response.data))
      toast.error(error.message,{
        className: 'bg-second text-black'
      });
      console.log(err.response);
    }
  }
  

  const submitForm = () => {
    // setLoading(true);
    dispatch(signInStart());
    if(!email || !password) {
      toast.error("All fields are required",{
        className:'bg-second text-black'
      });
      // setLoading(false);
      dispatch(signInFailure("all fields are required"));
      return;
    }
    if(email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      toast.error("Invalid email",{
        className:'bg-second text-black'
      });
      // setLoading(false);
      dispatch(signInFailure("Invalid email"));
      return;
    }
    if(password.length < 8) {
      toast.error("Password must be at least 8 characters long",{
        className:'bg-second text-black'
      });
      // setLoading(false);
      dispatch(signInFailure("Password must be at least 8 characters long"));
      return;
    }
    postData()
    // setLoading(false);
  }

  return (
    <Container className="-mt-10" size={400} my={0}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Dont have an account yet?{' '}
        <Anchor size="sm" component="button">
          Sign Up
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput value={email} onChange={(e)=>setEmail(e.target.value)} label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
        </Group>
        <Button onClick={submitForm} className="bg-blue-500" fullWidth mt="xl">
          {
            loading ? "Loading..." : "Log in"
          }
        </Button>
        <GoogleAuth />
      </Paper>
    </Container>
  )
}

export default Login