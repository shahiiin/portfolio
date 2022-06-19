import React from 'react'
import '../styles/project.css'
function ProjectItem({ image, name, skills }) {

  const styles = {
    root: {
      backgroundImage: `url(${image})`,
    },
  }
  return (
    <div className='projectItem'>
      <div style={styles.root} className='bgImage' />
      <h1>{name}</h1>
      <p>{skills}</p>
    </div>
  )
}

export default ProjectItem