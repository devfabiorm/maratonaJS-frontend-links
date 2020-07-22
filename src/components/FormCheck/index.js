import React, { useState, useEffect } from 'react';

const FormCheck = props => {

    const { data, name, label } = props;

    const [isChecked, setIsChecked] = useState(null);

    useEffect(() => {
        const initialValue = data && data[name] ? data[name] : undefined;
        if (initialValue !== undefined) setIsChecked(!!initialValue);
    }, [name, data]);

    const handleChange = e => {
        console.log(e.target.checked)
        if (isChecked === e.target.checked) return;

        setIsChecked(!!e.target.checked);
    }

    const inputProps = {
        name,
        type: 'checkbox',
        checked: !!isChecked,
        onChange: handleChange
    }

    return (
        <div className="form-group form-check">
            <label className="form-check-label">
                <input {...inputProps} />
                <span className="form-check-sign">{label}</span>
            </label>
        </div>
    );
}

export default FormCheck;