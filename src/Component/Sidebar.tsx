import React from 'react'
import {AiOutlineClose,AiOutlinePlus,AiOutlineOrderedList} from 'react-icons/ai'
import {BsStar,BsStarFill,BsArrowUpRightCircle,BsCameraReels} from 'react-icons/bs'
import { Button, Grid, Group,Input,Text } from '@mantine/core'
import {MdPieChartOutline} from 'react-icons/md'
import {IoMdHome} from 'react-icons/io'
import {FaRegBell,FaReddit} from 'react-icons/fa'
import {BsCoin} from 'react-icons/bs'
import {RiShieldLine} from 'react-icons/ri'
import {IoShirtOutline} from 'react-icons/io5'
import {GiCrystalBall} from 'react-icons/gi'
import {GrEmptyCircle} from 'react-icons/gr'



function Sidebar() {
  return (
    <>
    <Grid grow p='10px' style={{background:'pink',height:'90vh',overflowY:'auto'}}> 
      <Grid.Col span={12} p='10px'>
        <Group position='center' align='apart'  grow>
          <Text style={{fontSize:'10px'}}>MY COMMUNITIES</Text>
          <Group style={{background:'cyan'}} position='right' align='right'>
            <AiOutlineClose />
          </Group>
        </Group>
      </Grid.Col>
      <Grid.Col span={12} p='10px'>
        <Input 
        placeholder='Filter'/>
      </Grid.Col>
      <Grid.Col span={12} p='10px'>
        <Text size='xs'>YOUR COMMUNITIES</Text>
      </Grid.Col>
      <Grid.Col span={12} p='10px'>
        <Group>
          <AiOutlinePlus />
          <Text>Create Community</Text>
        </Group>
      </Grid.Col>
      <Grid.Col span={12} p='10px'>
        <Text size='xs'>FOLLOWING</Text>
      </Grid.Col>
      <Grid.Col span={12} p='10px'>
        <Group align='apart' grow>
          <Grid>
            <Grid.Col span={9}>
              <Group>
                <Group>
                  <img width='20px'  style={{borderRadius:'50%'}} src='https://th.bing.com/th/id/R.1aeb1f1db8d15a0802ade1c3bb2ce86b?rik=y7Z1G5pI5mGHSA&riu=http%3a%2f%2ffc03.deviantart.net%2ffs71%2fi%2f2010%2f299%2f0%2fb%2fsmall_avatar_by_siegfried14-d31k8f6.jpg&ehk=SpMKifMGVnH5A5puPQmAP%2bvTchdIQ20Qo2hdBpV60vE%3d&risl=&pid=ImgRaw&r=0'/>
                </Group>
                <Text size='xs'>u/YourAccount</Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={2}>
              <Group position='right'>
                <BsStar />
              </Group>
            </Grid.Col>
          </Grid>
        </Group>
      </Grid.Col>
      <Grid.Col span={12} p='10px'>
        <Grid>
          <Grid.Col span={12}>
            <Text size='xs'>FEED</Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Group position='left' align='left' p='0 0 5px 0'>
              <Group>
                <IoMdHome />
              </Group>
              <Text size='sm'>Home</Text>
            </Group>
            <Group position='left' align='left' p='5px 0'>
              <Group>
                <BsArrowUpRightCircle />
              </Group>
              <Text size='sm'>Popular</Text>
            </Group>
            <Group position='left' align='left' p='5px 0'>
              <Group>
                <MdPieChartOutline />
              </Group>
              <Text size='sm'>All</Text>
            </Group>
            <Group position='left' align='left' p='5px 0'>
              <Group>
                <BsCameraReels />
              </Group>
              <Text size='sm'>Reddit Live</Text>
            </Group>
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col span={12}>
        <Grid>
          <Grid.Col span={12}>
            <Text size='xs'>OTHER</Text>
          </Grid.Col>
          <Grid.Col span={12}>
              <Group position='left' align='left' p='0 0 5px 0'>
                <Group>
                  <FaReddit />
                </Group>
              <Text size='sm'>User Settings</Text>
            </Group>
            <Group position='left' align='left' p='5px 0'>
              <Group>
                <FaReddit />
              </Group>
              <Text size='sm'>Messages</Text>
            </Group>
            <Group position='left' align='left' p='5px 0'>
              <Group>
                <AiOutlinePlus />
              </Group>
              <Text size='sm'>Create Posts</Text>
            </Group>
            <Group position='left' align='left' p='5px 0'>
              <Group>
                <AiOutlineOrderedList />
              </Group>
              <Text size='sm'>Top Communities</Text>
            </Group>
            <Group position='left' align='left' p='5px 0'>
              <Group>
                <BsCoin />
              </Group>
              <Text size='sm'>Coins</Text>
            </Group>
            <Group position='left' align='left' p='5px 0'>
              <Group>
                <RiShieldLine />
              </Group>
              <Text size='sm'>Premium</Text>
            </Group>
            <Group position='left' align='left' p='5px 0'>
              <Group>
                <IoShirtOutline />
              </Group>
              <Text size='sm'>Avatar</Text>
            </Group>
            <Group position='left' align='left' p='5px 0'>
              <Group>
                <GrEmptyCircle />
              </Group>
              <Text size='sm'>Talk</Text>
            </Group>
            <Group position='left' align='left' p='5px 0'>
              <Group>
                <GiCrystalBall />
              </Group>
              <Text size='sm'>Prediction</Text>
            </Group>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
    </>
  )
}

export default Sidebar
