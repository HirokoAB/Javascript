//egetElementID
let date = new Date();//用意されている
let hoge = document.getElementById('hoge');
hoge.textContent = date.toLocaleString();

//引数があります　timesone langage
//toLocaleString(引数)←表示を変えることができます

//getElementsByName

let list = document.getElementsByTagName('a');
console.log(list);
for(let i = 0,len = list.length; i < len; i++ ){
    console.log(list.item(i).href);
}

//geTElementsByName
let name = document.getElementsByName('email');
console.log(name);
console.log(name[0].value);
//nodelist=連装配列という意味


//getElementsByclassName
let fuga = document.getElementsByClassName('fuga');
for (let i = 0; i < fuga.length;i++){


console.log(fuga);
// console.log(fuga[0].textContent);
//連装配列の取り出し方と変わらない
// console.log(fuga[i].textContent);
console.log(fuga.item(i).textContent);
}


//querySelctor
let tako = document.querySelector('#tako .anago');//最初がクエリセレクタ
console.log(tako.tagName); 
console.log(tako.textContent); 

//takoの中の最初のコンテンツを取得する
//たこグループの中の採捕のイカのタグ　





