<!DOCTYPE html>
<html>
    
    <head>
        <title>Cursus JavaScript</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
        
        <!-- Custom Styles -->
        <link rel="stylesheet" href="css/style.css">
    </head>
    
    <body>
        
        <div class="container">
            <h1>Cursus JavaScript <small>dag 3</small></h1>
            <h2><small>Memory Game</small></h2>

            <div id="intro">
                <div id="introtext"></div>
                <select id="select_fieldsize">
                    <option selected disabled>Select Field Size</option>
                    <option value="4">4 x 4</option>
                    <option value="5">5 x 5</option>
                    <option value="6">6 x 6</option>
                </select>
            </div>
            <div id="field">
                
            </div>
            <div id="result">
                <output id="tries"></output>
                <output id="succes"></output>
                <output id="timer"></output>
                <output id="finished"></output>
            </div>
            
        </div>
        
        <script src="js/cardSet.js"></script>
        <script src="js/memory.js"></script>
        
    </body>
    
</html>
