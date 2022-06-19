import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helper/ProjectsList'
import './../styles/project.css'
function Project() {
  return (
    <div className='projects'>
      <h1>My Personal project</h1>
      <div className='projectList'>
        {ProjectList.map((item, index) => {
          return <ProjectItem key={index} image={item.image} name={item.name} skills={item.skills} />
        }
        )}
      </div>
    </div>
  )
}

export default Project