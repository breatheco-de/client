import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';
import '../../styles.scss';
import { Badge } from "react-bootstrap";

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

export const Default = () => <Button {...taskData} {...actionsData} icon="arrow" >
          <Button.Label>Click me</Button.Label>
</Button>;
export const withLink = () => <Button {...taskData} {...actionsData} to="/#">
        <Button.Label>Click me</Button.Label>
</Button>;
export const HoverLayer = () => <Button {...taskData} {...actionsData}  icon="arrow" className="p-2">
    <Button.Section>
        <Button.Label >Click me</Button.Label>
        <Button.Label>Day - 2 Instragram post</Button.Label>
    </Button.Section>
    <Button.HoverLayer >
        <Button.Label icon="academy" variant="bg-danger-light">mark as done</Button.Label>
        <Button.Label icon="arrow" variant="bg-secondary-light">view details</Button.Label>
    </Button.HoverLayer>
</Button>;
