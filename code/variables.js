canvas = document.getElementById('game');
context = canvas.getContext('2d');

//general variables
var state = 0;
var mouseX = 0;
var mouseY = 0;

//state = 0 (title)
var titleOver = false;
var titleCreditOver = false;
var titleInstructOver = false;

//state = 2 (gameScreen)
var paused = false;

//state = 3 (credits)
var overCreditBack = false;

//state = 4 (instrtuctions)
var overInstructBack = false;

//ui events
var mouseClicked = false;

var updateObjects = new Array();
var drawObjects = new Array();
var collisionObjects = new Array();


var SILTRATE = .05;
var SILTSPEED = 1.9
var SPEED = 5;
var SLOWSPEED = 2;
var SUNLIGHTSPEED = 2;
var PLAYERENERGYRATE = -.06;
var PLAYERSTARTENERGY = 100;
var REEFENERGYRATE = -5;
var REEFSTARTENERGY = 100;
var MAXPLAYERENERGY = 100;
var MAXREEFENERGY = 100;
var SUNLIGHTVALUE = 3;
var NUTRIENTVALUE = 1;
var REEFGROWTHRATE = canvas.width / 100;

var growthCounter = 0;
var GROWTHTIMER = 20;

var reefEnergy = REEFSTARTENERGY;
var upperBoundary = canvas.height * 2 / 3;
var lowerBoundary = canvas.height;
var rightBoundary = canvas.width;
var leftBoundary = canvas.width / 2;
var score = 0;
var alive = true;

var up = false;
var left = false;
var right = false;
var down = false;
