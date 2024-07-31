import React from 'react';
import MyInput from "./UI/input/MyInput.jsx";
import MySelect from "./UI/select/MySelect.jsx";

const PostFilter = ({filter, setFilter, options}) => {
    return (
        <div>
            <MyInput
                placeholder='Search...'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.query}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={options}
                defaultValue='Sort by ...'
            />
        </div>
    );
};

export default PostFilter;