'user strict'

{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let startTime;
    let timeoutId;
    let elapsedTime = 0;

    function countUp() {
        const d = new Date(Date.now() - startTime + elapsedTime);
        const m = d.getMinutes();
        const s = d.getSeconds();
        const ms = d.getMilliseconds();
        timer.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}:${String(ms).padStart(3, '0')}`;
        console.log(Date.now() - startTime + elapsedTime);
        timeoutId = setTimeout(() => {
            countUp()
        }, 10);
    }

    let alertmsg = function() {
        alert("3秒経過");
    }

    let alertmsg = function() {
        alert("3秒経過");
    }






    function timerSetInit() {
        start.classList.remove('inactive');
        stop.classList.add('inactive');
        reset.classList.add('inactive');
    }

    function timerSetRunning() {
        start.classList.add('inactive');
        stop.classList.remove('inactive');
        reset.classList.add('inactive');
    }

    function timerSetStoping() {
        start.classList.remove('inactive');
        stop.classList.add('inactive');
        reset.classList.remove('inactive');
    }

    timerSetInit();


    start.addEventListener('click', () => {
        if (start.classList.contains('inactive')) {
            return;
        }
        setTimeout(alertmsg, 3000);
        startTime = Date.now();
        countUp();
        timerSetRunning();
    });

    stop.addEventListener('click', () => {
        if (stop.classList.contains('inactive')) {
            return;
        }
        clearTimeout(timeoutId);
        elapsedTime += Date.now() - startTime;
        timerSetStoping();
    });

    reset.addEventListener('click', () => {
        if (reset.classList.contains('inactive')) {
            return;
        }
        timer.textContent = '00:00:00';
        elapsedTime = 0;
        timerSetInit();
    });

    // console.log(alert("alertです"));

}