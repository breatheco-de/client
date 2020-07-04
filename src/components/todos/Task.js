import React from 'react';

const Task = ({ title, associated_slug }) => {
  return (
    <div>
      {title} {associated_slug}
    </div>
  );
}

export default Task