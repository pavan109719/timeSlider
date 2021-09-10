const scaleWS = document.querySelector("#sc1");
const scaleWE = document.querySelector("#sc2");
const scaleBS = document.querySelector("#sc3");
const scaleBE = document.querySelector("#sc4");
const scaleOS = document.querySelector("#sc5");
const scaleOE = document.querySelector("#sc6");

const range1 = document.querySelector("#range1");
const range2 = document.querySelector("#range2");
const range3 = document.querySelector("#range3");



const selectWS = document.querySelector('#select-1');

function calculateTime(time) {
    let hour = Math.floor(time / 60);
    String(hour).length == 1 ? hour = '0'.concat(String(hour)) : hour;
    let min = Math.floor((time - ((hour * 3600)) / 60));
    String(min).length == 1 ? min = '0'.concat(String(min)) : min;
    var time = `${hour} : ${min}`;
    return time;
}
let hoverFlag1 = document.createElement('span');
hoverFlag1.classList.add("hoverflag1");
let hoverFlag2 = document.createElement('span');
hoverFlag2.classList.add("hoverflag1");
let hoverFlag3 = document.createElement('span');
hoverFlag3.classList.add("hoverflag2");
let hoverFlag4 = document.createElement('span');
hoverFlag4.classList.add("hoverflag2");
let hoverFlag5 = document.createElement('span');
hoverFlag5.classList.add("hoverflag3");
let hoverFlag6 = document.createElement('span');
hoverFlag6.classList.add("hoverflag3");
setselectWSValue();
function setselectWSValue(){
        let _this = scaleWS;
        min=parseInt(_this.min);
        max=parseInt(_this.max);
        let percent = ((_this.value-min)/(max-min))*100;
        selectWS.style.left = percent+'%';
        range1.style.left = percent-2+'%';

        let timeFlag = Math.round((percent*1439)/100); 
        selectWS.appendChild(hoverFlag1).innerText = calculateTime(timeFlag);


        }
        
const selectWE = document.querySelector('#select-2');

setselectWEValue();
function setselectWEValue(){
        let _this = scaleWE;
        min=parseInt(_this.min);
        max=parseInt(_this.max);
        let percent = ((_this.value-min)/(max-min))*100;
        selectWE.style.left = percent+'%';
        range1.style.right = ((100-Math.round(percent))-2)+'%';
        let timeFlag = Math.round((percent*1439)/100); 
        selectWE.appendChild(hoverFlag2).innerText = calculateTime(timeFlag);


        }
        
const selectBS = document.querySelector('#select-3');

setselectBSValue();                           
function setselectBSValue(){
        let _this = scaleBS;
        min=parseInt(_this.min);
        max=parseInt(_this.max);
        let percent = ((_this.value-min)/(max-min))*100;
        selectBS.style.left = percent+'%';
        range2.style.left = percent-2+'%';
        let timeFlag = Math.round((percent*1439)/100); 
        selectBS.appendChild(hoverFlag3).innerText = calculateTime(timeFlag);

        }
        
const selectBE = document.querySelector('#select-4');

setselectBEValue();
function setselectBEValue(){
        let _this = scaleBE;
        min=parseInt(_this.min);
        max=parseInt(_this.max);
        let percent = ((_this.value-min)/(max-min))*100;
        selectBE.style.left = percent+'%';
        range2.style.right = ((100-Math.round(percent))-2)+'%';
        let timeFlag = Math.round((percent*1439)/100); 
        selectBE.appendChild(hoverFlag4).innerText = calculateTime(timeFlag);

        }
        
const selectOS = document.querySelector('#select-5');

setselectOSValue();
function setselectOSValue(){
        let _this = scaleOS;
        min=parseInt(_this.min);
        max=parseInt(_this.max);
        let percent = ((_this.value-min)/(max-min))*100;
        selectOS.style.left = percent+'%';
        range3.style.left = percent-2+'%';
        let timeFlag = Math.round((percent*1439)/100); 
        selectOS.appendChild(hoverFlag5).innerText = calculateTime(timeFlag);

        }
        
const selectOE = document.querySelector('#select-6');

setselectOEValue();
function setselectOEValue(){
        let _this = scaleOE;
        min=parseInt(_this.min);
        max=parseInt(_this.max);
        let percent = ((_this.value-min)/(max-min))*100;
        selectOE.style.left = percent+'%';
        let timeFlag = Math.round((percent*1439)/100); 
        range3.style.right = ((100-Math.round(percent))-2)+'%';
        selectOE.appendChild(hoverFlag6).innerText = calculateTime(timeFlag);

        }

scaleOS.addEventListener('input',setselectOSValue);
scaleOE.addEventListener('input',setselectOEValue);
scaleWS.addEventListener('input',setselectWSValue);
scaleWE.addEventListener('input',setselectWEValue);
scaleBS.addEventListener('input',setselectBSValue);
scaleBE.addEventListener('input',setselectBEValue);
