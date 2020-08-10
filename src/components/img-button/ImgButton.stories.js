import React from 'react';
import { action } from '@storybook/addon-actions';
import ImgButton from "./index";
import "./style.scss";

export default {
  component: ImgButton,
  title: 'Img Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test ImgButton',
  associated_slug: 'react',
};

export const Default = () => {
    return (
        <>
            <ImgButton { ...taskData } imgSrc={"https://www.pngkit.com/png/detail/5-53915_free-png-happy-black-person-png-images-transparent.png"}>Jhonson Smith</ImgButton>
            <ImgButton { ...taskData } imgSrc={"https://www.pngkit.com/png/detail/5-53915_free-png-happy-black-person-png-images-transparent.png"}>Jhonson Smith</ImgButton>
            <ImgButton { ...taskData } imgSrc={"https://www.pngkit.com/png/detail/5-53915_free-png-happy-black-person-png-images-transparent.png"}>Jhonson Smith</ImgButton>
            <ImgButton { ...taskData } imgSrc={"https://www.pngkit.com/png/detail/5-53915_free-png-happy-black-person-png-images-transparent.png"}>Jhonson Smith</ImgButton>
            <ImgButton { ...taskData } imgSrc={"https://www.pngkit.com/png/detail/5-53915_free-png-happy-black-person-png-images-transparent.png"}>Jhonson Smith</ImgButton>
        </>
    )
};