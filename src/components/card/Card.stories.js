import React from 'react';
import { action } from '@storybook/addon-actions';
import Card from './index';
import '../../styles.scss';
import { Badge } from "react-bootstrap";

export default {
    component: Card,
    title: 'Card',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const taskData = {
    id: '1',
    title: 'Test Card',
    associated_slug: 'react',
};

export const actionsData = {
    onChange: action('onChange'),
};

export const Default = () => <Card >
    <Card.Img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2842%29.jpg" variant="top" />
            <Card.Body>
                <Card.Title>Instagram Post</Card.Title>
                <Card.Text>
                    Very simple instagram simulation to understand the basics of CSS and HTML5 and how to use them together to create a website.
                </Card.Text>
    </Card.Body>
</Card>;

export const Grid = () => <div className="row">
   <div className="col-3">
<Card >
    <Card.Img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2842%29.jpg" variant="top" />
            <Card.Body>
                <Card.Title>Instagram Post</Card.Title>
                <Card.Text>
                    Very simple instagram simulation to understand the basics of CSS and HTML5 and how to use them together to create a website.
                </Card.Text>
    </Card.Body>
</Card>
</div>
<div className="col-3">
<Card >
    <Card.Img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2842%29.jpg" variant="top" />
            <Card.Body>
                <Card.Title>Instagram Post</Card.Title>
                <Card.Text>
                    Very simple instagram simulation to understand the basics of CSS and HTML5 and how to use them together to create a website.
                </Card.Text>
    </Card.Body>
</Card>
</div>
<div className="col-3">
<Card >
    <Card.Img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2842%29.jpg" variant="top" />
            <Card.Body>
                <Card.Title>Instagram Post</Card.Title>
                <Card.Text>
                    Very simple instagram simulation to understand the basics of CSS and HTML5 and how to use them together to create a website.
                </Card.Text>
    </Card.Body>
</Card>
</div>
<div className="col-3">
<Card >
    <Card.Img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2842%29.jpg" variant="top" />
            <Card.Body>
                <Card.Title>Instagram Post</Card.Title>
                <Card.Text>
                    Very simple instagram simulation to understand the basics of CSS and HTML5 and how to use them together to create a website.
                </Card.Text>
    </Card.Body>
</Card>
</div>
</div>