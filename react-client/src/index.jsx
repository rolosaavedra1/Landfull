import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '1234 fake street, madeUp FK 12345',
      name: 'fakename Macfake',
      subscription: 'restaurant',
      donations: [
        {
          date: 'January',
          tubsDonated: 2,
          lbsDonated: 2 * 50,
          envImpactMethane: 100 * 0.086,
          envImpactCO2: 100 * 0.086 * 84,
          totalLbsDonated: 100,
          totalTubsDonated: 2,
          taxDeduction: 100 * 1.5,
          totalTaxDeduction: 100*1.5
        },
        {
          date: 'February',
          tubsDonated: 5,
          lbsDonated: 5 * 50,
          envImpactMethane: 250 * 0.086,
          envImpactCO2: 250 * 0.086 * 84,
          totalLbsDonated: 100 + 250,
          totalTubsDonated: 2 + 5,
          taxDeduction: 250 * 1.5,
          totalTaxDeduction: 100*1.5 + 250 * 1.5
        },
        {
          date: 'March',
          tubsDonated: 3,
          lbsDonated: 3 * 50,
          envImpactMethane: 150 * 0.086,
          envImpactCO2: 150 * 0.086 * 84,
          totalLbsDonated: 100 + 250 + 150,
          totalTubsDonated: 2 + 5 + 3,
          taxDeduction: 150 * 1.5,
          totalTaxDeduction: 100*1.5 + 250 * 1.5 + 150*1.5
        },
        {
          date: 'April',
          tubsDonated: 0,
          lbsDonated: 0 * 50,
          envImpactMethane: 0 * 0.086,
          envImpactCO2: 0 * 0.086 * 84,
          totalLbsDonated: 100 + 250 + 150,
          totalTubsDonated: 2 + 5 + 3,
          taxDeduction: 0,
          totalTaxDeduction: 100*1.5 + 250 * 1.5 + 150*1.5
        },
        {
          date: 'May',
          tubsDonated: 0,
          lbsDonated: 0 * 50,
          envImpactMethane: 0 * 0.086,
          envImpactCO2: 0 * 0.086 * 84,
          totalLbsDonated: 100 + 250 + 150,
          totalTubsDonated: 2 + 5 + 3,
          taxDeduction: 0,
          totalTaxDeduction: 100*1.5 + 250 * 1.5 + 150*1.5
        },
        {
          date: 'June',
          tubsDonated: 3,
          lbsDonated: 3 * 50,
          envImpactMethane: 150 * 0.086,
          envImpactCO2: 150 * 0.086 * 84,
          totalLbsDonated: 100 + 250 + 150 + 150,
          totalTubsDonated: 2 + 5 + 3 + 3,
          taxDeduction: 150*1.5,
          totalTaxDeduction: 100*1.5 + 250 * 1.5 + 150*1.5 + 150*1.5
        }
      ],
      labels: ['January', 'February', 'March',
        'April', 'May', 'June'],
      datasets: [
        {
          label: 'Tubs Donated',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'black',
          borderWidth: 2,
          data: [2, 4, 3, 0, 4, 5]
        },
        {
          label: 'Lbs donated',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'red',
          borderWidth: 2,
          data: [20, 40, 30, 0, 40, 50]
        },
        {
          label: 'Environmental Impact - Methane (lbs)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'yellow',
          borderWidth: 2,
          data: [20* 0.086, 40* 0.086, 30* 0.086, 0* 0.086, 40* 0.086, 50* 0.086]
        },
        {
          label: 'Environmental Impact - Carbon Dioxide (lbs)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'green',
          borderWidth: 2,
          data: [20* 0.086* 84, 40* 0.086* 84, 30* 0.086* 84, 0* 0.086* 84, 40* 0.086* 84, 50* 0.086* 84]
        },
        {
          label: 'Value of Tax Deductible Donation (USD)',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'orange',
          borderWidth: 2,
          data: [20*1.5, 40*1.5, 30*1.5, 0*1.5, 40*1.5, 50*1.5]
        }
      ]
    }
  }

  componentDidMount() {
    //console.log(this.state.donations);

  }

  render() {
    return (
      <div>
        <Line
          data={this.state}
          options={{
            title: {
              display: true,
              text: 'Donation Metrics',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));