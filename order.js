let itemorder = [
    {
        dipesan : false,
        harga : 15000,
        nama : 'bakso',
    },
    {
        dipesan : false,
        harga : 25000,
        nama : 'nasgor',
    },
    {
        dipesan : false,
        harga : 10000,
        nama : 'wedang jahe',
    }
]

let totalorder = 0;

const itemterpilih = document.getElementsByClassName('item');

const texttotal = document.getElementById('last-item');

for(let i = 0; i < itemterpilih.length; i++){
    itemterpilih[i].addEventListener('click', function () {
        setitempemesanan(i, itemterpilih[i]);
    });
}

function setitempemesanan(index, elemen){
    if(itemorder[index].dipesan == false){
        itemorder[index].dipesan = true;
        elemen.style.backgroundColor = "brown";
        elemen.style.color = "white";
        totalorder = totalorder + itemorder[index].harga;
    }else{
        itemorder[index].dipesan = false;
        elemen.style.backgroundColor = "aqua";
        elemen.style.color = "black";
        totalorder = totalorder - itemorder[index].harga;
        }
        texttotal.innerHTML = 'total <span>Rp ' + totalorder + '</span>';
}