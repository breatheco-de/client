import React from 'react';
import Select,{components} from 'react-select';
import Icon from "../icon";

const DropdownIndicator = (
  props: ElementConfig<typeof components.DropdownIndicator>
) => {
  return (
    <components.DropdownIndicator {...props}>
        <Icon name="arrow-down" size='md' />
    </components.DropdownIndicator>
  );
};

const SmartDropdown = () => {
    const options = [{label:"Javascript", value:"javascript"},{label: "Python", value:"python"},{label: "React", value:"react"}, {label:"Bootstrap", value:"bootstrap"}, {label:"Html", value:"html"}, {label:"CSS",value:"css"}]

    return (
        <>
          <Select
        name="form-field-name"
        components={{ DropdownIndicator }}
        placeholder="Select your favorite"
        options={options}
        simpleValue
        />
        </>
    )
}

export default SmartDropdown; 