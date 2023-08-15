const zoneAff = document.getElementById('calcul');
const zoneCalcule = document.getElementById('input');
const reset = document.getElementById('reset');
const clear = document.getElementById('clear');
const numPad = document.querySelectorAll('.numpad');
const equal = document.getElementById('equals');
const percentage= document.getElementById('percentage');
const plus = document.getElementById("plus");
const moins = document.getElementById('minus');
const fois = document.getElementById('times');
const division = document.getElementById('divideby');
const plusoumoins = document.getElementById('plusoumoins');

reset.addEventListener('click',()=>{
    zoneAff.innerHTML= " ";
    zoneCalcule.value = " ";
})

clear.addEventListener('click',()=>{
    zoneCalcule.value= "";
})

numPad.forEach((touche)=>{
    touche.addEventListener("click", ()=>{
        
        zoneCalcule.value += touche.textContent;
        
    })
})

plusoumoins.addEventListener('click',(e)=>{
    e.preventDefault();
    zoneCalcule.value = zoneCalcule.value * -1;
})

plus.addEventListener('click',(e)=>{
    e.preventDefault();
    zoneAff.innerHTML = `${(zoneCalcule.value)}+`;
    zoneCalcule.value ="";
    
})
moins.addEventListener('click',(e)=>{
    e.preventDefault();
    zoneAff.innerHTML = `${(zoneCalcule.value)}-`;
    zoneCalcule.value ="";
})

fois.addEventListener('click',(e)=>{
    e.preventDefault();
    zoneAff.innerHTML = `${(zoneCalcule.value)}*`;
    zoneCalcule.value ="";
})

division.addEventListener('click',(e)=>{
    e.preventDefault();
    zoneAff.innerHTML = `${(zoneCalcule.value)}/`;
    zoneCalcule.value ="";
})

percentage.addEventListener('click',(e)=>{
    e.preventDefault();
    zoneAff.innerHTML = `${(zoneCalcule.value)}/ 100`;
    zoneCalcule.value = eval(zoneAff.textContent);
})

equal.addEventListener('click', (e)=>{
    e.preventDefault();
    
    zoneAff.innerHTML = `${zoneAff.textContent} ${(zoneCalcule.value)} `;
    zoneCalcule.value = eval(zoneAff.textContent);
})
