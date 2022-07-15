import { Grid,Group, Container,Input } from '@mantine/core'
import React from 'react'
import {BsFillImageFill} from 'react-icons/bs'
import {FiLink} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function Main() {

  let nav = useNavigate()
  const Submit = () => {
    nav('/Submit')
  }

  return (
    <>
      <Container ml='90px' pt='100px' p='20px' size={1400} style={{minHeight:'100vh'}}>
          <Grid p='10px' style={{background:'#1a1a1b',border:'2px solid rgba(255,255,255,0.2)', borderRadius:'5px'}}>
            <Grid.Col span={12}>
              <Grid>
                <Grid.Col span={1}>
                  <Group>
                    <img width='50px' style={{clipPath:'circle(50%)'}} src='https://styles.redditmedia.com/t5_325drx/styles/profileIcon_snoob50f7e3b-93b4-4cc5-a266-94cf1c20ae22-headshot.png?width=256&height=256&frame=1&crop=256:256,smart&s=ffacf1321632d5d1dcc233a6b16baacf69aecbbb' />
                  </Group>
                </Grid.Col>
                <Grid.Col span={10} >
                  <Group pt='5px' grow>
                    <Input 
                      onClick={Submit}
                      placeholder="Create Post"
                    />
                  </Group>
                </Grid.Col>
                <Grid.Col span={1}>
                  <Group pt='15px' grow>
                    <BsFillImageFill onClick={Submit} color='white' style={{cursor:'pointer'}} />
                    <FiLink onClick={Submit} color='white' style={{cursor:'pointer'}} />
                  </Group>
                </Grid.Col>
                {/* <Grid.Col span={1}>
                  <Group>
                    <FiLink />
                  </Group>
                </Grid.Col> */}
              </Grid>
            </Grid.Col>
          </Grid>
        </Container>
    </>
  )
}

export default Main