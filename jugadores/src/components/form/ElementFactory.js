import React from 'react';
import Select from '../select/Select';

const ElementFactory = {
    select: props => <Select {...props}/>,
    input: props => <input {...props} />,
    textarea: props => <textarea {...props} />
}

export default ElementFactory;