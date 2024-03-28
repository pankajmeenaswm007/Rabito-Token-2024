window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("nav").style.backgroundColor = "#081526";
        document.getElementById("nav").style.margin="0px"; 
        document.getElementById("nav").style.padding="10px"; 
        
      } else {
          document.getElementById("nav").style.backgroundColor = "transparent";
          document.getElementById("nav").style.margin="15px"; 
          document.getElementById("nav").style.padding="0px"; 


      }
    
    if(document.body.scrollTop>150 || document.documentElement.scrollTop>150)
    {
        document.getElementById("arrowbtn").style.display="inline";
        
    }
    else{
      document.getElementById("arrowbtn").style.display="none";

   }
}

window.onload=()=>show();
function show()
{
    xclock=new Date();
    hour.innerHTML=xclock.getHours();    
    minute.innerHTML=xclock.getMinutes();
    second.innerHTML=xclock.getSeconds();
    setTimeout("show()",10)
}


let account;

function connect(){
    if(window.ethereum){
        window.ethereum.request({
            method:'eth_requestAccounts'
        }).then(
            result=>{
                console.log(result[0])
                account=result[0]
                connect.innerHTML="Connected"
                address.innerHTML=result[0]
                checkblnc();
            }
        );
    }
}

function checkblnc(){
    let balance=window.ethereum.request({
        method:'eth_getBalance',
        params:[
            account[0],
            'letest'
        ]
    }).catch((err)=>{
        console.log(err)
    })

}


// send transition
if(window.ethereum.networkVersion==10){
async function buy(){
connect()
let transitionParam={
    to:"0xe25613114cB913FFbE2cd32a2ebF12370EBFa2fA",
    from:account,
    value:"0x38D7EA4C68000",

};

window.ethereum.request({
    method:"eth_sendTransaction",params:[transitionParam]
}).then(txhash=>{

    console.log(txhash);
    checkTranstionConfrim(txhash).then(r=>{alert(r)});
});

}
}

function checkTranstionConfrim(){

    let checkTranstionLoop=()=>{
        return ethereum.request({
            method:"eth_getTransactionReceipt",
            params:[txhash]
        }).then(r=>{

            if(r!=null){
                return 'Confrimed'
            }
            else return checkTranstionLoop();
        });
    }

    return checkTranstionLoop();
}




// review

