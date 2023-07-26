const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");

window.addEventListener("load",function(){
	showPopup();
})

function showPopup(){
	const timeLimit = 3
	let i = 0;
	const timer = setInterval(function(){
		i++;
		if(i == timeLimit){
			clearInterval(timer);
			loginPopup.classList.add("show");
		}
		console.log(i)
	}, 1000);
}

close.addEventListener("click",function(){
	loginPopup.classList.remove("show");
})


const wrapper = document.querySelector(".wrapper");
const form    = wrapper.querySelectorAll(".form");
const submitInput = form[0].querySelector(".btn");


function getDataForm(e){
	if (document.querySelector(".name").value === "") {
		 input.setCustomValidity(valOrFunction(options.defaultText, window, [input]));
	}

	else {

	  e.preventDefault();

	  var formData = new FormData(form[0]);


	  document.getElementById("output").innerHTML = "Hello " + formData.get('nameField') + "!";

	  $(document).ready(function(){
    $(".test").hide();
    $(".okay").show();
    $(document.getElementById("outpute").innerHTML = "Welcome " + formData.get('nameField') + "!").show();
});
 
	}
}


document.addEventListener('DOMContentLoaded', function(){

  submitInput.addEventListener('click', getDataForm, false)

}, false);


function updateCounter(){
	fetch('https://api.countapi.xyz/update/cucita/counter/?amount=1')
	.then(res => res.json())
	.then(data => counterElement.innerHTML = data.value)
}


updateCounter()
counterElement = document.getElementsByClassName('count')[0]


document.getElementById("date").innerHTML = Date();




    
navigator.geolocation.getCurrentPosition(showPosition);


function showPosition(position) {
  document.getElementById("location").innerHTML = position.coords.latitude + 
  "," + position.coords.longitude +  " :Nigeria.";
}



