var money = 0;
var moneyOverLifetime = 0;
var amountPerClick = 1;
var costToUpgrade;

var currentMoney;
var currentPizzaPrice;
var priceSpan;
var progressText;

var messageList = ["cool!",
"good!",
"wow!",
"yeah!",
"karen took the kids please its been 5 years karen please give them back im begging you",
"great!"]

window.onload = function () {
  currentMoney = document.getElementById('moneyValue');
  currentPizzaPrice = document.getElementById('currentPizzaPrice');
  priceSpan = document.getElementById('priceSpan');
  progressText = document.getElementById('progressText');
  progressText.innerHTML = messageList[0];
}
  

function addMoney(amountToAdd){
  money += amountToAdd;
  moneyOverLifetime += amountToAdd;
  currentMoney.innerHTML = money;
  updateProgressMessage();
}

function deductMoney(amountToDeduct){
  money -= amountToDeduct;
  currentMoney.innerHTML = money;
}

function increaseSellingPrice(){
  costToUpgrade = 30 * parseInt(currentPizzaPrice.innerHTML)
  
  if (money >= costToUpgrade){
    deductMoney(costToUpgrade);
    amountPerClick += 1;
    currentPizzaPrice.innerHTML = amountPerClick;
  }
  costToUpgrade = 30 * parseInt(currentPizzaPrice.innerHTML);
  priceSpan.innerHTML = "($" + costToUpgrade + ")";
}

function updateProgressMessage() {
  if (moneyOverLifetime >= 3000)
    progressText.innerHTML = messageList[1];
  else if (moneyOverLifetime >= 10000)
    progressText.innerHTML = messageList[2];
  else if (moneyOverLifetime >= 15000)
    progressText.innerHTML = messageList[3];
  else if (moneyOverLifetime >= 20000)
    progressText.innerHTML = messageList[4];
  else if (moneyOverLifetime >= 25000)
    progressText.innerHTML = messageList[5];
  else if (moneyOverLifetime >= 30000)
    progressText.innerHTML = messageList[6];
}