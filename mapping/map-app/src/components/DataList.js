import React from 'react';
import DataItem from './DataItem';

const DataList = (props) => {
    return (
        <div>
            {props.ourdata.map(item => {
                return (
                <DataItem mydata={item} />
                )
            })}
        </div>
    )
}

export default DataList;