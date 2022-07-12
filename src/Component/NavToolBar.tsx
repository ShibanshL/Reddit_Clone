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

function NavToolBar() {
  return (
    <>
      <Grid p='10px'>
        <Grid.Col style={{background:'red'}} dir='row' span={2}>
          <Grid>
            <Grid.Col p='10px' span={6} dir='row' style={{background:'pink'}}>
              <Group position='center' align='row'>
                <Group style={{}}>
                  <FaRedditAlien style={{cursor:'pointer'}}/>
                </Group>
                <Text>Reddit</Text>
              </Group>
            </Grid.Col>
            <Grid.Col p='10px' span={6} dir='row' style={{background:'cyan'}}>
              <Group position='center' align='row'>
                <Group>
                  <IoMdHome style={{cursor:'pointer'}}/>
                </Group>
                <Text>Home</Text>
              </Group>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col style={{background:'blue'}} span={4}>
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
        <Grid.Col style={{background:'green'}} span={6}>
          <Grid grow>
            <Grid.Col span={6} style={{background:'cyan'}}>
              <Grid p='10px' grow>
                  <Grid.Col span={6}>
                    <Group position='center' spacing='xs' grow style={{ borderRight:'2px solid black'}}>
                      <BsArrowUpRightCircle style={{cursor:'pointer'}} />
                      <MdPieChartOutline style={{cursor:'pointer'}} />
                      <BsCameraReels style={{cursor:'pointer'}} />
                    </Group>
                  </Grid.Col>
                  <Grid.Col span={6} style={{background:'lightgreen'}}>
                    <Group position='center' spacing='xs' grow>
                      <TbMessageCircle style={{cursor:'pointer'}} />
                      <FaRegBell style={{cursor:'pointer'}} />
                      <AiOutlinePlus style={{cursor:'pointer'}} />
                    </Group>
                  </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={6}>
            <Button variant="gradient" radius='xl' gradient={{ from: 'violet', to: 'pink' }}>Shop Avatar</Button>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default NavToolBar