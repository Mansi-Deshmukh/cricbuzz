 function userlogin(){
   let c = document.getElementById('Singemail');

   let  value = document.getElementById('email').value;

   c.innerHTML=null;

   let h = document.createElement('h4');
   h.innerText ="Enter the 6 digit Option";
    let p = document.createElement('p');
    p.innerText = `OPT send to your ${value}`;
    
    let div = document.createElement('div');
    div.style.border = "1px solid grey";
    div.style.width = "";
    div.style.width = "250px";
    div.style.height = "30px";
    div.style.margin = "auto"

    let btn = document.createElement('button');
    btn.innerHTML = "SUBMIT";
    btn.border ="none";
    btn.background = "rgb(12, 163, 128)";
    btn.border.radius = "2px";
    btn.style.width = "250px";
    btn.style.height = "30px";
    btn.style.margin = "20px";
    btn.onclick = redirect();
       
    c.append(h,p,div,btn)


 }
 function redirect(){
    window.location.href = "index.html";
 }