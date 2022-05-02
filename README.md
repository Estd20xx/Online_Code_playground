# Text_Converter
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./image/icon.png">
    <link rel="stylesheet" href="./css/style.css">
    <title>Converter</title>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>TEXT CONVERTER</h1>
        </div>
        <div class="output">
            <div class="left">
                <h2>INPUT</h2>
                <textarea onkeyup="search()" id="data" cols="30" rows="10"></textarea>
            </div>
            <div class="right">
                <h2>OUTPUT</h2>
                <div id="OutputScreen"></div>
            </div>
        </div>
    </div>
    <script src="./js/main.js"></script>
</body>

</html>