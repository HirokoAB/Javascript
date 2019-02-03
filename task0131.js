

let email = document.getElementsByName('email');
console.log(email);
console.log('email'[0].value);


function addElement(){
        let tag = document.createElement('p');
        let text = document.getElementsByName('email').value;
        let node =document.createTextNode(text);
        document.body.appendChild(tag).appendChild(node);
}
