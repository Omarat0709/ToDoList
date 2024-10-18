import React, {useEffect, useState} from 'react';

const taskComponent = () => {
    const [profile, setProfile] = useState({});

    function handleChange({target}) => {
        const {name,value} = target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]:value
        }));

    };

    return (
        <form>
            <input
            name = "task"
            value = {profile.taskname || ''}
            placeholder = "Current list of tasks"
            type = "text"
            onChange = {handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
export default taskComponent;