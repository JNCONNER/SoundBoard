const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// create an array of our sounds above
// below loop through them
//for each sound going to run a function
//create a button/ create a variable and set it to document.createElement('button') 
//set the text of the button to the name of the sound

//below create an element create a button and give it a class so take that button variable btn.classList.add a class of ('btn)
//then set the inner text to the sound itself so the above such as applause, boo, gasp, tada, victory, and wrong will be the inner text of the button

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound
  //where we loop through each button we want to add an event listener below and listen for a click and when we click run a function...then we want to get element by id.. all the sounds have an id which is in the array at teh top of the page also..in html 5 we have functions an we will add this one called .play
  btn.addEventListener('click', () => {
    stopSongs()
    //the above code will stop the buttons from playing sound over eachother. run a function called stop songs. first add it to the event listener then below run the function calles stopSongs
    document.getElementById(sound).play()
  })
// nothing appears on the page until we write the below code
  document.getElementById('buttons').appendChild(btn)
})

//here is the function we are running to stop songs from playing over eachother.. then take the sounds array "sounds.for.Each" and say for each sound create a variable called "song" and get the elementbyid and run a pause function as noted below in function stopSongs
function stopSongs(){
    sounds.forEach(sound =>{
        const song = document.getElementById (sound)

        song.pause()
        song.currentTime = 0;
})
}