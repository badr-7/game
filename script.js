// Variables
var paddleA = document.getElementById('paddleA');
var paddleB = document.getElementById('paddleB');
var ball = document.getElementById('ball');

var pong = document.getElementById('pong');
var pongRect = pong.getBoundingClientRect();

var paddleARect = paddleA.getBoundingClientRect();
var paddleBRect = paddleB.getBoundingClientRect();
var ballRect = ball.getBoundingClientRect();

var paddleAHeight = paddleARect.height;
var paddleBHeight = paddleBRect.height;

var paddleAY = paddleARect.y - pongRect.y;
var paddleBY = paddleBRect.y - pongRect.y;

var ballX = ballRect.x - pongRect.x;
var ballY = ballRect.y - pongRect.y;
var ballSpeedX = 1; // Adjust as needed
var ballSpeedY = 1; // Adjust as needed

// Game Loop
function update() {
  // Update paddle and ball positions

  // Move the ball
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Check collision with paddles
  if (
    ballX <= 10 ||
    ballX >= (pongRect.width - ballRect.width) - 10
  ) {
    ballSpeedX *= -1;
  }

  if (
    ballY <= 0 ||
    ballY >= pongRect.height - ballRect.height
  ) {
    ballSpeedY *= -1;
  }

  // Update paddle positions
  paddleA.style.top = paddleAY + 'px';
  paddleB.style.top = paddleBY + 'px';

  // Update ball position
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';

  requestAnimationFrame(update);
}

update(); // Start the game loop
