import React from 'react';
import { action } from '@storybook/addon-actions';
import Link from "./index";
import "./style.scss";

export default {
  component: Link,
  title: 'Link',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Link',
  associated_slug: 'react',
};

export const Default = () => <Link { ...taskData } url="/#" >Click me</Link>;
