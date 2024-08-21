function ShowName()
{
    var p = document.getElementById("text1");
    alert(p.innerText);
    var sumR = Sum(3,"abacate");
    alert(sumR);
}

function Sum(a,b)
{
    var resultado = a+b;
    alert(resultado);
    console.log(typeof(resultado));
    ShowNumbersFrom1to10();
}
function ShowNumbersFrom1to10()
{
    for(var i = 0; i<10;i++)
    {
        console.log(i);
    }
}