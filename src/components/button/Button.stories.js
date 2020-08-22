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
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"/>
        <Button.Section>
          <Button.Label>Click me</Button.Label>
          <Badge className="badge-pill" variant="light">Primary</Badge>
          <Badge className="badge-pill" variant="light">Primary</Badge> 
        </Button.Section>
</Button>;
export const withLink = () => <Button {...taskData} {...actionsData} to="/#">
        <Button.Label>Click me</Button.Label>
</Button>;
export const HoverLayer = () => <Button {...taskData} {...actionsData}  icon="arrow" className="p-3">
    <Button.Section>
        <Button.Label >Click me</Button.Label>
        <Button.Label>Day - 2 Instragram post</Button.Label>
    </Button.Section>
    <Button.HoverLayer >
        <Button.Label icon="academy">mark as done</Button.Label>
        <Button.Label icon="arrow">view details</Button.Label>
    </Button.HoverLayer>
</Button>;
