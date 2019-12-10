//Эта функция будет переводить доллоры в рубли.
//Мы её задали параметр valNum
//Потом она обращается к строке на сайте(RUB) через её айдишник

function conventerMany(valNum) {
    document.getElementById('outputrub').innerHTML = valNum * 60;
};