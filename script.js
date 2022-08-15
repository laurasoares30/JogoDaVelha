var player ="mario";
var numDeJogadas = 0;


function checkjogo(id){

    var opt = verificaSrc(id);
    var pc = document.getElementById('cpu').checked;

    if(opt == "transp.png"){
        document.getElementById(id).src = "assets/img/" + player + ".png";

        numDeJogadas++;

        
        if(numDeJogadas >= 9){
        alert("empate");
        return false;};

        if(vencer()){
           alert('O ' + player + " ganhou!!");
            return false;};

        if(player == "mario"){player ="yoshi";}
        else{player = "mario";};
    } 

    if(pc && player == "yoshi"){
        checkjogo(jogoDoPc());
    }
    
}

function jogoDoPc(){
    if(verificaSrc('coluna5')=='transp.png'){
        return 'coluna5';
    }return 'coluna' + Math.floor((Math.random() * 9) + 1);

}

function verificaSrc(id){
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}


function vencer(){

    if((verificaSrc('coluna1') == verificaSrc('coluna2'))&&(verificaSrc('coluna1') == verificaSrc('coluna3'))&&(verificaSrc('coluna1') != "transp.png")){return true;};
    if((verificaSrc('coluna4') == verificaSrc('coluna5'))&&(verificaSrc('coluna4') == verificaSrc('coluna6'))&&(verificaSrc('coluna4') != "transp.png")){return true;};
    if((verificaSrc('coluna7') == verificaSrc('coluna8'))&&(verificaSrc('coluna7') == verificaSrc('coluna9'))&&(verificaSrc('coluna7') != "transp.png")){return true;};

    if((verificaSrc('coluna1') == verificaSrc('coluna4'))&&(verificaSrc('coluna1') == verificaSrc('coluna7'))&&(verificaSrc('coluna1') != "transp.png")){return true;};
    if((verificaSrc('coluna2') == verificaSrc('coluna5'))&&(verificaSrc('coluna2') == verificaSrc('coluna8'))&&(verificaSrc('coluna2') != "transp.png")){return true;};
    if((verificaSrc('coluna3') == verificaSrc('coluna6'))&&(verificaSrc('coluna3') == verificaSrc('coluna9'))&&(verificaSrc('coluna3') != "transp.png")){return true;};

    if((verificaSrc('coluna1') == verificaSrc('coluna5'))&&(verificaSrc('coluna1') == verificaSrc('coluna9'))&&(verificaSrc('coluna1') != "transp.png")){return true;};
    if((verificaSrc('coluna3') == verificaSrc('coluna5'))&&(verificaSrc('coluna3') == verificaSrc('coluna7'))&&(verificaSrc('coluna3') != "transp.png")){return true;};
    return false;
    // 1 2 3
    // 4 5 6
    // 7 8 9
}


// function reset(){
//     for(i = 1; i <= 9; i++){
//         var a = 'coluna'+i;
//         document.getElementById(a).src = "assets/img/transp.png";
//     };
//     return false;
// }
