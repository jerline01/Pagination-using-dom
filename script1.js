
var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    console.log(data);
}

function createelement(element,value="") {
    var ele = document.createElement(element);
    ele.innerHTML = value;
    return ele;
}

var button = document.createElement('button');
button.className = "btn-first";
button.innerHTML = "<<";
button.addEventListener('click',table1);

document.body.append(button);


function table1() {
    var data = JSON.parse(request.response);
    console.log(data);

    var t = document.getElementsByTagName('table');
    var ta = t[0];
    console.log(typeof(ta));
    if(typeof(ta)!="undefined")
    ta.remove();

    var tablecontent = document.createElement('table');
    tablecontent.setAttribute('class','table');
    var thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark');

    var tr = document.createElement('tr');
    var th1 = createelement('th','Id');
    var th2 = createelement('th','Name');
    var th3 = createelement('th','Email');
    tr.append(th1,th2,th3);
    thead.append(tr);

    for(var i = 0; i<10; i++) {
        console.log(data[i].name);
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td1 = createelement('td',data[i].id);
        var td2 = createelement('td',data[i].name);
        var td3 = createelement('td',data[i].email);
        tr.append(td1,td2,td3);
        tbody.append(tr);
        tablecontent.append(thead,tbody);
        document.body.append(tablecontent);
    }
    
}


var button = document.createElement('button');
button.className = "btn1";
button.innerHTML = "1";
button.removeEventListener('click',table1);
button.addEventListener('click',table1);

document.body.append(button);

function table1() {
    var data = JSON.parse(request.response);
    console.log(data);

    var t = document.getElementsByTagName('table');
    var ta = t[0];
    console.log(typeof(ta));
    if(typeof(ta)!="undefined")
    ta.remove();

    var tablecontent = document.createElement('table');
    tablecontent.setAttribute('class','table');
    var thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark');

    var tr = document.createElement('tr');
    var th1 = createelement('th','Id');
    var th2 = createelement('th','Name');
    var th3 = createelement('th','Email');
    tr.append(th1,th2,th3);
    thead.append(tr);

    for(var i = 0; i<10; i++) {
        console.log(data[i].name);
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td1 = createelement('td',data[i].id);
        var td2 = createelement('td',data[i].name);
        var td3 = createelement('td',data[i].email);
        tr.append(td1,td2,td3);
        tbody.append(tr);
        tablecontent.append(thead,tbody);
        document.body.append(tablecontent);
    }
    
}

var button = document.createElement('button');
button.className = "btn2";
button.innerHTML = "2";
button.removeEventListener('click',table2);
button.addEventListener('click',table2);

document.body.append(button);

function table2() {
    var data = JSON.parse(request.response);
    console.log(data);

    var t = document.getElementsByTagName('table');
    var ta = t[0];
    console.log(typeof(ta));
    if(typeof(ta)!="undefined")
    ta.remove();

    var tablecontent = document.createElement('table');
    tablecontent.setAttribute('class','table');
    var thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark');

    var tr = document.createElement('tr');
    var th1 = createelement('th','Id');
    var th2 = createelement('th','Name');
    var th3 = createelement('th','Email');
    tr.append(th1,th2,th3);
    thead.append(tr);

    for(var i = 10; i<20; i++) {
        console.log(data[i].name);
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td1 = createelement('td',data[i].id);
        var td2 = createelement('td',data[i].name);
        var td3 = createelement('td',data[i].email);
        tr.append(td1,td2,td3);
        tbody.append(tr);
        tablecontent.append(thead,tbody);
        document.body.append(tablecontent);
    }

}

var button = document.createElement('button');
button.className = "btn3";
button.innerHTML = "3";
button.addEventListener('click',table3);
button.removeEventListener('mouseover',table3);

document.body.append(button);

function table3() {
    var data = JSON.parse(request.response);
    console.log(data);

    var t = document.getElementsByTagName('table');
    var ta = t[0];
    console.log(typeof(ta));
    if(typeof(ta)!="undefined")
    ta.remove();

    var tablecontent = document.createElement('table');
    tablecontent.setAttribute('class','table');
    var thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark');

    var tr = document.createElement('tr');
    var th1 = createelement('th','Id');
    var th2 = createelement('th','Name');
    var th3 = createelement('th','Email');
    tr.append(th1,th2,th3);
    thead.append(tr);

    for(var i = 20; i<30; i++) {
        console.log(data[i].name);
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td1 = createelement('td',data[i].id);
        var td2 = createelement('td',data[i].name);
        var td3 = createelement('td',data[i].email);
        tr.append(td1,td2,td3);
        tbody.append(tr);
        tablecontent.append(thead,tbody);
        document.body.append(tablecontent);
    }

}

