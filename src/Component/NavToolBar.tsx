import { Button, Grid, Group,Input,Text } from '@mantine/core'
import React from 'react'
import {FaRedditAlien} from 'react-icons/fa'
import {IoMdHome} from 'react-icons/io'
import {FiSearch} from 'react-icons/fi'
import {BsArrowUpRightCircle} from 'react-icons/bs'
import {TbMessageCircle} from 'react-icons/tb'
import {BsCameraReels} from 'react-icons/bs'
import {FaRegBell} from 'react-icons/fa'
import {TbSpeakerphone} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'
import {MdPieChartOutline} from 'react-icons/md'
import {HiMenuAlt3} from 'react-icons/hi'
import {useStore} from '../State'
import { useNavigate, Link } from 'react-router-dom'

function NavToolBar() {

  const num = useStore((state:any) => state.num)
  const setNum = useStore((state:any) => state.setNum)

  let nav = useNavigate()
  const Home = () => {
    nav('/')
  }


  return (
    <>
      <Grid p='10px' pt='20px' style={{background:'#1a1a1b', borderBottom:'2px solid rgba(255,255,255,0.2)',position:'fixed', top:'0', width:'100%', zIndex:'1'}}>
        <Grid.Col style={{}} dir='row' span={3}>
          <Grid>
            <Grid.Col ml='-10px' mt='5px' p='10px' span={6} dir='row' style={{}}>
              <Group position='center' align='row'>
                <Group style={{}}>
                  <FaRedditAlien color='white' onClick={Home} style={{cursor:'pointer'}}/>
                </Group>
                <Text color='white'><Link to='/' style={{color:'white',textDecoration:'none'}}>Reddit</Link></Text>
              </Group>
            </Grid.Col>
            <Grid.Col p='10px' mt='5px' span={6} dir='row' style={{}}>
              <Group position='center' align='apart' grow>
                <Group position='left'>
                  <Group>
                    <IoMdHome color='white' onClick={Home} style={{cursor:'pointer'}}/>
                  </Group>
                  <Text><Link to='/' style={{color:'white',textDecoration:'none'}}>Home</Link></Text>
                </Group>
                <Group position='right'>
                  {num%2==0?
                  <HiMenuAlt3 onClick={() => {setNum()
                    console.log('Num = ',num)}} style={{cursor:'pointer'}} color='white'/>:<HiMenuAlt3 onClick={() => {setNum()
                      console.log('Num = ',num)}} color='#1a1a1b'/>}
                </Group>
              </Group>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col style={{}} span={3}>
          <Grid>
            <Grid.Col span={3}>
            </Grid.Col>
            <Grid.Col span={9}>
              <Input 
              icon={<FiSearch style={{cursor:'pointer'}}/>}
              placeholder="Search"/>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col style={{}} span={6}>
          <Grid grow>
            <Grid.Col span={6} style={{}}>
              <Grid p='10px' grow>
                  <Grid.Col span={6}>
                    <Group position='center' spacing='xs' grow style={{}}>
                      <BsArrowUpRightCircle color='white' style={{cursor:'pointer'}} />
                      <MdPieChartOutline color='white' style={{cursor:'pointer'}} />
                      <BsCameraReels color='white' style={{cursor:'pointer'}} />
                    </Group>
                  </Grid.Col>
                  <Grid.Col span={6} style={{}}>
                    <Group position='center' spacing='xs' grow>
                      <TbMessageCircle color='white' style={{cursor:'pointer'}} />
                      <FaRegBell color='white' style={{cursor:'pointer'}} />
                      <AiOutlinePlus color='white' style={{cursor:'pointer'}} />
                    </Group>
                  </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col style={{}} span={6}>
              <Grid>
                <Grid.Col style={{}} span={6}>
                  <Group>
                    <Group>
                      <TbSpeakerphone color='white'/>
                    </Group>
                    <Button variant="gradient" radius='xl' gradient={{ from: 'violet', to: 'pink' }}>Shop Avatar</Button>
                  </Group>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Grid>
                    <Grid.Col span={2}>
                      <Group mt='5px'>
                        <img width='22px' style={{clipPath:'circle(50%)'}} src='https://i.pinimg.com/originals/d2/ca/5d/d2ca5d5bcb84c894739c9862a49e7820.jpg'/>
                      </Group>
                    </Grid.Col>
                    <Grid.Col p='5px' span={10}>
                      <Grid>
                        <Grid.Col span={12}>
                          <Text color='white' size='sm'>MYacName</Text>
                        </Grid.Col>
                        <Grid.Col span={12}>
                          <Text color='white' mt='-15px' size='xs'>karma</Text>
                        </Grid.Col>
                      </Grid>
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default NavToolBar