import React from 'react';
import { action } from '@storybook/addon-actions'
import MenuGuide from './index'
import Button from '../button'
import { Badge } from "react-bootstrap"
import Indicator from '../Indicator'

export default {
  component: MenuGuide,
  title: 'MenuGuide',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const taskData = {
  id: '1',
  heading: 'Geekforce',
  associated_slug: 'react',
}

export const actionsData = {
  onChange: action('onChange'),
}

export const Default = () => <MenuGuide { ...taskData } {...actionsData}>
    <MenuGuide.dashboard>
        <Indicator 
          history={[97,63,35,49,97,63,35,49,44,35,25,10,63,35,49]}
          color="#cdedca"
          width="calc(50% - 5px)"
        >
          <h4>Pending</h4>
          <h3>12</h3>
        </Indicator>
        <Indicator
          history={[97,63,35,49,97,63,35,49,44,35,25,10,63,35,49]}
          color="#cdedca"
          width="calc(50% - 5px)"
        >
          <h4>Done</h4>
          <h3>25</h3>
        </Indicator>
    </MenuGuide.dashboard>
    <MenuGuide.buttons>
      <Button>Tasks <Badge variant="light">3</Badge></Button>
      <Button>Projects</Button>
    </MenuGuide.buttons>
</MenuGuide>