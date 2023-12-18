let ctx = document.getElementById("chart");
let csv = new XMLHttpRequest();

csv.open("GET", "../csv/result.csv", true);
csv.send();
csv.onload = function() {
    if (csv.status === 200) {
        let csvArray = [];

        const lines = csv.responseText.split('\n');
        const dataArray = lines.map(line => line.split(','));

        // 日付と値を別々の配列に格納
        const dates = dataArray.map(item => item[0]);
        const values = dataArray.map(item => parseInt(item[1], 10));

        // 結果を出力
        console.log("日付配列:", dates);
        console.log("値配列:", values);

        let myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: '予測来館者数',
                        data: values,
                        borderColor: "rgba(255,0,0,1)",
                        backgroundColor: "rgba(0,0,0,0)",
                        yAxisID: 'YAxis'
                    },
                ],
            },
            options: {
                title: {
                    display: true,
                    text: '予測来館者数'
                },
                scales: {
                    yAxes: [{
                        id: 'YAxis',
                        position: 'left',
                        ticks: {
                            suggestedMax: 40,
                            suggestedMin: 0,
                            stepSize: 10,
                            callback: function(value){
                                return value + '人';
                            }
                        }
                    }]
                },
            }
        });
    } else {
        console.error('リクエストに失敗しました');
    }
};
