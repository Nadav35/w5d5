class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
    
    let dates = new Date ();
    this.hours = dates.getHours();
    this.minutes = dates.getMinutes();
    this.seconds = dates.getSeconds();
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    } 
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds++;
    this.printTime();
    
  }
}

const clock = new Clock();
setInterval( () => {
  clock._tick();
}, 1000);