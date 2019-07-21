import React, {Component} from 'react';
import {Timeline, TimelineBlip} from 'react-event-timeline'
import './../app.css';

class TimeLineEvent extends Component{
    render(){
        return(
            <div style={{height: '100vh',fontFamily: 'Roboto'}} className="shiftBottom">
                <Timeline>
                <TimelineBlip
                  title="Ankit Mahajan (25-July-2019)"
                  iconStyle={{marginLeft: 1,marginTop: 0}}
                  icon={<i />}
                  iconColor="#03a9f4"
                  style={{color: '#9c27b0'}}
                />
                <TimelineBlip title="Astik Tyagi (01-Aug-2019)" icon={<i />} iconColor="#6fba1c" />
                </Timeline>
            </div>
        );
    }
}

export default TimeLineEvent;