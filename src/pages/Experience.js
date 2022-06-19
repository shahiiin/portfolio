import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='September 2019 - Present'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<i className='fas fa-graduation-cap'></i>}
        >
          <h3 className='vertical-timeline-element-title'>start to learning Html and Css</h3>
          <p>html and css deploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience