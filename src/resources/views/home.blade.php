<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
</head>
<body class="antialiased">
<div>
    <div class="container">
        <h1 class="title">データ解析アプリ</h1>
        <canvas id="chart">

        </canvas>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>
<script type="text/javascript" src="{{asset('/js/main.js')}}"></script>
</body>
</html>

<style>
    .container {
        margin: 0 auto;
        width: 80%;
    }
    .title {
        font-size: 20px;
        color: #0c5460;
    }
    .chart {
        background-color: #9fcdff;
        margin: 0 auto;
        width: 1000px;
        height: 700px;
    }
</style>
