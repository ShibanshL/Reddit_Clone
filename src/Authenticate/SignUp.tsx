import React from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Text, Button, Group, Center, Container, Loader, Notification } from '@mantine/core';
import { Link } from 'react-router-dom';
import {BsEyeFill,BsEyeSlashFill} from 'react-icons/bs'



var k = 0

function SignUp() {

  const [pass,setPass] = React.useState('password')

  const form = useForm({
    initialValues: {
      email: '',
      password:'',
    },
    validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
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

  return (
    <Container p='30vh 0' fluid>
        <Group sx={{maxWidth:500 }} mx="auto" p='20px' style={{background:'white',borderRadius:'10px'}} direction='column' position='center' grow>
              <Text size='xl'align='center'  weight={700}>Login</Text>
              <form onSubmit={() => console.log('done')} style={{width:'100%'}}>
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