import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"

const Wrapper = styled.div``
const CheckBoxWrapper = styled.div`
  position: relative;
`
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #242424;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const StyledCheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #ffffff;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

const Checkbox = ({ style, checked, onChange }) => {
    
    return <Wrapper style={style}>
        <CheckBoxWrapper>
            <StyledCheckBox  id="checkbox" type="checkbox" onChange={() => onChange && onChange(!checked)} />
            <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
    </Wrapper>
}
Checkbox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func
}
Checkbox.defaultTypes = {
    checked: false,
    onChange: null
}
export default Checkbox