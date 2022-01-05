import React from 'react';

const RefReferencer = React.forwardRef((props, ref) => (
    <button ref={ref}>
        {props.children}
    </button>
));

export default RefReferencer;