//Daily Challenge : Creating Objects

//In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.
//Create a class named Video. The class should be constructed with the following parameters:

class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
  }
//Instantiate a new Video instance and call the watch() method.
const myVideo = new Video("Javascript tutorial", "John", 6000);
myVideo.watch(); 

//Instantiate a second Video instance with different values.
const myVideo2 = new Video ("Challenge video", "Mary", 5000)
myVideo2.watch(); 
//Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)

// Create an array of Video instances
const videoInstances = [
    { title: "Daily challenge",
      uploader: "Alex",
      time: 6000 },
    { title: "CSS Tricks",
      uploader: "Jerry",
      time: 4200 },
    { title: "React Basics", 
      uploader: "Tom",
      time: 3800 },
    { title: "Coding with Mosh", 
      uploader: "Anny", 
      time: 4800 },
    { title: "Exercises in JavaScript",
      uploader: "Smith", 
      time: 5500 },
  ];
  
//Bonus: Loop through the array to instantiate those instances.
const videos = videoInstances.map(data=> new Video(data.title, data.uploader, data.time));

// Call the watch() method on each instance in the array
videos.forEach(video => video.watch());
  