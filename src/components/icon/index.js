import React from "react"
import PropTypes from 'prop-types'
import { IconContext } from "react-icons"
import { IoLogoGithub } from "react-icons/io"
import { FcCollaboration, FcHome, FcGraduationCap, FcSettings, FcBriefcase, FcButtingIn } from "react-icons/fc";
import { FiArrowRightCircle } from "react-icons/fi";
export const icons = {
    'github': IoLogoGithub,
    'collaboration': FcCollaboration,
    'home': FcHome,
    'academy': FcGraduationCap,
    'settings': FcSettings,
    'profile': FcButtingIn,
    'briefcase': FcBriefcase,
    'right-arrow': FiArrowRightCircle
}
export const sizes = {
    xs: '90%',
    md: '130%',
    lg: '200%'
}
const Icon = ({ name, size, color, ...rest }) => {

    //only the specific icons
    if(icons[name] === undefined) return "?";

    const TheIcon = icons[name]
    return <IconContext.Provider value={{ color, className: "global-class-name" }}>
    <>
        <TheIcon {...rest} style={{ fontSize: sizes[size] }}  />
    </>
    </IconContext.Provider>
}
Icon.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
};
Icon.defaultProps = {
   size: 'md',
   name: null,
   color: 'blue',
};
export default Icon