// TempTaskList.js
import React from 'react';

function TempTaskList({ tasks }) {
    return (
        <div className='task-list'>
            <h3>Temporary Tasks</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TempTaskList;
