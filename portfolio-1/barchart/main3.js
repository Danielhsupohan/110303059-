let myGraph3=document.getElementById('Bar')

let traceone={};
let tracetwo={};
let tracethree={};
let tracefour={};
let tracefive={};

traceone.type="bar";
traceone.x=[];
traceone.y=[];
traceone.name="6號到8號";

for(let i=0;i<dateo.length;i++){
    traceone.x[i] = dateo[i]['name'];
    traceone.y[i] = dateo[i]['count'];
}


tracetwo.type ="bar";
tracetwo.name ="10號到12號";
tracetwo.x =[];
tracetwo.y =[];
for(let i=0; i<datetwo.length; i++) {
    tracetwo.x[i] =datetwo[i]['name'];
    tracetwo.y[i] =datetwo[i]['count'];
}


tracethree.type ="bar";
tracethree.name ="12號到14號";
tracethree.x =[];
tracethree.y =[];
for(let i=0; i<datethree.length; i++) {
    tracethree.x[i] =datethree[i]['name'];
    tracethree.y[i] =datethree[i]['count'];
}


tracefour.type ="bar";
tracefour.name ="16號到18號";
tracefour.x =[];
tracefour.y =[];
for(let i=0; i<datefour.length; i++) {
    tracefour.x[i] =datefour[i]['name'];
    tracefour.y[i] =datefour[i]['count'];
}

let databar = [];
databar.push(traceone);
databar.push(tracetwo);
databar.push(tracethree);
databar.push(tracefour);


let layout3 = {
     barmode: 'stack'
};

Plotly.newPlot(Bar, databar, layout3);