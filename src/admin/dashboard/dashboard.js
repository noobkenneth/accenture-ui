import React, { Component } from 'react';
import { withContext } from '../../AuthContext';
import axios from 'axios';

import './dashboard.css';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { StatsCard } from "../components/StatsCard/StatsCard.jsx";
import { Cards } from "../components/Card/Card.jsx";


import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, Sector, Cell,
  } from 'recharts';

const data = [
    {
      name: 'Jan', GeneralEnquiry: 400, PaymentIssue: 240, JobApplication: 240, Others:300
    },
    {
      name: 'Feb', GeneralEnquiry: 300, PaymentIssue: 139, JobApplication: 221,Others:300
    },
    {
      name: 'Mar', GeneralEnquiry: 200, PaymentIssue: 342, JobApplication: 229,Others:300
    },
    {
      name: 'Apr', GeneralEnquiry: 278, PaymentIssue: 390, JobApplication: 200,Others:300
    },
    {
      name: 'May', GeneralEnquiry: 189, PaymentIssue: 480, JobApplication: 218,Others:300
    },
    {
      name: 'Jun', GeneralEnquiry: 239, PaymentIssue: 380, JobApplication: 250,Others:300
    },
    {
      name: 'Jul', GeneralEnquiry: 349, PaymentIssue: 430, JobApplication: 210,Others:300
    },
    {
      name: 'Aug', GeneralEnquiry: 378, PaymentIssue: 240, JobApplication: 240,Others:300
    },
    {
      name: 'Sep', GeneralEnquiry: 300, PaymentIssue: 139, JobApplication: 221,Others:300
    },
    {
      name: 'Oct', GeneralEnquiry: 200, PaymentIssue: 250, JobApplication: 229,Others:300
    },
    {
      name: 'Nov', GeneralEnquiry: 278, PaymentIssue: 390, JobApplication: 200,Others:300
    },
    {
      name: 'Dec', GeneralEnquiry: 189, PaymentIssue: 480, JobApplication: 218,Others:300
    },
    {
      name: 'Jan', GeneralEnquiry: 239, PaymentIssue: 380, JobApplication: 250,Others:300
    },
    {
      name: 'Feb', GeneralEnquiry: 349, PaymentIssue: 430, JobApplication: 210,Others:300
    },
    {
      name: 'Mar', GeneralEnquiry: 243, PaymentIssue: 240, JobApplication: 240,Others:300
    },
    {
      name: 'Apr', GeneralEnquiry: 300, PaymentIssue: 139, JobApplication: 221,Others:300
    },
    {
      name: 'May', GeneralEnquiry: 200, PaymentIssue: 234, JobApplication: 229,Others:300
    },
    {
      name: 'Jun', GeneralEnquiry: 278, PaymentIssue: 390, JobApplication: 200,Others:300
    },
    {
      name: 'Jul', GeneralEnquiry: 189, PaymentIssue: 480, JobApplication: 218,Others:300
    },
    {
      name: 'Aug', GeneralEnquiry: 239, PaymentIssue: 380, JobApplication: 250,Others:300
    },
    {
      name: 'Sep', GeneralEnquiry: 349, PaymentIssue: 430, JobApplication: 210,Others:300
    },
    {
      name: 'Oct', GeneralEnquiry: 123, PaymentIssue: 240, JobApplication: 240,Others:300
    },
    {
      name: 'Nov', GeneralEnquiry: 300, PaymentIssue: 139, JobApplication: 221,Others:300
    },
    {
      name: 'Dec', GeneralEnquiry: 200, PaymentIssue: 236, JobApplication: 229,Others:300
    },
    {
      name: 'Jan', GeneralEnquiry: 278, PaymentIssue: 390, JobApplication: 200,Others:300
    },
    {
      name: 'Feb', GeneralEnquiry: 189, PaymentIssue: 480, JobApplication: 218,Others:300
    },
    {
      name: 'Mar', GeneralEnquiry: 239, PaymentIssue: 380, JobApplication: 250,Others:300
    },
    {
      name: 'Apr', GeneralEnquiry: 349, PaymentIssue: 430, JobApplication: 210,Others:300
    },
  ];

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            newRequests: '',
            unsolvedRequests: '',
            priorityRequests: '',
            urgentRequests: ''
        };

        this.retrieveDetails = this.retrieveDetails.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.retrieveDetails();
    }

    retrieveDetails() {
        var API_URL = 'http://10.12.185.9:3000/admin/fake/tix';
        return axios.get(API_URL)
            .then(({data}) => {
                this.setState({
                    name: data.name,
                    newRequests: data.new,
                    unsolvedRequests: data.unsolved,
                    priorityRequests: data.priority,
                    urgentRequests: data.urgent
                });
            })
    }

    render() {
        return (
            <div className="dashboard-container">
                <div className="tickets-info">
                  <Row>
                    <Col md={3}>
                      <Card style={{ width: '18rem'}}>
                        <Row>
                          <Col xs={5}>
                            <Image src={require("./light-bulb.png")} style={{ width: '50px'}} ></Image>
                          </Col>
                          <Col xs={7}>
                            <h4>New</h4>
                            <h2>100</h2>
                          </Col>
                        </Row>
                        <hr/>
                        <div>Updated in the last hour</div>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card style={{ width: '18rem'}}>
                        <Row>
                          <Col xs={5}>
                            <Image src={require("./line-chart.png")} style={{ width: '50px'}} ></Image>
                          </Col>
                          <Col xs={7}>
                            <h4>Urgent</h4>
                            <h2>50</h2>
                          </Col>
                        </Row>
                        <hr/>
                        <div>Last day</div>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card style={{ width: '18rem'}}>
                        <Row>
                          <Col xs={5}>
                            <Image src={require("./target.png")} style={{ width: '50px'}} ></Image>
                          </Col>
                          <Col xs={7}>
                            <h4>Unsolved</h4>
                            <h2>120</h2>
                          </Col>
                        </Row>
                        <hr/>
                        <div>Updated in the last hour</div>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card style={{ width: '18rem'}}>
                        <Row>
                          <Col xs={5}>
                            <Image src={require("./medal.png")} style={{ width: '50px'}} ></Image>
                          </Col>
                          <Col xs={7}>
                            <h4>Priority</h4>
                            <h2>100</h2>
                          </Col>
                        </Row>
                        <hr/>
                        <div>Updated now</div>
                      </Card>
                    </Col>
                  </Row>
                </div>
                <p>Welcome back {this.state.name}</p>
                <Row>
                    <Col>
                        <p>New Requests in the last hour</p>
                        <p>{this.state.newRequests}</p>
                    </Col>
                    <Col>
                        <p>Urgent Requests</p>
                        <p>{this.state.urgentRequests}</p>
                    </Col>
                    <Col>
                        <p>Unsolved Requests</p>
                        <p>{this.state.unsolvedRequests}</p>
                    </Col>
                    <Col>
                        <p>Priority Requests</p>
                        <p>{this.state.priorityRequests}</p>
                    </Col>
                </Row> 
                <Col md={12}>
                  <div className="fake-graph">
                    <Cards 
                        statsIcon="fa fa-history"
                        id="chartHours"
                        title="Tickets by Types"
                        category="month performance"
                        stats="Updated 3 minutes ago"
                        content={
                            <div className="ct-chart">
                            <LineChart
                                width={1150}
                                height={250}
                                data={data}

                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <br/>
                                <Tooltip />
                                <Legend style={{marginTop:"2000px"}}/>
                                <Line strokeWidth={2} type="monotone" dataKey="PaymentIssue" stroke="#004DCF"   />
                                <Line strokeWidth={2} type="monotone" dataKey="GeneralEnquiry" stroke="#008B02" />
                                <Line strokeWidth={2} type="monotone" dataKey="JobApplication" stroke="#FCCB00" />
                                <Line strokeWidth={2} type="monotone" dataKey="Others" stroke="#B80000" />
                              </LineChart>
                             </div>
                        }

                    />
                    </div>  
                  </Col>
            </div>
        )
    }
}

export default withContext(Dashboard);