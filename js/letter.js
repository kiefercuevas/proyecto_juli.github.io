document.addEventListener("DOMContentLoaded", () => {
  
  let isOpen = false;
  let envelope =  document.querySelector('#envelope');
  //let btn_open = document.querySelector("#open");
  //let btn_reset = document.querySelector("#reset");

  envelope.addEventListener('click', () => {
    open();
  });

  // btn_open.addEventListener('click', () => {
  //   open();
  // });

  // btn_reset.addEventListener('click', () => {
  //   close();
  // });
  
  function open() {
      if(!isOpen){
        envelope.classList.add("open");
        envelope.classList.remove("close");
        document.getElementById("title-letter").innerText = "Feliz San Valentín Miamorcito!!!";
        
        let element = document.getElementById("main-letter-container");
        element.classList.add("main-letter-div2_without_animation_pulse");
        
        isOpen = true;

        setInterval(
          function () {
            let imgName = "imgs/cute" + (Math.floor(Math.random() * 4) + 1) + ".gif";
            document.getElementById("cuteImg").src = imgName;
        }, 5000);
      }
  }

});