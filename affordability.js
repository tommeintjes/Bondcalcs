// JavaScript Document

            function reCalc()
            {
                var income, expenses, liquid, rate, qualify;
                income = document.getElementById('nettincome').value;
                expenses = document.getElementById('expenses').value;
                liquid = income - expenses;
                rate = document.getElementById('rate').options[document.getElementById('rate').selectedIndex].value;
                qualify = getMaxLoan(liquid,rate);


                document.getElementById('qualify').innerHTML = 'R ' + rounding(qualify);
                document.getElementById('selectedrate').innerHTML = rate;

                document.getElementById('15yrs').innerHTML = 'R ' + rounding(rePayment(qualify, rate, 15)) + ' pm';
                document.getElementById('20yrs').innerHTML = 'R ' + rounding(rePayment(qualify, rate, 20)) + ' pm';
                document.getElementById('25yrs').innerHTML = 'R ' + rounding(rePayment(qualify, rate, 25)) + ' pm';
                document.getElementById('30yrs').innerHTML = 'R ' + rounding(rePayment(qualify, rate, 30)) + ' pm';

            }
            function getMaxLoan(liquid, rate)
            {
                var j, qualify;
                j = rate/1200;
                qualify = ((liquid)*0.470054)/(j/(1-(Math.pow((j+1),-(12*20)))));
                return qualify;
            }
            function rePayment(qualify, rate, term)
            {
                var j, monthly;
                j = rate/1200;
                monthly = qualify * (j/(1-(1/(Math.pow((j+1), (term*12))))));
                return monthly;
            }

            function rounding(n)
            {
                pennies = n * 100 ;
                pennies = Math.round(pennies) ;
                strPennies = "" + pennies ;
                len = strPennies.length ;
                if(len<=1){
                    return '0.0'+strPennies;
                }else if(len<=2){
                    return "0." + strPennies.substring((len - 2), len);
                }else if(len<=5){
                    return strPennies.substring(0, len - 2) + "." + strPennies.substring((len - 2), len);
                }else if(len<=8){
                    return strPennies.substring(0, len - 5) + " " + strPennies.substring(len -5, len - 2) + "." + strPennies.substring((len - 2), len);
                }else if(len<=11){
                    return strPennies.substring(0, len - 8) + " " + strPennies.substring(len -8, len - 5) + " " + strPennies.substring(len -5, len - 2) + "." + strPennies.substring((len - 2), len);
                }else{
                    return strPennies.substring(0, len - 8) + " " + strPennies.substring(len -8, len - 5) + " " + strPennies.substring(len -5, len - 2) + "." + strPennies.substring((len - 2), len);
                }
            }
