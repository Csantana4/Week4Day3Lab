console.log("hello world")

let resBtn = document.querySelector('#button')


function btnClicked(event){

    console.log('Button clicked')
   
   axios
   .get(baseURL+ '/Alderaan')
   .then((response) =>{
    console.log(response.data)
    response.data.forEach()
   })
}



resBtn.addEventListener('click', btnClicked)