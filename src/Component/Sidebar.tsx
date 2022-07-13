import React from 'react'
import {AiOutlineClose,AiOutlinePlus} from 'react-icons/ai'
import {BsStar,BsStarFill,BsArrowUpRightCircle,BsCameraReels} from 'react-icons/bs'
import { Button, Grid, Group,Input,Text } from '@mantine/core'
import {MdPieChartOutline} from 'react-icons/md'
import {IoMdHome} from 'react-icons/io'



function Sidebar() {
  return (
    <>
    <Grid grow p='10px' style={{background:'pink'}}> 
      <Grid.Col span={12} p='10px'>
        <Group position='center' align='apart'  grow>
          <Text size='xs'>MY COMMUNITIES</Text>
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
            <Group position='left' align='left' >
              <IoMdHome />
              <Text size='sm'>Home</Text>
            </Group>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
    </>
  )
}

export default Sidebar
