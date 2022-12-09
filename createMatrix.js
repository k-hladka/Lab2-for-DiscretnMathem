let field1 = document.getElementById('field1');
let field2 = document.getElementById('field2');
let button = document.querySelector('button');
let x=0;
button.addEventListener('click', function(e){
    if(x===0){
        e.preventDefault();
        let array1 = field1.value.split(',');
        let array2 = field2.value.split(',');
        let div = createMatrix(array1, array2);
        document.body.append(div);
        x=1;
    }
});
function createMatrix(array1, array2){
    let div = document.createElement('div');
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array2.length; j++){
            if(j!==0)
                div.append(' ');
            if(( (+array1[i]) + (+array2[j]))%2 === 0)
                div.append('1');
            else
                div.append('0');
        }
        div.append(document.createElement('br'));
    }
    return div;
}