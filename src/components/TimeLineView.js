import React, {Component} from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import './../app.css';

class TimeLineView extends Component{
    render(){
        return(
            <div>
                <h5>Release Cordinator</h5>
                <hr />
                <Timeline lineColor={'#ddd'} className="lessPadding">
                    <TimelineItem key="001" dateText="25 Jul" style={{ color: '#e86971'}} dateInnerStyle={{fontSize: '12px'}} >
                        <h5 style={{fontSize: '17px'}}>Ankit Mahajan</h5>
                    </TimelineItem>
                    <TimelineItem key="002" dateText="25 Jul" dateInnerStyle={{fontSize: '12px'}} >
                        <h5 style={{fontSize: '17px'}}>SSSSSSS</h5>
                    </TimelineItem>
                    <TimelineItem key="003" dateText="25 Jul" dateInnerStyle={{fontSize: '12px'}} >
                        <h5 style={{fontSize: '17px'}}>ABC</h5>
                    </TimelineItem>
                </Timeline>
            </div>
        );
    }
}

export default TimeLineView;