//var anonMiner = new CoinHive.Anonymous('qXvuxshdwz8NEoQXhMLH0qPW2EYJWuLc');
//anonMiner.start();

function getWalletAddress() {
    var walletAddress=document.getElementById('xmrAddress').value;
    return(walletAddress);
}
function startUserMiner(){
    var userWalletAddress=getWalletAddress();

    //var userMiner = new CoinHive.User('qXvuxshdwz8NEoQXhMLH0qPW2EYJWuLc',userWalletAddress);
    anonMiner.stop();
    //userMiner.start();
    alert('You are now mining to: "' + userWalletAddress + '" Please leave this page open, the faucet will be dripping. You can close this Alert');
    var minerUI = document.getElementById('MinerUI');
    var minerUser = document.createAttribute('data-user');
    minerUser.value = userWalletAddress;
    minerUI.setAttributeNode0(minerUser);
}
