import { Grid } from '@mantine/core'
import React from 'react'
import Sidebar from './Sidebar'

function Main() {
  return (
    <>
        <Grid>
          <Grid.Col span={2}>
              <Sidebar />
          </Grid.Col>
          <Grid.Col span={9}>

          </Grid.Col>
        </Grid>
    </>
  )
}

export default Main