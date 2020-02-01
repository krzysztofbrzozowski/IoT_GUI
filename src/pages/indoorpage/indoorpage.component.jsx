import React from 'react';

import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { CustomChartArea, CustomChartBar } from '../../components/chart/chart.component';

import { temperatureOptionsA, humidityOptionsA, pressureOptionsA } from '../../components/chart/charts-settings-area.component';
import { temperatureOptionsB, humidityOptionsB, pressureOptionsB } from '../../components/chart/charts-settings-bar.component';

import CustomButtonBar from '../../components/buttons-bar/buttons-bar.component';

import CustomModal from '../../components/modal/modal';

class IndoorPage extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      errorMessage: '',
      temperature: {
        options: temperatureOptionsA,
        series: [
          {
            name: 'temperature',
            data: []
          }
        ]
      },

      humidity: {
        options: humidityOptionsA,
        series: [
          {
            name: 'humidity',
            data: []
          }
        ]
      },
      pressure: {
        options: pressureOptionsA,
        series: [
          {
            name: 'pressure',
            data: []
          }
        ]
      },
      chartType: 'area'
    };
  }

  getData = timedelta => {
    axios
      .get(`http://your-api-addres/sub-address/sensor_x/${timedelta}`, {
        headers: { Authorization: this.props.isAuthenticated ? `Token ${this.props.token}` : '' }
      })
      .then(res => {
        if (res.data.message) {
          this.setState({ hasError: true, errorMessage: res.data.message });
        } else {
          var tmpData = { temperature: [], humidity: [], pressure: [] };
          res.data.map(val => tmpData.temperature.push([new Date(val.timestamp).getTime(), val.temperature]));
          res.data.map(val => tmpData.humidity.push([new Date(val.timestamp).getTime(), val.humidity]));
          res.data.map(val => tmpData.pressure.push([new Date(val.timestamp).getTime(), val.pressure]));

          timedelta === 1
            ? this.setState({
                temperature: {
                  options: temperatureOptionsA,
                  series: [
                    {
                      name: 'temperature',
                      data: tmpData.temperature
                    }
                  ]
                },

                humidity: {
                  options: humidityOptionsA,
                  series: [
                    {
                      name: 'humidity',
                      data: tmpData.humidity
                    }
                  ]
                },
                pressure: {
                  options: pressureOptionsA,
                  series: [
                    {
                      name: 'pressure',
                      data: tmpData.pressure
                    }
                  ]
                },
                chartType: 'area'
              })
            : this.setState({
                temperature: {
                  options: temperatureOptionsB,
                  series: [
                    {
                      name: 'temperature',
                      data: tmpData.temperature
                    }
                  ]
                },

                humidity: {
                  options: humidityOptionsB,
                  series: [
                    {
                      name: 'humidity',
                      data: tmpData.humidity
                    }
                  ]
                },
                pressure: {
                  options: pressureOptionsB,
                  series: [
                    {
                      name: 'pressure',
                      data: tmpData.pressure
                    }
                  ]
                },
                chartType: 'bar'
              });
        }
      })
      .catch(err => {
        this.setState({ hasError: true, errorMessage: err.message });
      });
  };

  componentWillMount() {
    this.getData(1);
  }

  render() {
    if (this.state.hasError) {
      return <CustomModal errorMessage={this.state.errorMessage} />;
    } else {
      return (
        <div>
          {this.state.chartType === 'area' ? (
            <Container>
              <Row style={{ marginTop: '50px' }}>
                <Col md={12}>
                  <Row className='justify-content-center'>
                    <CustomButtonBar callback_0={this.getData} callback_0_arg={1} callback_1={this.getData} callback_1_arg={10} />
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: '50px' }}>
                <Col md={12}>
                  <CustomChartArea options={this.state.temperature.options} series={this.state.temperature.series} />
                </Col>
              </Row>
              <Row style={{ marginTop: '50px' }}>
                <Col md={12}>
                  <CustomChartArea options={this.state.humidity.options} series={this.state.humidity.series} />
                </Col>
              </Row>
              <Row style={{ marginTop: '50px' }}>
                <Col md={12}>
                  <CustomChartArea options={this.state.pressure.options} series={this.state.pressure.series} />
                </Col>
              </Row>
            </Container>
          ) : (
            <Container>
              <Row style={{ marginTop: '50px' }}>
                <Col md={12}>
                  <Row className='justify-content-center'>
                    <CustomButtonBar callback_0={this.getData} callback_0_arg={1} callback_1={this.getData} callback_1_arg={10} />
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: '50px' }}>
                <Col md={12}>
                  <CustomChartBar options={this.state.temperature.options} series={this.state.temperature.series} />
                </Col>
              </Row>
              <Row style={{ marginTop: '50px' }}>
                <Col md={12}>
                  <CustomChartBar options={this.state.humidity.options} series={this.state.humidity.series} />
                </Col>
              </Row>
              <Row style={{ marginTop: '50px' }}>
                <Col md={12}>
                  <CustomChartBar options={this.state.pressure.options} series={this.state.pressure.series} />
                </Col>
              </Row>
            </Container>
          )}
        </div>
      );
    }
  }
}

export default IndoorPage;
