import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  const {courseTitle, description, duration, tagsList} = data
  return (
    <div className="course-card">
      <div className="course-heading-card">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="course-timestamp-card">
          <AiFillClockCircle className="clock" />
          <p className="days-text">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tags-list-card">
        {tagsList.map(eachtag => (
          <p className="tag-item">{eachtag.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
