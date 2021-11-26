import React from 'react'
import { Input } from 'antd';

//props.name
const Email = ({name}) => {
    return (
        <div className="email">
            <h1>{name}</h1>
            <input  />
            <Input/>
        </div>
    )
}

export default Email
