let myGraph2=document.getElementById('myPie'); 

let trace11 ={};
trace11.type ="pie";
trace11.title ="6號到8號";
trace11.labels =[];
trace11.values =[];
trace11.domain ={
    row:0,
    column:0
};
for(let x=0; x<date.length; x++){
    trace11.labels[x] =date[x]['name'];
    trace11.values[x] =date[x]['count'];
}

let trace22 ={};
trace22.type ="pie";
trace22.title ="10號到12號";
trace22.labels =[];
trace22.values =[];
trace22.domain ={
    row:0,
    column:1
};
for(let x=0; x<date2.length; x++){
    trace22.labels[x] =date2[x]['name'];
    trace22.values[x] =date2[x]['count'];
}

let trace33 ={};
trace33.type ="pie";
trace33.title ="12號到14號";
trace33.labels =[];
trace33.values =[];
trace33.domain ={
    row:1,
    column:0
};
for(let x=0; x<date3.length; x++){
    trace33.labels[x] =date3[x]['name'];
    trace33.values[x] =date3[x]['count'];
}

let trace44 ={};
trace44.type ="pie";
trace44.title ="16號到18號";
trace44.labels =[];
trace44.values =[];
trace44.domain ={
    row:1,
    column:1
};
for(let x=0; x<datef.length; x++){
    trace44.labels[x] =datef[x]['name'];
    trace44.values[x] =datef[x]['count'];
}

let trace55 ={};
trace55.type ="pie";
trace55.title ="22號到24號";
trace55.labels =[];
trace55.values =[];
trace55.domain ={
    row:2,
    column:0
};
for(let x=0; x<datefi.length; x++){
    trace55.labels[x] =datefi[x]['name'];
    trace55.values[x] =datefi[x]['count'];
}

let datapie =[];
datapie.push(trace11);
datapie.push(trace22);
datapie.push(trace33);
datapie.push(trace44);
datapie.push(trace55);

let layout2 ={
    margin:{
        t:5,
        l:0,
    },
    grid:{
        rows:3,
        columns:2
    }
};

Plotly.newPlot(myPie, datapie, layout2);
