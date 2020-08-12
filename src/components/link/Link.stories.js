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
export const typeButton = () => <Link { ...taskData } url="/#" type="button" >Click me</Link>;
export const typeButtonWithImg = () => <Link { ...taskData } url="/#" type="button" imgSrc="https://www.pngkit.com/png/detail/5-53915_free-png-happy-black-person-png-images-transparent.png" sub="Primary" subBackground="primary">Jhonson Smith</Link>;