var button = document.createElement('button');
button.className = "btn4";
button.innerHTML = "4";
button.addEventListener('click',table4);

document.body.append(button);

function table4() {
    var data = JSON.parse(request.response);
    console.log(data);

    var t = document.getElementsByTagName('table');
    var ta = t[0];
    console.log(typeof(ta));
    if(typeof(ta)!="undefined")
    ta.remove();

    var tablecontent = document.createElement('table');
    tablecontent.setAttribute('class','table');
    var thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark');

    var tr = document.createElement('tr');
    var th1 = createelement('th','Id');
    var th2 = createelement('th','Name');
    var th3 = createelement('th','Email');
    tr.append(th1,th2,th3);
    thead.append(tr);

    for(var i = 30; i<40; i++) {
        console.log(data[i].name);
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td1 = createelement('td',data[i].id);
        var td2 = createelement('td',data[i].name);
        var td3 = createelement('td',data[i].email);
        tr.append(td1,td2,td3);
        tbody.append(tr);
        tablecontent.append(thead,tbody);
        document.body.append(tablecontent);
    }

}

var button = document.createElement('button');
button.className = "btn5";
button.innerHTML = "5";
button.addEventListener('click',table5);

document.body.append(button);

function table5() {
    var data = JSON.parse(request.response);
    console.log(data);

    var t = document.getElementsByTagName('table');
    var ta = t[0];
    console.log(typeof(ta));
    if(typeof(ta)!="undefined")
    ta.remove();

    var tablecontent = document.createElement('table');
    tablecontent.setAttribute('class','table');
    var thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark');

    var tr = document.createElement('tr');
    var th1 = createelement('th','Id');
    var th2 = createelement('th','Name');
    var th3 = createelement('th','Email');
    tr.append(th1,th2,th3);
    thead.append(tr);

    for(var i = 40; i<50; i++) {
        console.log(data[i].name);
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td1 = createelement('td',data[i].id);
        var td2 = createelement('td',data[i].name);
        var td3 = createelement('td',data[i].email);
        tr.append(td1,td2,td3);
        tbody.append(tr);
        tablecontent.append(thead,tbody);
        document.body.append(tablecontent);
    }

}

var button = document.createElement('button');
button.className = "btn6";
button.innerHTML = "6";
button.addEventListener('click',table6);

document.body.append(button);

function table6() {
    var data = JSON.parse(request.response);
    console.log(data);

    var t = document.getElementsByTagName('table');
    var ta = t[0];
    console.log(typeof(ta));
    if(typeof(ta)!="undefined")
    ta.remove();

    var tablecontent = document.createElement('table');
    tablecontent.setAttribute('class','table');
    var thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark');

    var tr = document.createElement('tr');
    var th1 = createelement('th','Id');
    var th2 = createelement('th','Name');
    var th3 = createelement('th','Email');
    tr.append(th1,th2,th3);
    thead.append(tr);

    for(var i = 50; i<60; i++) {
        console.log(data[i].name);
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td1 = createelement('td',data[i].id);
        var td2 = createelement('td',data[i].name);
        var td3 = createelement('td',data[i].email);
        tr.append(td1,td2,td3);
        tbody.append(tr);
        tablecontent.append(thead,tbody);
        document.body.append(tablecontent);
    }

}

var button = document.createElement('button');
button.className = "btn7";
button.innerHTML = "7";
button.addEventListener('click',table7);

document.body.append(button);

function table7() {
    var data = JSON.parse(request.response);
    console.log(data);

    var t = document.getElementsByTagName('table');
    var ta = t[0];
    console.log(typeof(ta));
    if(typeof(ta)!="undefined")
    ta.remove();

    var tablecontent = document.createElement('table');
    tablecontent.setAttribute('class','table');
    var thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark');

    var tr = document.createElement('tr');
    var th1 = createelement('th','Id');
    var th2 = createelement('th','Name');
    var th3 = createelement('th','Email');
    tr.append(th1,th2,th3);
    thead.append(tr);

    for(var i = 60; i<70; i++) {
        console.log(data[i].name);
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td1 = createelement('td',data[i].id);
        var td2 = createelement('td',data[i].name);
        var td3 = createelement('td',data[i].email);
        tr.append(td1,td2,td3);
        tbody.append(tr);
        tablecontent.append(thead,tbody);
        document.body.append(tablecontent);
    }

}

