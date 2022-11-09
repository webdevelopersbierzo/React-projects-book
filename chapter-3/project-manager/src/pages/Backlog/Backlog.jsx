import React from 'react';
import Task from '../../components/Task/Task'
import useDataFetching from '../../hooks/useDataFetching';
import './Backlog.css';


function Backlog() {
   const [loading, data, error]= useDataFetching(
    'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks'
   )
  return (
    <div className='Backlog-wrapper'>
        <h2>Backlog</h2>
        <div className='Tasks-wrapper'>
            {loading || error ?(
                <span>{error || 'Loading....'}</span>
            ):
            (
                data.map((task)=>(
                    <Task
                        key={task.id}
                        title={task.title}
                        body= {task.body}
                    />
                ))
            )}
        </div>
    </div>
  )
}

export default Backlog