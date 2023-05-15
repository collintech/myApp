

const data = [
    { year: 2022, title: 'Facebook', duration: '3 years', details: 'highly professional' },
    { year: 2019, title: "Amazon", duration: "1 year", details: 'Very good at what I do' },
    { year: 2017, title: "Netflix", duration: '2years', details: 'highly professional at my job' },
    { year: 2015, title: 'Google', duration: '2 years', details: 'I like the challenge because of my enthusiasm' },

]

export { data };

// function StopWatch() {
//     let startTime, endTime, running, duration = 0;

//     this.start = function () {
//         if (running) {
//             throw Error("Stopwatch has already started")
//         }
//         running = true;
//         startTime = new Date();
//     }

//     this.stop = function () {
//         if (!running) {
//             throw Error("Stopwatch has already stopped")
//         }
//         running = false;
//         endTime = new Date;
//         duration = ((endTime.getTime() - startTime.getTime()) / 1000);
//     }

//     this.reset = function () {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
//     }

//     Object.defineProperty(this, 'duration', {
//         get: function () {
//             return duration;
//         }
//     })
// }

// const time = new StopWatch();