//Эта функция будет переводить доллоры в рубли.
//Мы её задали параметр valNum
//Потом она обращается к строке на сайте(RUB) через её айдишник. (document.getElementById('outputrub'))
//И затем она выводит результат умножения цифры, которую мы вбили на 60 в RUB.

function conventerMany(valNum) {
//Эта функция будет переводить доллоры в рубли.
//Мы её задали параметр valNum
    document.getElementById('outputrub').innerHTML = valNum * 60;
//Потом она обращается к строке на сайте(RUB) через её айдишник. (document.getElementById('outputrub'))
//И затем она выводит результат умножения цифры, которую мы вбили на 60 в RUB.
};

//немного CSS и отлично.
//Спасибо за идею Web Developer Blog.