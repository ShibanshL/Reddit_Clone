import React from 'react'
import {AiOutlineClose,AiOutlinePlus,AiOutlineOrderedList} from 'react-icons/ai'
import {BsStar,BsStarFill,BsArrowUpRightCircle,BsCameraReels} from 'react-icons/bs'
import { Button, Grid, Group,Input,Text, MediaQuery } from '@mantine/core'
import {MdPieChartOutline} from 'react-icons/md'
import {IoMdHome} from 'react-icons/io'
import {FaRegBell,FaReddit,FaRegDotCircle} from 'react-icons/fa'
import {BsCoin} from 'react-icons/bs'
import {RiShieldLine} from 'react-icons/ri'
import {IoShirtOutline} from 'react-icons/io5'
import {GiCrystalBall} from 'react-icons/gi'
import {GrEmptyCircle} from 'react-icons/gr'



function Sidebar() {
  return (
    <>
    <MediaQuery query="(max-width: 500px)" styles={{display:'none'}}>
      <Grid grow p='10px' mt='2px' style={{background:'#1a1a1b',height:'90vh',overflowY:'auto'}}> 
        <Grid.Col span={12} p='10px'>
          <Group position='center' align='apart'  grow>
            <Text color='white' style={{fontSize:'10px'}}>MY COMMUNITIES</Text>
            <Group style={{}} position='right' align='right'>
              <AiOutlineClose color='white'/>
            </Group>
          </Group>
        </Grid.Col>
        <Grid.Col span={12} p='10px'>
          <Input 
          placeholder='Filter'/>
        </Grid.Col>
        <Grid.Col span={12} p='10px'>
          <Text color='white' size='xs'>YOUR COMMUNITIES</Text>
        </Grid.Col>
        <Grid.Col span={12} p='10px'>
          <Group>
            <AiOutlinePlus color='white'/>
            <Text color='white'>Create Community</Text>
          </Group>
        </Grid.Col>
        <Grid.Col span={12} p='10px'>
          <Group align='apart' grow>
            <Grid>
              <Grid.Col span={9}>
                <Group>
                  <Group>
                    <img width='20px'  style={{clipPath:'circle(50%)'}} src='https://th.bing.com/th/id/R.0b6724f2e1deac8c980fbbee3f8eef02?rik=bWCtdZEK6Wyajg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f7%2f0%2f329845.jpg&ehk=8olme3cDzJrP4%2bXeWn8v8ejglVnuecfDhMBOPWUyaNc%3d&risl=&pid=ImgRaw&r=0'/>
                  </Group>
                  <Text color='white' size='xs'>u/Meme</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={2}>
                <Group position='right'>
                  <BsStar color='white'/>
                </Group>
              </Grid.Col>
            </Grid>
          </Group>
        </Grid.Col>
        <Grid.Col span={12} p='10px'>
          <Group align='apart' grow>
            <Grid>
              <Grid.Col span={9}>
                <Group>
                  <Group>
                    <img width='20px'  style={{clipPath:'circle(50%)'}} src='https://static.vecteezy.com/system/resources/previews/001/213/871/non_2x/breaking-news-background-design-vector.jpg'/>
                  </Group>
                  <Text color='white' size='xs'>u/News</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={2}>
                <Group position='right'>
                  <BsStar color='white'/>
                </Group>
              </Grid.Col>
            </Grid>
          </Group>
        </Grid.Col>
        <Grid.Col span={12} p='10px'>
          <Group align='apart' grow>
            <Grid>
              <Grid.Col span={9}>
                <Group>
                  <Group>
                    <img width='20px'  style={{clipPath:'circle(50%)'}} src='https://cdn.funcheap.com/wp-content/uploads/2017/12/sports1.png'/>
                  </Group>
                  <Text color='white' size='xs'>u/Sports</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={2}>
                <Group position='right'>
                  <BsStar color='white'/>
                </Group>
              </Grid.Col>
            </Grid>
          </Group>
        </Grid.Col>
        <Grid.Col span={12} p='10px'>
          <Text color='white' size='xs'>FOLLOWING</Text>
        </Grid.Col>
        <Grid.Col span={12} p='10px'>
          <Group align='apart' grow>
            <Grid>
              <Grid.Col span={9}>
                <Group>
                  <Group>
                    <img width='20px'  style={{borderRadius:'50%'}} src='https://th.bing.com/th/id/R.1aeb1f1db8d15a0802ade1c3bb2ce86b?rik=y7Z1G5pI5mGHSA&riu=http%3a%2f%2ffc03.deviantart.net%2ffs71%2fi%2f2010%2f299%2f0%2fb%2fsmall_avatar_by_siegfried14-d31k8f6.jpg&ehk=SpMKifMGVnH5A5puPQmAP%2bvTchdIQ20Qo2hdBpV60vE%3d&risl=&pid=ImgRaw&r=0'/>
                  </Group>
                  <Text color='white' size='xs'>u/SomeAccount</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={2}>
                <Group position='right'>
                  <BsStar color='white'/>
                </Group>
              </Grid.Col>
            </Grid>
          </Group>
        </Grid.Col>
        <Grid.Col span={12} p='10px'>
          <Grid>
            <Grid.Col span={12}>
              <Text color='white' size='xs'>FEED</Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Group position='left' align='left' p='0 0 5px 0'>
                <Group>
                  <IoMdHome color='white'/>
                </Group>
                <Text color='white' size='sm'>Home</Text>
              </Group>
              <Group position='left' align='left' p='5px 0'>
                <Group>
                  <BsArrowUpRightCircle color='white'/>
                </Group>
                <Text color='white' size='sm'>Popular</Text>
              </Group>
              <Group position='left' align='left' p='5px 0'>
                <Group>
                  <MdPieChartOutline color='white'/>
                </Group>
                <Text color='white' size='sm'>All</Text>
              </Group>
              <Group position='left' align='left' p='5px 0'>
                <Group>
                  <BsCameraReels color='white'/>
                </Group>
                <Text color='white' size='sm'>Reddit Live</Text>
              </Group>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={12}>
              <Text color='white' size='xs'>OTHER</Text>
            </Grid.Col>
            <Grid.Col span={12}>
                <Group position='left' align='left' p='0 0 5px 0'>
                  <Group>
                    <FaReddit color='white'/>
                  </Group>
                <Text color='white' size='sm'>User Settings</Text>
              </Group>
              <Group position='left' align='left' p='5px 0'>
                <Group>
                  <FaReddit color='white'/>
                </Group>
                <Text color='white' size='sm'>Messages</Text>
              </Group>
              <Group position='left' align='left' p='5px 0'>
                <Group>
                  <AiOutlinePlus color='white'/>
                </Group>
                <Text color='white' size='sm'>Create Posts</Text>
              </Group>
              <Group position='left' align='left' p='5px 0'>
                <Group>
                  <AiOutlineOrderedList color='white'/>
                </Group>
                <Text color='white' size='sm'>Top Communities</Text>
              </Group>
              <Group position='left' align='left' p='5px 0'>
                <Group>
                  <BsCoin color='white'/>
                </Group>
                <Text color='white' size='sm'>Coins</Text>
              </Group>
              <Group position='left' align='left' p='5px 0'>
                <Group>
                  <RiShieldLine color='white'/>
                </Group>
                <Text color='white' size='sm'>Premium</Text>
              </Group>
              <Group position='left' align='left' p='5px 0'>
                <Group>
                  <IoShirtOutline color='white'/>
                </Group>
                <Text color='white' size='sm'>Avatar</Text>
              </Group>
              <Group position='left' align='left' p='5px 0'>
                <Group>
                  <FaRegDotCircle color='white'/>
                </Group>
                <Text color='white' size='sm'>Talk</Text>
              </Group>
              <Group position='left' align='left' p='5px 0'>
                <Group>
                  <GiCrystalBall color='white'/>
                </Group>
                <Text color='white' size='sm'>Prediction</Text>
              </Group>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </MediaQuery>
    </>
  )
}

export default Sidebar
