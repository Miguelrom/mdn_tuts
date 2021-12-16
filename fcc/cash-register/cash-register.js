function checkCashRegister(price, cash, cid) {

  let change = cash - price;
  let cidCopy = cid.map(x => [x[0], x[1]]);
  let transaction = {status: "", change: []}
  const PENNY = 0, NICKEL = 1, DIME = 2, QUARTER = 3, 
  DOLLAR = 4, FIVE = 5, TEN = 6, TWENTY = 7, HUNDRED = 8;

  let pennies = cid[0], nickels = cid[1], 
  dimes = cid[2], quarters = cid[3], 
  ones = cid[4], fives = cid[5], tens = cid[6],
  twenties = cid[7], hundreds = cid[8];

  function isEmpty(){
    return cid.every((elem) => elem[1] === 0);
  }

  if (change < 0.05){

    if (cid[0][1] >= change){
      pennies[1] -= change;
      transaction.change.push(["PENNY", change]);
      if (isEmpty()){
        transaction.status = "CLOSED";  
        transaction.change.push(cidCopy);
      }else{
        transaction.status = "OPEN";
      }
      
    }else {
      transaction.status = "INSUFFICIENT_FUNDS";
      transaction.change = [];
    }

  }else if (change < 0.1){

    if (cid[NICKEL][1] + cid[0][1] >= change){
      if (cid[NICKEL][1] > 0){
        cid[NICKEL][1] -= 0.05;
        change -= 0.05;
        transaction.change.push(["NICKEL", 0.05]);
      }

      if (change > 0){
        cid[PENNY][1] -= change;
        transaction.change.push(["PENNY", change]);
      }

      if (isEmpty()){
          transaction.status = "CLOSED";
          transaction.change = cidCopy;
        }else{
          transaction.status = "OPEN";
        }

    }else{
      transaction.status = "INSUFFICIENT_FUNDS";
      transaction.change = [];
    }

  }else if (change < 0.25){

    if (dimes[1] + nickels[1] + pennies[1] >= change){
      let partial = 0;
      if (dimes[1] > 0){
        partial = Math.floor(change / 0.1) * 0.1;
        dimes[1] -= partial;
        change -= partial;
        transaction.change.push(["DIME", partial]);
      }
      if (change > 0 && nickels[1] > 0){
        partial = Math.floor(change / 0.05) * 0.05;
        nickels[1] -= partial;
        change -= partial;
        transaction.change.push(["NICKEL", partial]);
      }
      if (change > 0 && pennies[1] > 0){
        partial = Math.floor(change / 0.01) * 0.01;
        pennies[1] -= partial;
        change -= partial;
        transaction.change.push(["PENNY", partial]);
      }
      if (isEmpty()){
        transaction.status = "CLOSED";
        transaction.change = cidCopy;
      }else{
        transaction.status = "OPEN";
      }

    }else{
      transaction.status = "INSUFFICIENT_FUNDS";
      transaction.change = [];
    }

  }else if (change < 1){

    if (quarters[1] + dimes[1] + nickels[1] + 
    pennies[1] >= change){
      let partial = 0;
      if (quarters[1] > 0){
        partial = Math.floor(change / 0.25) * 0.25;
        quarters[1] -= partial;
        change -= partial;
        transaction.change.push(["QUARTER", partial]);
      }
      if (change > 0 && dimes[1] > 0){
        partial = Math.floor(change / 0.1) * 0.1;
        dimes[1] -= partial;
        change -= partial;
        transaction.change.push(["DIME", partial]);
      }
      if (change > 0 && nickels[1] > 0){
        partial = Math.floor(change / 0.05) * 0.05;
        nickels[1] -= partial;
        change -= partial;
        transaction.change.push(["NICKEL", partial]);
      }
      if (change > 0 && pennies[1] > 0){
        partial = Math.floor(change / 0.01) * 0.01;
        pennies[1] -= partial;
        change -= partial;
        transaction.change.push(["PENNY", partial]);
      }
      if (isEmpty()){
        transaction.status = "CLOSED";
        transaction.change = cidCopy;
      }else{
        transaction.status = "OPEN";
      }

    }else{
      transaction.status = "INSUFFICIENT_FUNDS";
      transaction.change = [];
    }

  }else if (change < 5){

    if (ones[1] + quarters[1] + dimes[1] + nickels[1] + 
    pennies[1] >= change){
      let partial = 0;
      if (ones[1] > 0){
        partial = Math.floor(change);
        ones[1] -= partial;
        change -= partial;
        transaction.change.push(["ONE", partial]);
      }
      if (change > 0 && quarters[1] > 0){
        partial = Math.floor(change / 0.25) * 0.25;
        quarters[1] -= partial;
        change -= partial;
        transaction.change.push(["QUARTER", partial]);
      }
      if (change > 0 && dimes[1] > 0){
        partial = Math.floor(change / 0.1) * 0.1;
        dimes[1] -= partial;
        change -= partial;
        transaction.change.push(["DIME", partial]);
      }
      if (change > 0 && nickels[1] > 0){
        partial = Math.floor(change / 0.05) * 0.05;
        nickels[1] -= partial;
        change -= partial;
        transaction.change.push(["NICKEL", partial]);
      }
      if (change > 0 && pennies[1] > 0){
        partial = Math.floor(change / 0.01) * 0.01;
        pennies[1] -= partial;
        change -= partial;
        transaction.change.push(["PENNY", partial]);
      }
      if (isEmpty()){
        transaction.status = "CLOSED";
        transaction.change = cidCopy;
      }else{
        transaction.status = "OPEN";
      }

    }else{
      transaction.status = "INSUFFICIENT_FUNDS";
      transaction.change = [];
    }

  }else if (change < 10){

    if (fives[1] + ones[1] + quarters[1] + 
    dimes[1] + nickels[1] + pennies[1] >= change){
      let partial = 0;
      if (fives[1] >= 5){
        partial = 5;
        fives[1] -= partial;
        change -= partial;
        transaction.change.push(["FIVE", partial]);
      }
      if (change > 0 && ones[1] > 0){
        partial = Math.floor(change);
        ones[1] -= partial;
        change -= partial;
        transaction.change.push(["ONE", partial]);
      }
      if (change > 0 && quarters[1] > 0){
        partial = Math.floor(change / 0.25) * 0.25;
        quarters[1] -= partial;
        change -= partial;
        transaction.change.push(["QUARTER", partial]);
      }
      if (change > 0 && dimes[1] > 0){
        partial = Math.floor(change / 0.1) * 0.1;
        dimes[1] -= partial;
        change -= partial;
        transaction.change.push(["DIME", partial]);
      }
      if (change > 0 && nickels[1] > 0){
        partial = Math.floor(change / 0.05) * 0.05;
        nickels[1] -= partial;
        change -= partial;
        transaction.change.push(["NICKEL", partial]);
      }
      if (change > 0 && pennies[1] > 0){
        partial = Math.floor(change / 0.01) * 0.01;
        pennies[1] -= partial;
        change -= partial;
        transaction.change.push(["PENNY", partial]);
      }
      if (isEmpty()){
        transaction.status = "CLOSED";
        transaction.change = cidCopy;
      }else{
        transaction.status = "OPEN";
      }

    }else{
      transaction.status = "INSUFFICIENT_FUNDS";
      transaction.change = [];
    }

  }else if (change < 20){

    if (tens[1] + fives[1] + ones[1] + 
    quarters[1] + dimes[1] + nickels[1] + 
    pennies[1] >= change){
      let partial = 0;
      if (tens[1] >= 10){
        partial = 10;
        tens[1] -= partial;
        change -= partial;
        transaction.change.push(["TEN", partial]);
      }
      if (change > 0 && fives[1] >= 5){
        partial = 5;
        fives[1] -= partial;
        change -= partial;
        transaction.change.push(["FIVE", partial]);
      }
      if (change > 0 && ones[1] > 0){
        partial = Math.floor(change);
        ones[1] -= partial;
        change -= partial;
        transaction.change.push(["ONE", partial]);
      }
      if (change > 0 && quarters[1] > 0){
        partial = Math.floor(change / 0.25) * 0.25;
        quarters[1] -= partial;
        change -= partial;
        transaction.change.push(["QUARTER", partial]);
      }
      if (change > 0 && dimes[1] > 0){
        partial = Math.floor(change / 0.1) * 0.1;
        dimes[1] -= partial;
        change -= partial;
        transaction.change.push(["DIME", partial]);
      }
      if (change > 0 && nickels[1] > 0){
        partial = Math.floor(change / 0.05) * 0.05;
        nickels[1] -= partial;
        change -= partial;
        transaction.change.push(["NICKEL", partial]);
      }
      if (change > 0 && pennies[1] > 0){
        partial = Math.floor(change / 0.01) * 0.01;
        pennies[1] -= partial;
        change -= partial;
        transaction.change.push(["PENNY", partial]);
      }
      if (isEmpty()){
        transaction.status = "CLOSED";
        transaction.change = cidCopy;
      }else{
        transaction.status = "OPEN";
      }

    }else{
      transaction.status = "INSUFFICIENT_FUNDS";
      transaction.change = [];
    }

  }else if (change < 100){
    
    if (twenties[1] + tens[1] + fives[1] + ones[1] + 
    quarters[1] + dimes[1] + nickels[1] + 
    pennies[1] >= change){
      let partial = Math.floor(change / 20) * 20;
      if (twenties[1] >= partial){
        twenties[1] -= partial;
        change -= partial;
        transaction.change.push(["TWENTY", partial]);
      }else if (twenties[1] > 0){
        partial = twenties[1]
        change -= partial;
        transaction.change.push(["TWENTY", partial]);
        twenties[1] = 0;
      }

      partial = Math.floor(change / 10) * 10;
      if (change > 0 && partial > 0 && 
          tens[1] >= partial){
        tens[1] -= partial;
        change -= partial;
        transaction.change.push(["TEN", partial]);
      }else if (change > 0 && partial > 0 && 
          tens[1] > 0){
        change -= tens[1];
        transaction.change.push(["TEN", tens[1]]);
        tens[1] = 0;
      }

      partial = Math.floor(change / 5) *  5;
      if (change > 0 && partial > 0 && 
          fives[1] >= partial){
        fives[1] -= partial;
        change -= partial;
        transaction.change.push(["FIVE", partial]);
      }else if (change > 0 && partial > 0 && 
        fives[1] > 0){
          change -= fives[1];
          transaction.change.push(["FIVE", fives[1]]);
          fives[1] = 0;
      }

      partial = Math.floor(change);
      if (change > 0 && partial > 0 
          && ones[1] >= partial){
        ones[1] -= partial;
        change -= partial;
        transaction.change.push(["ONE", partial]);
      }else if (change > 0 && partial > 0 
          && ones[1] > 0){
        change -= ones[1];
        transaction.change.push(["ONE", ones[1]]);
        ones[1];
      }

      partial = Math.floor(change / 0.25) * 0.25;
      if (change > 0 && partial > 0 && 
          quarters[1] >= partial){
        partial = Math.floor(change / 0.25) * 0.25;
        quarters[1] -= partial;
        change -= partial;
        transaction.change.push(["QUARTER", partial]);
      }else if (change > 0 && partial > 0 && 
          quarters[1] > 0){
        change -= quarters[1];
        transaction.change.push(["QUARTER", 
        quarters[1]]);
        quarters[1] = 0;
      }

      partial = Math.floor(change / 0.1) * 0.1;
      if (change > 0 && partial > 0 && 
          dimes[1] >= partial){
        dimes[1] -= partial;
        change -= partial;
        transaction.change.push(["DIME", partial]);
      }else if (change > 0 && partial > 0 && 
          dimes[1] > 0){
        change -= dimes[1];
        transaction.change.push(["DIME", partial]);
        dimes[1] = 0;
      }

      partial = Math.floor(change / 0.05) * 0.05;
      if (change > 0 && partial > 0 && 
          nickels[1] >= partial){
        nickels[1] -= partial;
        change -= partial;
        transaction.change.push(["NICKEL", partial]);
      }else if (change > 0 && partial > 0 && 
          nickels[1] > 0){
        change -= nickels[1];
        transaction.change.push(["NICKEL", partial]);
        nickels[1];
      }

      if (change > 0 && pennies[1] >= change){
        partial = parseFloat(change.toPrecision(3));
        pennies[1] -= partial;
        change -= 0;
        transaction.change.push(["PENNY", partial]);
      }

      if (isEmpty()){
        transaction.status = "CLOSED";
        transaction.change = cidCopy;
      }else{
        transaction.status = "OPEN";
      }

    }else{
      transaction.status = "INSUFFICIENT_FUNDS";
      transaction.change = [];
    }

  }
  
  return transaction;
}

window.onload = (event) => {
  let price = 19.5;
  let cash = 20;
  let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
  ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], 
  ["TWENTY", 60], ["ONE HUNDRED", 100]];
  let price3 = 3.26;
  let cash3 = 100;
  let cid3 = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
  ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], 
  ["TWENTY", 60], ["ONE HUNDRED", 100]]
  let cid6 = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
  ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], 
  ["TWENTY", 0], ["ONE HUNDRED", 0]]

  const p = document.querySelector("p");
  
  let transaction = checkCashRegister(price, cash, cid6);
  console.log(transaction)
  //console.log(checkCashRegister(price3, cash3, cid3))
  p.textContent = transaction.change;
}
