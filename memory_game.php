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
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-6">
                    <h1>Cursus JavaScript <small>dag 3</small></h1>
                    <h2><small>Memory Game</small></h2>
                    
                    <output id="finished"></output>

                    <div id="intro">
                        <div id="introtext"></div>
                        <select id="select_fieldsize" class="form-control">
                            <option selected disabled>Select Field Size</option>
                            <option value="4">4 x 4</option>
                            <option value="5">5 x 5</option>
                            <option value="6">6 x 6</option>
                        </select>
                    </div>
                    <div id="field">

                    </div>
                </div>
                <div class="col-md-2"></div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-2">
                    <div id="result-col">
                        <div class="panel panel-default">
                            <div class="panel-heading text-center">Pogingen</div>
                            <div class="panel-body">
                                <output id="tries" class="output-text text-center">0</output>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div id="success-col">
                        <div class="panel panel-default">
                            <div class="panel-heading text-center">Score</div>
                            <div class="panel-body">
                                <output id="success" class="output-text text-center">0</output>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div id="timer-col">
                        <div class="panel panel-default">
                            <div class="panel-heading text-center">Timer</div>
                            <div class="panel-body">
                                <output id="timer" class="output-text text-center">-</output>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
        
        <script src="js/cardSet.js"></script>
        <script src="js/memory.js"></script>
        
    </body>
    
</html>
