document.getElementById('btn').onclick = function() {
    let str = document.getElementById('str').value;
    let capped = str[0].toUpperCase() + str.slice(1);

    document.getElementById('res').innerHTML = capped ;
}
