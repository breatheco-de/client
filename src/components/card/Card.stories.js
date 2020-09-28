import React from 'react';
import { action } from '@storybook/addon-actions';
import Card from './index';
import '../../styles.scss';
import { Badge } from "react-bootstrap";
import Link from "../link";

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

export const Default = () => <Card onClick={() => alert("Its working")}>
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
        <Card variant="dark" >
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
        <Card variant="danger" >
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
        <Card variant="success">
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
        <Card variant="primary-light">
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

export const HorizontalCard = () => <Card display="horizontal" variant="danger-light" >
    <Card.Img src="https://cdn4.iconfinder.com/data/icons/unigrid-security/58/013_fingerprint_finger_print_security_touch_id_identity_access_key_lock-512.png" />
    <Card.Text>
        It is not recommended to unlock day 12 yet because the cohort is at day 5, you can still unlock this day.
    </Card.Text>
    <Link url="/#">unlock day</Link>
</Card>;

export const withoutImg = () => <Card >
    <Card.Body>
        <Card.Title>Instagram Post</Card.Title>
        <Card.Text>
            Very simple instagram simulation to understand the basics of CSS and HTML5 and how to use them together to create a website.
                </Card.Text>
    </Card.Body>
</Card>;