// function onclick(btn_event){
//     window.alert('ボタンが押されたよ')
// }

// document.getElementById('inputform').addEventListener('onChange',function(){
//      let tag = document.createElement('p');
//      let text = document.createTextNode('こんにちは');
//      document.body.appendChild(tag).appendChild(text);
// })

function work(){
     let tag = document.createElement('p');
     let text = document.createTextNode('こんにちは');
     document.body.appendChild(tag).appendChild(text);
}

// ↑無駄な処理をさせない



// document.getElementById('input').addEventListener('checkForm',function(){
//     if (document.test.value=="hiroko"){
//      let tag = document.createElement('p');
//      let text = document.createTextNode('はいさいjs');
//      document.body.appendChild(tag).appendChild(text);
//  }else{
//     let tag = document.createElement('p');
//      let text = document.createTextNode('はいさいjP');
//      document.body.appendChild(tag).appendChild(text);
//  }
// })


// document.getElementById('input').addEventListener('onClick',function(){←着火剤2回
//      let tag = document.createElement('p');
//      let text = document.createTextNode('はいさいjs');
//      document.body.appendChild(tag).appendChild(text);
// })