 var config = {
    apiKey: "AIzaSyB3TDYf3pVhb3MQTb9kMOrQoXqS8ivWr7o",
    authDomain: "trainscheduler-bcb0d.firebaseapp.com",
    databaseURL: "https://trainscheduler-bcb0d.firebaseio.com",
    projectId: "trainscheduler-bcb0d",
    storageBucket: "trainscheduler-bcb0d.appspot.com",
    messagingSenderId: "484356626609"
  };
  firebase.initializeApp(config);

	var database = firebase.database();

	console.log(moment().hours());
	// console.log(moment().subtract(7, 'days'));

	// var randomdate = "02/23/1999";
	// convertedDate = moment(randomdate).format("MM/DD/YYYY");

	console.log(moment().startOf('day').add(2,'h').diff(moment(),"minutes"));

	// database.ref().on("value",function(snapshot){
		// console.log(snapshot.val());

		// var name = snapshot.val().name;
		// console.log(name);
		// var freq = snapshot.val().freq;
		// console.log(freq);
		// var destination = snapshot.val().destination;
		// console.log(destination);
		// var time = snapshot.val().time;
		// var diff = snapshot.val().diff;
		// var diff = moment(time).diff(moment(),"minutes");
		// console.log(diff);



//});


 
$("#submit-button").on("click",function(event){

event.preventDefault();

var	trainName = $("#train-name").val().trim();
	console.log(trainName);
var	destination = $("#destination").val().trim();
	console.log(destination);
var	firstTime = moment($("#first-time").val().trim(),"HH:mm").format("HH:mm");
	console.log(firstTime);
	 console.log(parseInt(moment(firstTime).hour()));
	 console.log(parseInt(moment(firstTime).minute()));
var	frequency = $("#frequency").val().trim();
	console.log(frequency);

console.log(moment().startOf('day').add(firstTime.hour()).add(firstTime.minute().diff(moment(),"minutes"));

// var diff = moment(firstTime).diff(moment());
// console.log(diff);
// var duration = moment.duration(diff);
// var min = duration.asMinutes();
// console.log(min);
	
	var trainInfo = {
		name:trainName,
		destination: destination,
		time: firstTime,
		freq: frequency,
	};
	
	console.log(trainInfo);

   $("#train-name").val("");
   $("#destination").val("");
   $("#first-time").val("");
   $("#frequency").val("");

   database.ref().set(trainInfo);

});



