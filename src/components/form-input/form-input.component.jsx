import React from 'react';


import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (

    <div className="group">
        <input type="text" autoComplete="off" {...otherProps} onChange={(e)=>handleChange(e)} className="form-input" />
        {
            label ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)
                : null
        }
    </div>
)


export default FormInput;