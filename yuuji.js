console.log('５次元配列---------------------');

// うるま市を北部・南部・東部で詳細設定
let uruma = {
  north:'石川',
  south:'具志川',
  east:'与勝'
}

// 沖縄県を北部・中部・南部で詳細設定
let okinawa = {
  hokubu: '名護',
  tyubu: uruma,
  nanbu: '那覇'
}

// 日本を東北・関東・九州で詳細設定
let japan = {
  tohoku: '宮城',
  kanto: '東京',
  kyusyu: okinawa
}

// 出身地を世界の地域（アジア・ヨーロッパ・アフリカ）で詳細設定
let country = {
  asia: japan,
  eu: 'フランス',
  africa: 'エジプト'
}

// ４名のプロフィールを設定
let profile1 = {
  name: '阿部さん',
  age: 18,
  from: country.asia.tohoku
}

let profile2 = {
  name: 'やけゆう',
  age: 19,
  from: country.asia.kyusyu.tyubu.south
}

let profile3 = {
  name:'なおきさん',
  age: 20,
  from: country.asia.kanto
}

let profile4 = {
  name: '車さん',
  age: 21,
  from: country.asia.kanto
}

// 「profiles」変数に４人のプロフィール情報を配列として格納
let profiles = [profile1, profile2, profile3, profile4];

// 安倍さん(profile1)のプロフィールを出力
console.log(profiles[0]);

// やけゆう(profile2)の出身地を出力
console.log(`やけゆうの出身地は${profiles[1].from}です`);

// なおきさん(profile3)の出身地を出力
console.log("なおきさんの出身地は" + profiles[2].from + "です");

// 車さんの(profile4)のプロフィールを出力
console.log(`${profiles[3].name}は${profiles[3].age}歳です`);