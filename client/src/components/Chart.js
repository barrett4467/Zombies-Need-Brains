import React from "react";
import {Doughnut} from "react-chartjs-2";


class Chart extends React.Component{
    completed = 5;
    notCompleted = 15;
    constructor(props){
        super(props);
        this.state = {
           chartData: {
                datasets: [{
                    data: [this.completed, this.notCompleted ],
                    backgroundColor: [
                        '#29A506',
                        '#540173',
                    ]
                }],
                labels: ['Completed', 'Not Completed']
            }
        }
    }

    render (){
        return(
            <>
                <div className="chart">
                    <Doughnut
                        data={this.state.chartData}
                        height={300}
                        options= {{maintainAspectRatio: false}}
                    />
                    Chart
                </div>
            </>
        )
    }

}

export default Chart;

// var ctx = document.getElementById("myChart").getContext("2d");
// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },
//     options: {}
// });