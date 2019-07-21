import React, {Component} from 'react';
import {Card,
  CardColumns, 
  CardBody, 
  CardTitle, 
  CardText, 
  Button} from 'reactstrap';
import './../app.css';


class CardCompoennt extends Component{
    constructor(props){
        super(props);
        this.state = {
            rrData: [
                {
                    'rrNo': 767676,
                    'rrDesc': 'CTRLTECH-908978 (Uncommitted) ANTS iep changes [allTests]',
                    'rrStatus': 'failed',
                    'testCases': '980',
                    'totalTestCases': '1162',
                },
                {
                    'rrNo': 898989,
                    'rrDesc': 'CTRLTECH-908978 (committed) ANTS iep changes [allTests]',
                    'rrStatus': 'passed',
                    'testCases': '980',
                    'totalTestCases': '1162',
                },
                {
                    'rrNo': 767676,
                    'rrDesc': 'CTRLTECH-908978 (Uncommitted) ANTS iep changes [allTests]',
                    'rrStatus': 'failed',
                    'testCases': '980',
                    'totalTestCases': '1162',
                },
                {
                    'rrNo': 898989,
                    'rrDesc': 'CTRLTECH-908978 (committed) ANTS iep changes [allTests]',
                    'rrStatus': 'passed',
                    'testCases': '980',
                    'totalTestCases': '1162',
                },
                {
                    'rrNo': 767676,
                    'rrDesc': 'CTRLTECH-908978 (Uncommitted) ANTS iep changes [allTests]',
                    'rrStatus': 'running',
                    'testCases': '980',
                    'totalTestCases': '1162',
                },
                {
                    'rrNo': 898989,
                    'rrDesc': 'CTRLTECH-908978 (committed) ANTS iep changes [allTests]',
                    'rrStatus': 'passed',
                    'testCases': '980',
                    'totalTestCases': '1162',
                },
            ],
        }
    }

    displayRRComponent(){
        return this.state.rrData.map((val, key) => (
            val.rrStatus === 'failed' ? (
                <Card key={key} body outline color="danger">
                    <CardTitle>{val.rrNo}</CardTitle>
                    <hr />
                    <CardBody>
                    <CardText>{val.rrDesc}</CardText>
                    <Button>View RR</Button>
                    </CardBody>
                </Card>
            ) : (
                val.rrStatus === 'passed' ? (
                    <Card body outline color="success" key={key}>
                    <CardTitle>{val.rrNo}</CardTitle>
                    <hr />
                    <CardBody>
                    <CardText>{val.rrDesc}</CardText>
                    <Button>View RR</Button>
                    </CardBody>
                </Card>
                ) : (
                    <Card body outline color="warning" key={key}>
                    <CardTitle>{val.rrNo}</CardTitle>
                    <hr />
                    <CardBody>
                    <CardText>{val.rrDesc}</CardText>
                    <Button>View RR</Button>
                    </CardBody>
                </Card>
                )
            )
        ));
    }

    render(){
        return(
            <CardColumns className="shiftBottom">
                {this.displayRRComponent()}
            </CardColumns>
        );
    }
};

export default CardCompoennt;