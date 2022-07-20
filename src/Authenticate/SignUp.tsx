import React from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Text, Button, Group, Center, Container, Loader, Notification } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import {BsEyeFill,BsEyeSlashFill} from 'react-icons/bs'
import { collection, addDoc,setDoc,doc } from "firebase/firestore";
import { db } from '../firebase';
import { useStore_1 } from '../State';

var k = 0

function SignUp() {

  let nav = useNavigate()
  const [pass,setPass] = React.useState('password')
  const setId = useStore_1(state => state.setId)

  const form = useForm({
    initialValues: {
      email: '',
      username:'',
      password:''
    },
    validate: {
        email : (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        username : (value) => (value.length < 4)? 'Please Enter a biggger Password' : null,
        password : (value) => (value.length < 4)? 'Please Enter a biggger Password' : null
      },
    });

    const Password = () => {
      if(k%2 == 0){
        setPass('text')
        console.log('Icon = ',pass)
        k++
      }
      else{
        setPass('password')
        console.log('Icon = ',pass)
        k++
      }
    }

    const handleSubmit = async (values:any) => {
      values.preventDefault()
      var email = form.values.email
      var password = form.values.password
      var username = form.values.username
      var id = (new Date()).getTime()
      const docRef = doc(db,'Account_Data',`/id=${id}`)
      const payLoad = {email:email ,password:password ,username:username,Sid:id}
      await setDoc(docRef,payLoad)
      window.localStorage.setItem('Data',true)
      alert('Done')
      setId(id)
      nav('/')
    }

  return (
    <Container p='30vh 0' fluid>
        <Group sx={{maxWidth:500 }} mx="auto" p='20px' style={{background:'white',borderRadius:'10px'}} direction='column' position='center' grow>
              <Text size='xl'align='center'  weight={700}>Login</Text>
              <form onSubmit={values => handleSubmit(values)} style={{width:'100%'}}>
                  <TextInput
                  required
                  label="Email"
                  placeholder="your@email.com"
                  radius="xl"
                  p='5px'
                  {...form.getInputProps('email')}
                  
                  />

                  <TextInput
                  required
                  label="Username"
                  placeholder="Write a unique name"
                  radius="xl"
                  p='5px'
                  {...form.getInputProps('userName')}
                  
                  />

                  <TextInput
                  required
                  type={pass}
                  label="Password"
                  placeholder="Password"
                  radius="xl"
                  p='5px'
                  rightSection ={k%2 == 0?<BsEyeSlashFill style={{cursor:'pointer'}} onClick={Password}/>:<BsEyeFill style={{cursor:'pointer'}} onClick={Password}/>}
                  {...form.getInputProps(pass)}
                  
                  />

                  <Group position="right" mt="md">
                  <Button radius={'xl'} type="submit">Submit</Button>
                  </Group>

                  <Text align='center' p='10px' color={'black'}>Do not have an account? <Link to={'/Login'}>Login</Link></Text>
              </form>
          </Group>
    </Container>
  )
}

export default SignUp