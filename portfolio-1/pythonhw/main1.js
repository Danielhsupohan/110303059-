let myGraph=document.getElementById('myLine'); 

let trace1 ={};
trace1.visible=true;
trace1.mode ="markers";
trace1.type ="scatter";
trace1.name ="Team A";
trace1.marker={
    size:10
};

trace1.x =[];
trace1.y =[];
trace1.text =[];
for(let i=0;i<set1.length;i++){
    trace1.x[i] =set1[i][0];
    trace1.y[i] =set1[i][1];
    trace1.text[i] =set1[i][2];
}

let trace2 ={};
trace2.visible=false;
trace2.mode ="lines";
trace2.type ="scatter";
trace2.name ="Team B";
trace2.x =[];
trace2.y =[];
trace2.text =[];
for(let i=0; i<set2.length; i++) {
    trace2.x[i] =set2[i][0];
    trace2.y[i] =set2[i][1];
    trace2.text[i] =set2[i][2];
}

let trace3 ={}
trace3.visible=false;
trace3.mode ="lines+markers";
trace3.type ="scatter";
trace3.name ="Team C";
trace3.marker={
    size: 10
};
trace3.x =[];
trace3.y =[];
trace3.text =[];
for(let i=0; i<set3.length; i++) {
    trace3.x[i] =set3[i][0];
    trace3.y[i] =set3[i][1];
    trace3.text[i] =set3[i][2];
}

let data =[];
data.push(trace1);
data.push(trace2);
data.push(trace3);
let layout ={
    margin:{
        t:50
    },
    xaxis:{
        range:[0,6]
    },
    yaxis:{
        range:[0,25]
    },
    title:'Scatter& Line',

    updatemenus:[
    {
        y:1.2,
        x:0.3,
        yanchor:'top',
        buttons:[
            {
                method:'restyle',
                args:['visible',[true, false, false]],
                label:'路口'
            },
            {
                method: 'restyle',
                args: ['visible', [false, true, false]],
                label: '日期(8月)'
            },
            {
                method: 'restyle',
                args: ['visible', [false, false, true]],
                label: '肇事原因'
            },
        ]
    }
    ]

};
Plotly.newPlot(myLine, data, layout);

