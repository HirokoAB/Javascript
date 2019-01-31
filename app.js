console.log('--------console.log----------');
console.log('hoge');
//四則演算

console.log('--------四則演算----------');
console.log(1+1);
console.log(4-2);
console.log(4*2);
console.log(4/2);
console.log(7%2);

console.log('--------文字列連結----------');
console.log('平井の'+'オジキ');
//文字を表示したい場合はシングルこーテンションで囲う

//変数とはデータを入れる箱
//箱の名前が『変数名』と呼びます
console.log('--------変数----------');

//変数を使う場合はまず箱を用意する
//変数を使用する理由　
// 1 変更に対応するため 2 同じ値を繰り返し使える　３ 値の意味がわかりやすい
// ルール　変数名のルールは、英数名です
// 英単語　キャメルケース
let name ='golf';
console.log(name);

name = 'なおきさん';
console.log(name);

let num =2;
num = num * 4;
console.log(num);

num +=5;
console.log('num +=5は' +num+'です。');
 
//定数　(const)変更はできません
const age = 21;
console.log(`私の年齢は、${age}です。`);
//バックこーテンションは${}とセットで
console.log('--------条件分岐----------');
//if (条件){
//処理；
//}

console.log('if文を使うよ');
let int = 5;
if (int > 3){
    console.log(`${int}は３より大きいです`);
}
//intがtureだった場合は{}の中の処理が実行される
//faultの場合は処理されない
//比較演算子　< ,>, =, <=, >=, ===, ==, !== etc
//gogleで確認sてみましょう

// let int=5
// if (int > 3){
//     console.log(`${int}は３より大きいです`);
// }


console.log('elseif----------------')

if(int >= 10){
    console.log(int+'は１０以上です');
}else if( int > 3){
    console.log(int+'は３より大きいです');
}else{
    console.log(int+'は３以下です');
}

console.log('switch----------------');
let signal ='green';
// console.log(signal);


// イコールはふたつ必要　かっこを先に準備しておく
//if文で条件分岐　信号を作る　文字列はシングルコート　　
//人が読みやすい言語　スクリプト言語



// if( signal == 'green'){
//     console.log('進め');
// }else if( signal == 'red' ){
//     console.log('止まれ');
// }else{
//     console.log('あなた次第');
// }


 
switch(signal){
    case 'green':
    console.log('進め');
    break;
    case 'red':
    console.log('止まれ');
    break;
    default:
     console.log('その他');
    break;
}

//以上がswitch文です　条件が三つ以上の場合はswitch 厳格な判断は場合はif文


//ここから繰り返しの処理

console.log('繰り返し処理-------------')


console.log('for文-------------')
//変数の箱に１を入れました　ig１０になるまで１を足し続けてください
//ツイッターにて　ツイート全件表示　todoアプリにも使われます（登録されている内容を全権表示)　
// for(let i = 1 ; i <= 10; i++){
//     console.log(i);
// }

// console.log('while文-------------')
// let j = 11;
// while(j <= 20){
//     console.log(j);//jを表示した後に
//     j++;//１を足します
// }

// console.log('do while-------------')
//  let j2 = 21;
//  do{
//     console.log(j2);
//     j2++;
//  }while(j2 <= 30);




for(let j = 1; j <= 100; j++){

if( j % 15 == 0){
    console.log('FizzBuzz');
}else if( j % 3 == 0){
    console.log('fizz');
}else if ( j % 5 == 0) {
    console.log('Buzz');
}else{
    console.log(j);
}
}

console.log('fizzbuzzその２---------------')
for(let j = 1; j <= 15; j++){
    console.log((j % 3 == 0 ? 'fizz': '')+(j % 5 == 0 ? 'buzz': '')|| j);
}

//配列とは本棚タンスに例えられます
//[値1,値2,値3]
console.log('配列----------------------')

let student = ['屋慶名さん','車さん','阿部さん','直樹さん'];
console.log(student);//全部の取り出し方

//●番目の値を表示 
console.log(student[1]);//二番目の値を表示 値の指定の仕方に注意

//値の上書き
student[1] = 'sokoさん';
console.log(student[1])//配列の番号の値を必ず指定する

//値の追加　◉
student.push('神谷さん'); 
console.log(student); 

student.unshift('平井さん');
console.log(student)


//値の削除　末尾の値を削除　◉
student.pop();
console.log(student);

student.shift();//始めの値を削除
console.log(student);

//全部覚える必要はない

//連想配列　{キー１:値１,キー2:値2,]} キーで取り出すことができる
console.log('連想配列--------------')
let profile = {
    name:'阿部さん',
    age:18,
    from:'仙台'
}
console.log(profile);
console.log(profile['name']);

let profile2 = {
    name:'阿部さん',
    age:34,
    from:'仙台'
}


