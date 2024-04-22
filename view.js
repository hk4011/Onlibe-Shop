document.getElementById('incrementButton').addEventListener('click', function() {
    var counterElement = document.getElementById('counter');
    var currentCount = parseInt(counterElement.innerText.split(':')[1].trim());
    counterElement.innerText = 'Counter: ' + (currentCount + 1);
  });
  document.getElementById('dincrementButton').addEventListener('click', function() {
    var counterElement = document.getElementById('counter');
    var currentCount = parseInt(counterElement.innerText.split(':')[1].trim());
    counterElement.innerText = 'Counter: ' + (currentCount - 1);
  });