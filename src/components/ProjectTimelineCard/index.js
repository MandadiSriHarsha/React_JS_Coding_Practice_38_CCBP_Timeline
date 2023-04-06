import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = data

  return (
    <div className="project-card">
      <img
        src={imageUrl}
        alt={`project ${projectTitle}`}
        className="project-image"
      />
      <div className="project-heading-card">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="project-timestamp-card">
          <AiFillCalendar className="calendar" />
          <p className="time">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a
        className="project-link"
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