console.log('２次配列-------------')

//連想配列が入った配列を作る　マトリョーシカ


// let profiles = [profile,profile2];
// console.log(profiles);
// console.log(profiles[1]['age']);
// console.log(profiles[1].age);

//まとめて多次元配列と言います　五次元配列

// let profile = {
//     name:'阿部さん',
//     age:18,
//     from:'miyagi'
// }
// let  miyagi ={
//     hokubu:'kesennuma area'
//     tyuubu:'sendai area'
//     nannbu:'watari area'
// }



//バラ科モモ亜科スモモ属（サクラ属）

//最終表示 
let bara = {
    kanonn:'花音',
    tiyo:'千代',
}

let ichigo = {
    toyonoka:'とよのか',
    totiotome:'とちおとめ',
}
//一階層上

let baraaka = {
    bara:bara,
    kiitigo:'キイチゴ',
    ichigo:ichigo,
}

let momoaka = {
     skura:'サクラ',
     pinattu:'ピーナッツ'
}

let baraka = {
    baraaka:baraaka,
    momoka:momoaka,
}

let gumika = {
     gumi:'グミ',
     turugumi:'ツルグミ',   
}

let baramoku = {
    baraka:baraka,
    gumika:gumika,
}


let mamemoku = {
    mameka:'マメ科',
    himehagika:'ヒメハギ科',
}

let mamegunn = {
    urimoku:'ウリ目',
    mamemoku:mamemoku,
    baramoku:baramoku,
}





let profileA = {
    name: 'Aさん',
    from: 'Tokyo',
    flower: mamegunn.baramoku.baraka.baraaka.bara.kanonn
}



let profiles = [ profileA];

console.log(`Aさんの好きな花は${profiles[0].flower}です`)

//クラスの名前はわかりやすく


//普通の配列で5次元配列を作る

let hokubu = ['本部','今帰仁','名護'];
let tyuubu= ['那覇','浦添',];
let nannbu2 = ['北谷','宜野湾'];
let okinawa = [hokubu,nannbu2,tyuubu];
let kumamoto = ['天草','八代'];
let osaka = ['飛田新地','西城'];
let japan = [okinawa,kumamoto,osaka];
let china = ['ドレス','桃娘'];
let usa = ['DA PUMP','トランプ'];
let earth = [japan,china,usa];
let mars = ['ゴキブリ','コケ'];
let utyu = [earth,mars];

console.log('宿題の確認-------------')
console.log(utyu);
console.log(utyu[0][0][0][2][0]);
//コンソールの方法が分からなかったので確認する

//メソットとは　異なる処理をひと塊りにしてして処理を実行させる
//文法として覚える
//this.from  thisが意味するのはこの箱の中身
//greetuserのgreetを呼び出した結果functionが発動された
console.log('メソット---------------')

let greetuser = {
       food:'sushi',
    age:21,
    from:'沖縄',
    greet:function(name){
        console.log('こんにちは、私の名前は'+ name +'です。出身は' + this.from + 'です。' );
    }
}
greetuser.greet('くによし');

console.log('DOM----------------')
//どのhtmlをいじるのか　スクリプトからいじる
//divタグの変更もここからできます


let test = document.getElementById('test');
console.log(test.textContent);
test.textContent = '変更するよこれに';
console.log(test.textContent);
console.log(test.html);
console.log(test)
console.log(test.id);
console.log(test[0]);
test.style.color = 'blue';
test.style.backgroundColor = 'black';
test.className = 'addclass';
console.log(test);

console.log('イベント-----------------------');
//プログラミングでのイベント＝何かが発生来た時

document.getElementById('btn').addEventListener('click',function(){
     let tag = document.createElement('p');
     let text = document.createTextNode('はいさいjs');
     document.body.appendChild(tag).appendChild(text);
})


window.onload = function(){
    //あら〜とボタンが押された
    document.getElementById('alertbtn').onclick = function(){
        window.alert('アラートボタンが押されました。500万払ってください。');
    }
}

function btn_click(){
    window.alert('怪しいボタンがクリックされました。')
}

// window.onload= 画面が読み込まれたタイミンぐでファンクションを動かす
//(function)を読み込んだよ


//宿題の答え合せ

function btn_click_h(){
        let tagp = document.cleateElement('p');
        let textp = document.cleateTextNode('こんにちは');
        document.body.appendChild(tagp).appendChild(textp);
    }


//for分は条件を満たすまで処理を続ける

console.log('for in-------------------');
let prices = {
    apple:150,
    grape:300,
    banana:200
}

for(key in prices){
    console.log(prices[key]);
}
//値が変わるであろう連装配列の値の取り出し方

console.log('for of-----------');

let hobbies = ['music','moto','fishing','banana','apple'];

for(value of hobbies){
    console.log(value);
}



















