function showpay() {
 if ((document.calc.loan.value == null || document.calc.loan.value.length == 0) ||
     (document.calc.months.value == null || document.calc.months.value.length == 0)
||
     (document.calc.rate.value == null || document.calc.rate.value.length == 0))
 { document.calc.pay.value = "Incomplete data";
 }
 else
 {
 var princ = document.calc.loan.value;
 var term  = document.calc.months.value;
 var intr   = document.calc.rate.value / 1200;
 
  var pay = princ * intr / (1 - (Math.pow(1/(1 + intr), term*12)));
  document.calc.pay.value = Math.round(pay*100)/100;

 }

// payment = principle * monthly interest/(1 - (1/(1+MonthlyInterest)*Months))

}
