import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';
import '../../styles.scss';
import { Badge } from "react-bootstrap";
import {withKnobs, text, select,number} from '@storybook/addon-knobs';
import {icons} from "../icon/index";

export default {
    component: Button,
    title: 'Button',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
};

export const taskData = {
    id: '1',
    title: 'Test Button',
    associated_slug: 'react',
};

export const actionsData = {
    onChange: action('onChange'),
};

let options = {}
Object.keys(icons).forEach(k => options[k] = k)

let variants = ["primary", "success", "danger", "secondary", "primary-light", "success-light", "danger-light", "secondary-light"]


export const Default = () => <Button {...taskData} {...actionsData} icon={select("Icon", options, "arrow")} style={{width:text("Button Width", "30%"), padding:text("Button Padding", "10px") }} variant={select("Button Variant", variants, "primary")}>
          <Button.Label>{text("Label", "Click me")}</Button.Label>
</Button>;
export const withLink = () => <Button {...taskData} {...actionsData} icon={select("Icon", options, "arrow")} to="/#" variant={select("Button variant", variants, "primary")} style={{width:text("Button Width", "30%"), padding:text("Button Padding", "10px") }}>
        <Button.Label>{text("Label", "Click me")}</Button.Label>
</Button>;
export const HoverLayer = () => <Button {...taskData} {...actionsData}  icon={select("Icon", options, "arrow")} style={{width:text("Button Width", "30%"), padding:text("Button Padding", "10px") }} variant={select("Button Variant", variants, "primary")}>
    <Button.Section>
        <Button.Label >{text("Label", "Click me")}</Button.Label>
        <Button.Label>{text("Secondary Label", "Smaller title description")}</Button.Label>
    </Button.Section>
    <Button.HoverLayer >
        <Button.Label icon={select("Icon hover 1st Element", options, "check-mark")}  variant={`bg-${select("Hover Label 1st Variant", variants, "success-light")}`}>{text("Hover Label 1st", "mark as done")}</Button.Label>
        <Button.Label icon={select("Icon hover 2nd Element", options, "arrow")} variant={`bg-${select("Hover Label 2nd Variant", variants, "secondary-light")}`}>{text("Hover Label 2nd", "view details")}</Button.Label>
    </Button.HoverLayer>
</Button>;
