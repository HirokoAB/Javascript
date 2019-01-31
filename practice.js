//jsの復習---------
console.log('hoge');
//基本の文法　（）の後にセミコロンを打つこと
//console.log('') means コンソールログに表示する

//基本的な四則演算
//四則演算の記号は　+ - * / %
console.log(1+1);
console.log(1-1);
console.log(1*1);
console.log(1/1);
console.log(1%1);

let name ='hiroko';
console.log(name);
//hirokoと表示されるはず　ok
 
 name = 'ひろ';
 console.log(name);
 //阿部と表皮されるはず　表示されない

let num = 2;
num = num * 4;
console.log(num);
//８　と表皮されるはず　ok

num +=5;
console.log('num +=5は' +num+'です。');
//7と表示されるはず　
//定数はconst 変更できません
const age=21;
console.log(`私の年齢は、${age}です。`);
//バックコーテションは&{}とセットで使う

//条件分岐の書き方
let int = 10;
if (int > 3){
    console.log(`${int}は３より大きいです`)
}
//読み方　変数の箱に５を入れます
//もし変数に入っている数字が５より大きい場合は　変数＋’３より大きいですの文字’
// let int = 2;
// if (int < 3){
//     console.log(`${int}は３より小さいです`)
// }

