<!DOCTYPE html>
<html>
    
    <head>
        <title>Memory Game - JavaScript</title>
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
                <div class="col-md-12">
                    <h1>Memory Game <small>Javascript</small></h1>
                    
                    <hr>
                    
                    <output id="finished"></output>

                    <div id="intro" class="form-inline">
                        <div id="introtext"><h4>Selecteer het aantal kaarten voor je Memory Game</h4></div>
                        <select id="select_fieldsize" class="form-control">
                            <option selected disabled>Aantal kaarten...</option>
                            <option value="2">4 kaarten (2x2)</option>
                            <option value="3">8 kaarten (3x3)</option>
                            <option value="4">16 kaarten (4x4)</option>
                            <option value="5">24 kaarten (5x5)</option>
                            <option value="6">36 kaarten (6x6)</option>
                        </select>
                    </div>
                    <div id="board" class="cf">
                        <div id="field">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <hr>
                    <div id="result-col">
                        <div class="panel panel-default">
                            <div class="panel-heading text-center">Pogingen</div>
                            <div class="panel-body">
                                <output id="tries" class="output-text text-center">0</output>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <hr>
                    <div id="success-col">
                        <div class="panel panel-default">
                            <div class="panel-heading text-center">Score</div>
                            <div class="panel-body">
                                <output id="success" class="output-text text-center">0</output>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <hr>
                    <div id="timer-col">
                        <div class="panel panel-default">
                            <div class="panel-heading text-center">Timer</div>
                            <div class="panel-body">
                                <output id="timer" class="output-text text-center">0 : 00</output>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <a href="https://github.com/Onygo/js_memory_game"><button type="button" class="btn btn-primary">Source Code on GitHub</button></a>
                    <hr>
                    <?php include_once 'ads.php'; ?>
                </div>
            </div>
        </div>
        
        <script src="js/cardSet.js"></script>
        <script src="js/memory.js"></script>
        
    </body>
    
</html>