var button = document.createElement('button');
button.className = "btn8";
button.innerHTML = "8";
button.addEventListener('click',table8);

document.body.append(button);

function table8() {
    var data = JSON.parse(request.response);
    console.log(data);

    var t = document.getElementsByTagName('table');
    var ta = t[0];
    console.log(typeof(ta));
    if(typeof(ta)!="undefined")
    ta.remove();

    var tablecontent = document.createElement('table');
    tablecontent.setAttribute('class','table');
    var thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark');

    var tr = document.createElement('tr');
    var th1 = createelement('th','Id');
    var th2 = createelement('th','Name');
    var th3 = createelement('th','Email');
    tr.append(th1,th2,th3);
    thead.append(tr);

    for(var i = 70; i<80; i++) {
        console.log(data[i].name);
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td1 = createelement('td',data[i].id);
        var td2 = createelement('td',data[i].name);
        var td3 = createelement('td',data[i].email);
        tr.append(td1,td2,td3);
        tbody.append(tr);
        tablecontent.append(thead,tbody);
        document.body.append(tablecontent);
    }

}

var button = document.createElement('button');
button.className = "btn9";
button.innerHTML = "9";
button.addEventListener('click',table9);

document.body.append(button);

function table9() {
    var data = JSON.parse(request.response);
    console.log(data);

    var t = document.getElementsByTagName('table');
    var ta = t[0];
    console.log(typeof(ta));
    if(typeof(ta)!="undefined")
    ta.remove();

    var tablecontent = document.createElement('table');
    tablecontent.setAttribute('class','table');
    var thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark');

    var tr = document.createElement('tr');
    var th1 = createelement('th','Id');
    var th2 = createelement('th','Name');
    var th3 = createelement('th','Email');
    tr.append(th1,th2,th3);
    thead.append(tr);

    for(var i = 80; i<90; i++) {
        console.log(data[i].name);
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td1 = createelement('td',data[i].id);
        var td2 = createelement('td',data[i].name);
        var td3 = createelement('td',data[i].email);
        tr.append(td1,td2,td3);
        tbody.append(tr);
        tablecontent.append(thead,tbody);
        document.body.append(tablecontent);
    }

}

var button = document.createElement('button');
button.className = "btn10";
button.innerHTML = "10";
button.addEventListener('click',table10);

document.body.append(button);

function table10() {
    var data = JSON.parse(request.response);
    console.log(data);

    var t = document.getElementsByTagName('table');
    var ta = t[0];
    console.log(typeof(ta));
    if(typeof(ta)!="undefined")
    ta.remove();

    var tablecontent = document.createElement('table');
    tablecontent.setAttribute('class','table');
    var thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark');

    var tr = document.createElement('tr');
    var th1 = createelement('th','Id');
    var th2 = createelement('th','Name');
    var th3 = createelement('th','Email');
    tr.append(th1,th2,th3);
    thead.append(tr);

    for(var i = 90; i<100; i++) {
        console.log(data[i].name);
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td1 = createelement('td',data[i].id);
        var td2 = createelement('td',data[i].name);
        var td3 = createelement('td',data[i].email);
        tr.append(td1,td2,td3);
        tbody.append(tr);
        tablecontent.append(thead,tbody);
        document.body.append(tablecontent);
    }

}

var button = document.createElement('button');
button.className = "btn-last";
button.innerHTML = ">>";
button.addEventListener('click',table10);

document.body.append(button);

function table10() {
    var data = JSON.parse(request.response);
    console.log(data);

    var t = document.getElementsByTagName('table');
    var ta = t[0];
    console.log(typeof(ta));
    if(typeof(ta)!="undefined")
    ta.remove();

    var tablecontent = document.createElement('table');
    tablecontent.setAttribute('class','table');
    var thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark');

    var tr = document.createElement('tr');
    var th1 = createelement('th','Id');
    var th2 = createelement('th','Name');
    var th3 = createelement('th','Email');
    tr.append(th1,th2,th3);
    thead.append(tr);

    for(var i = 90; i<100; i++) {
        console.log(data[i].name);
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td1 = createelement('td',data[i].id);
        var td2 = createelement('td',data[i].name);
        var td3 = createelement('td',data[i].email);
        tr.append(td1,td2,td3);
        tbody.append(tr);
        tablecontent.append(thead,tbody);
        document.body.append(tablecontent);
    }

}



