
let selectM = document.querySelector("#month")
let selectD = document.querySelector("#date")
let selectHour = document.querySelector("#hour")
let selectMin = document.querySelector("#minut")

let error = document.querySelectorAll("form .error")
let errorEmail = document.querySelectorAll("form .error-email")
let minus = document.querySelector(".minus");
let plus = document.querySelector('.plus');
let peopleCount = document.querySelector('.people p span')
const submit = document.querySelector('.btn')

let { form } = document.forms
let inputs = Object.values(form)

let inpStatus = []
let index = 4;

for(let i = 0; i <= 12; i++){
	let option = document.createElement('option')
	if(i < 10){
		option.text = `0${i}`
	}else{
		option.text = i
	}
	option.value = i
	selectM.appendChild(option)
}
for(let i = 0; i <= 30; i++){
	let option = document.createElement('option')
	if(i < 10){
		option.text = `0${i}`
	}else{
		option.text = i
	}
	option.value = i
	selectD.appendChild(option)
}
for(let i = 0; i <= 23;i++){
	let option = document.createElement('option')
	if(i < 10){
		option.text = `0${i}`
	}else{
		option.text = i
	}
	option.value = i
	selectHour.appendChild(option)
}
for(let i = 0; i <= 59;i++){
	let option = document.createElement('option')
	if(i < 10){
		option.text = `0${i}`
	}else{
		option.text = i
	}
	option.value = i
	selectMin.appendChild(option)
}

minus.addEventListener('click', () =>{
		index--
	peopleCount.innerHTML= index
})

plus.addEventListener('click', () =>{
	index++
	peopleCount.innerHTML= index

})
function showError(index){
	if(index >= 2 && index <= 4){
		error[2].style.visibility = "visible"
	}else if(index >= 5 && index <= 7){
		error[3].style.visibility = "visible"
	}else{
		error[index].style.visibility = "visible"
	}
}

function hideError(index){
	if(index >= 2 && index <= 4){
		if(inpStatus[2] == true && inpStatus[3] == true && inpStatus[4] == true){
			error[2].style.visibility = "hidden"
		}
	}else if(index >= 5 && index <= 7){
		if(inpStatus[5] == true && inpStatus[6] == true && inpStatus[7] == true){
			error[3].style.visibility = "hidden"
		}
	}else{
		error[index].style.visibility = "hidden"
	}
}

function validate(){
	inputs.forEach((input, index) => {
		if(input.type != "checkbox" && input.type != "submit"){
			inpStatus.push(false)
			
			input.addEventListener('blur', (e) => {
				if(input.value === ''){
					showError(index)
					inpStatus[index] = false
				}else{
					hideError(index)
					inpStatus[index] = true
				}
			})

			input.addEventListener("input", (e) => {
				if(input.name === 'email'){
					if(!input.value.includes("@")){
						showError(index)
						error[index].innerText = "Email should include @"
						inpStatus[index] = false
					}else{
						hideError(index)
						error[index].innerText = "This field is required"
						inpStatus[index] = true
					}
				}
			})
		}
	});
}

function isEmpty(){
	inputs.forEach((input, index) => {
		if(input.type != "checkbox" && input.type != "submit" && input.type != "select-one"){
			if(input.value == ''){
				showError(index)
				inpStatus[index] == false
			}
			else{
				hideError(index)
				inpStatus[index] == true
			}
		}
		else if(input.type == "select-one"){
			if(input.value == 0){
				showError(index)
				inpStatus[index] == false
			}
			else{
				hideError(index)
				inpStatus[index] == true
			}
		}
	})
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	let formData = new FormData(form)

	let fullDate = inputs[2].value + "-" + inputs[3].value + "-" + inputs[4].value
	let time = inputs[5].value + ":" + inputs[6].value + inputs[7].value
	let values = {
		firstname: inputs[0].value,
		email: inputs[1].value,
		date: fullDate + "T" + time,
		peoples: peopleCount.innerText
	}

	
	if(!inpStatus.includes(false)){
		console.log(values)
	}else{
		isEmpty()
	}
})

validate()
