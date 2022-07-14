import { Grid,Group, Container,Input } from '@mantine/core'
import React from 'react'
import {BsFillImageFill} from 'react-icons/bs'
import {FiLink} from 'react-icons/fi'

function Main() {
  return (
    <>
      <Container ml='90px' p='20px' size={1400} style={{}}>
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
                      placeholder="Create Post"
                    />
                  </Group>
                </Grid.Col>
                <Grid.Col span={1}>
                  <Group pt='15px' grow>
                    <BsFillImageFill color='white'/>
                    <FiLink color='white'/>
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