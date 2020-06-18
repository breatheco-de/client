import React from "react"
import PropTypes from 'prop-types'
import { IconContext } from "react-icons"
import { IoLogoGithub } from "react-icons/io"
import { FcCollaboration, FcHome, FcGraduationCap, FcSettings } from "react-icons/fc"

const icons = {
    'github': IoLogoGithub,
    'collaboration': FcCollaboration,
    'home': FcHome,
    'academy': FcGraduationCap,
    'settings': FcSettings,
}
const sizes = {
    medium: '130%'
}
const Icon = ({ name, size }) => {
    //only the specific icons
    if(icons[name] === undefined) return "?";

    const TheIcon = icons[name]
    return <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
    <div>
        <TheIcon style={{ fontSize: sizes[size] }}  />
    </div>
    </IconContext.Provider>
}
Icon.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
};
Icon.defaultProps = {
   size: 'medium',
   name: null,
};
export default Icon