import React from 'react';
import PropTypes from 'prop-types';


const Filter = ({ value, onChange }) => {
    return (
        <>
            <div>
                {/* <h2>телефонна книга :</h2> */}
                <label>
                    <span>знайди контакт за ім'ям тут</span>  
                    <input onChange={onChange} type="text" name="name" value={value}/>
                </label>
            </div>

        </>
    );
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

export default Filter;
