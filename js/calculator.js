        function getAverage()
        {
            var grade1=parseFloat(document.getElementById('grade1').value);
            var grade2=parseFloat(document.getElementById('grade2').value);
            var grade3=parseFloat(document.getElementById('grade3').value);
            var grade4=parseFloat(document.getElementById('grade4').value);
            var grade5=parseFloat(document.getElementById('grade5').value);
            var grade6=parseFloat(document.getElementById('grade6').value);
            var grade7=parseFloat(document.getElementById('grade7').value);
            var grade8=parseFloat(document.getElementById('grade8').value);
            var grade9=parseFloat(document.getElementById('grade9').value);
            var grade10=parseFloat(document.getElementById('grade10').value);
            var grade11=parseFloat(document.getElementById('grade11').value);
            var grade12=parseFloat(document.getElementById('grade12').value);
            var grade13=parseFloat(document.getElementById('grade13').value);
            var grade14=parseFloat(document.getElementById('grade14').value);
            var grade15=parseFloat(document.getElementById('grade15').value);

            var weights1=parseFloat(document.getElementById('weights1').value);
            var weights2=parseFloat(document.getElementById('weights2').value);  
            var weights3=parseFloat(document.getElementById('weights3').value); 
            var weights4=parseFloat(document.getElementById('weights4').value); 
            var weights5=parseFloat(document.getElementById('weights5').value); 
            var weights6=parseFloat(document.getElementById('weights6').value); 
            var weights7=parseFloat(document.getElementById('weights7').value); 
            var weights8=parseFloat(document.getElementById('weights8').value); 
            var weights9=parseFloat(document.getElementById('weights9').value); 
            var weights10=parseFloat(document.getElementById('weights10').value); 
            var weights11=parseFloat(document.getElementById('weights11').value); 
            var weights12=parseFloat(document.getElementById('weights12').value); 
            var weights13=parseFloat(document.getElementById('weights13').value); 
            var weights14=parseFloat(document.getElementById('weights14').value); 
            var weights15=parseFloat(document.getElementById('weights15').value); 

            var total1 = grade1 * weights1;
            var total2 = grade2 * weights2;
            var total3 = grade3 * weights3;
            var total4 = grade4 * weights4;
            var total5 = grade5 * weights5;
            var total6 = grade6 * weights6;
            var total7 = grade7 * weights7;
            var total8 = grade8 * weights8;
            var total9 = grade9 * weights9;
            var total10 = grade10 * weights10;
            var total11 = grade11 * weights11;
            var total12 = grade12 * weights12;
            var total13 = grade13 * weights13;
            var total14 = grade14 * weights14;
            var total15 = grade15 * weights15;

            var totalall = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14 + total15;

            var totalweights = weights1 + weights2 + weights3 + weights4 + weights5 + weights6 + weights7 + weights8 + weights9 +weights10 +weights11 +weights12 +weights13 +weights14 +weights15;


            var display=document.getElementById('total');

            display.innerHTML='Your Final Grade Is: ' + totalall / totalweights;
        }