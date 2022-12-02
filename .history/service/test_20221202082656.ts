// let time = new Date;

// let time2 = new Date;

// console.log(time2.getTime());
// console.log(time.getTime());

let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);
