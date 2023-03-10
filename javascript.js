const stopwatchHour = document.querySelector('.watchHour')
const stopwatchMinut = document.querySelector('.watchMinut')
const stopwatchSekund = document.querySelector('.watchSekund')
const stopwatchStart = document.querySelector('.start')
const stopwatchPause = document.querySelector('.pause')
const stopwatchReset = document.querySelector('.reset')

stopwatchStart.addEventListener('click', function () {
  interval = setInterval(() => {
    stopwatch()
   }, 1000);
})
stopwatchPause.addEventListener('click', function () {
    clearInterval(interval)
})
stopwatchReset.addEventListener('click', function () {
    stopwatchSekund.innerHTML = 0
    stopwatchMinut.innerHTML = 0
    stopwatchHour.innerHTML = 0
    count = 0
    clearInterval(interval)
})


let count = 0
function stopwatch() {
    count++
   if (count < 60) {
    stopwatchSekund.innerHTML = count
   }
   if (count > 59) {
    stopwatchMinut.innerHTML++
    count = 0 
    stopwatchSekund.innerHTML = count
    
   }
   if (stopwatchMinut.innerHTML > 59) {
    stopwatchHour.innerHTML++
    stopwatchMinut.innerHTML = 0
   }
}

