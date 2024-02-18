import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateForm } from "./validate";
import axios from "axios";
import { toast } from "react-toastify";
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
import classes from './AuthenticationTitle.module.css';
import GoogleAuth from "../../components/GoogleAuth";
import Option from "../../components/Option/Option";

const SignUp = () => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [role,setRole] = useState("");

  let errorMessage = "valid";
  
  const navigate = useNavigate()
  const navigateTo = (path) => {
    navigate(path);
  }


  const postData = async () => {
    await axios.post(`/auth/${role}/signup`, {
      username,
      email,
      password
    }).then(() => {
        toast.success("sign up succesfully", {
            className: 'bg-second text-black'
        });
      setLoading(false);
      navigateTo('/login');
    }).catch((err) => {
      setLoading(false);
      toast.error("something went wrong",{
        className: 'bg-second text-black'
      });
      console.log(err.response);
    });
  }
  const submitForm = () => {
    setLoading(true);
    errorMessage = validateForm(username, email, password, confirmPassword);
    if (errorMessage !== "valid") {
      toast.error(errorMessage,{
        className:'bg-second text-black'
      });
      setLoading(false);
      return;
    }
    postData();
  }
  if(role==""){
    return(
        <Option setRole={setRole}/>
    )
  }

  return (
    <Container className="-mt-10" size={400} my={0}>
      <Title ta="center" className={classes.title}>
        Welcome!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account yet?{' '}
        <Anchor size="sm" component="button">
          Log in
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput value={username} onChange={(e)=>setUsername(e.target.value)} label="username" placeholder="taj malnas" required />
        <TextInput value={email} onChange={(e)=>setEmail(e.target.value)} label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" placeholder="Your password" required mt="md" />
        <PasswordInput value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} label="Password" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
        </Group>
        <Button onClick={submitForm} className="bg-blue-500" fullWidth mt="xl">
          {
            loading ? "Loading..." : "Sign up"
          }
        </Button>
        <GoogleAuth role={role} />
      </Paper>
    </Container>
  )
}

export default SignUp