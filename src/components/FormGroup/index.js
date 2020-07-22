import React, { useState, useEffect } from 'react';

const FormGroup = props => {

    const { data, type, name, label } = props;

    const [value, setValue] = useState('');

    useEffect(() => {
        const initialValue = data && data[name] ? data[name] : undefined;
        if (initialValue !== undefined) setValue(initialValue);
    }, [name, data]);

    const handleChange = e => {
        if (value === e.target.value) return;

        setValue(e.target.value);
    }

    const inputProps = {
        name,
        type,
        value: value || '',
        onChange: handleChange
    }

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input className="form-control" {...inputProps} />
        </div>
    );
}

export default FormGroup;