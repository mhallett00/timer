const args = process.argv.slice(2);
let numAlarms = [];

// pushes CL args into an array as seconds (in ms), skipping negatives.
args.forEach((arg) => {
  let num = Number(arg) * 1000;
  if (num >= 0) {
    numAlarms.push(num);
  }
});

// alarm function
const alarm = (numAlarms) => {

  for (const alarmDelay of numAlarms) {
    setTimeout(() => {
      process.stdout.write('\x07Buzz Buzz!\n');
    }, alarmDelay);
  }

};

alarm(numAlarms);