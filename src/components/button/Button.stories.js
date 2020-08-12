import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';
import '../../styles.scss'

export default {
  component: Button,
  title: 'Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Button',
  associated_slug: 'react',
};

export const actionsData = {
  onChange: action('onChange'),
};

export const Default = () => <Button { ...taskData } {...actionsData} arrow={true}>Click me</Button>;
export const withImg = () => <Button { ...taskData } {...actionsData} imgSrc={"https://www.pngkit.com/png/detail/5-53915_free-png-happy-black-person-png-images-transparent.png"}>Jhonson Smith</Button>;
export const withImgAndSub = () => <Button { ...taskData } {...actionsData} imgSrc={"https://www.pngkit.com/png/detail/5-53915_free-png-happy-black-person-png-images-transparent.png"} sub={"Principal"} >Jhonson Smith </Button>;
