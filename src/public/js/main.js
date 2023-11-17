var ctx = document.getElementById("chart");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        datasets: [
            {
                label: '予測降水量',
                data: [10, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0],
                borderColor: "rgba(255,0,0,1)",
                backgroundColor: "rgba(0,0,0,0)",
                yAxisID: 'rainfallYAxis'
            },
            {
                label: '予測来館者数',
                data: [150, 160, 230, 250, 200, 290, 180, 160, 180, 240, 220, 250],
                borderColor: "rgba(0,0,255,1)",
                backgroundColor: "rgba(0,0,0,0)",
                yAxisID: 'visitorYAxis'
            }
        ],
    },
    options: {
        title: {
            display: true,
            text: '予測降水量と予測来館者数'
        },
        scales: {
            yAxes: [{
                id: 'rainfallYAxis', // 予測降水量用のyAxis
                position: 'left', // 左側に配置
                ticks: {
                    suggestedMax: 40,
                    suggestedMin: 0,
                    stepSize: 10,
                    callback: function(value, index, values){
                        return value + 'mm'; // 降水量の単位を追加
                    }
                }
            },
            {
                id: 'visitorYAxis', // 予測来館者数用のyAxis
                position: 'right', // 右側に配置
                ticks: {
                    suggestedMax: 300, // 来館者数の最大値
                    suggestedMin: 0, // 来館者数の最小値
                    stepSize: 50,
                    callback: function(value, index, values){
                        return value + '人'; // 来館者数の単位を追加
                    }
                }
            }]
        },
    }
});
