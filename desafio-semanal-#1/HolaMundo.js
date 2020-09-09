var head = document.querySelector("head").innerHTML='<style>*{font-family:"roboto", sans-serif;margin:0}.fondo{display:flex;height:100vh;width:100vw;justify-content:center;align-items:center}h1{font-size:3rem;animation:bgAnimated 5s infinite}.fondo{background:black;animation:bgAnimated 5s infinite}@keyframes bgAnimated{0%{background:white;color:black}50%{background:black;color:white}100%{background:white;color:black}};</style>'
document.body.innerHTML= '<div class="fondo"><h1 class="write"></h1></div>'

console.log(head);

var writing = str => {
   let arrStr = str.split("");
   let i = 0;
   setInterval(() => {
      if (i < arrStr.length) {
         document.querySelector(".write")
            .innerHTML += arrStr[i];
         i++
      }
   }, 150)
};

writing("  Hola Mundo");