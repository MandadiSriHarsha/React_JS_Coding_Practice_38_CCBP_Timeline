import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const getItems = () => {
    const items = timelineItemsList.map(eachtimeline => ({
      title: eachtimeline.title,
    }))
    return items
  }

  return (
    <div className="timeline-view-container">
      <nav className="timeline-navbar fixed-top">
        <h1 className="navbar-heading">
          MY JOURNEY OF <span>CCBP 4.0</span>
        </h1>
      </nav>
      <div className="chrono-container">
        <Chrono
          items={getItems()}
          mode="VERTICAL_ALTERNATING"
          twoColumns
          theme={{
            primary: 'blue',
            secondary: 'white',
            cardForeColor: 'violet',
            titleColor: 'black',
            titleColorActive: 'blue',
          }}
        >
          {timelineItemsList.map(eachlist => {
            if (eachlist.categoryId === 'COURSE') {
              return <CourseTimelineCard key={eachlist.id} data={eachlist} />
            }
            return <ProjectTimelineCard key={eachlist.id} data={eachlist} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
