import React from 'react'
import dayjs from 'dayjs'

function JobCard(props) 
{
    const skills = ["Javascript", "React", "Nodejs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff('2023-10-28','day');
  return (
    <div>
        <div>
            <div>
                <h1>Data Scientist</h1>
                <p>Full Time &#x2022; Fresher &#x2022; In-Office</p>
                <div>
                    {skills.map((skill) => (
                        <p>{skill}</p>
                    ))}
                </div>
            </div>
            <div>
                <p> Posted {diffInDays} ago</p>
                    <button>Apply</button>
            </div>
        </div>
    </div>
  )
}

export default JobCard