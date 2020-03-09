const scriptURL = 'https://script.google.com/macros/s/AKfycbyEIgiOc3v_e6mn5Asz-7ELmsSSfIvV1XSv5LmDDID2Onn2Ldxf/exec'
const form = document.forms['submit-to-google-sheet'];
list = document.getElementById("climaLaboralForm");
a = list.getElementsByTagName('LI');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        console.log('Success!', response);
        document.getElementById('modalTitle').innerHTML = "Guardado";
        document.getElementById('modalBody').innerHTML = "Gracias por su participación";
        document.getElementById('modalBtn').innerHTML = "Ok."
        document.getElementById('modalBtn').className = "btn btn-primary";
    })
    .catch(error => {
        console.error('Error!', error.message);
        document.getElementById('modalTitle').innerHTML = "Error";
        document.getElementById('modalBody').innerHTML = "Hubo un error en su envío. Intente de nuevo.";
        document.getElementById('modalBtn').innerHTML = "Cerrar"
        document.getElementById('modalBtn').className = "btn btn-secondary";
    })
});


// ===================================================================================

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(f) {
        f.addEventListener('submit', function(event) {
            if (f.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
            f.classList.add('was-validated');
        }, false);
        });
    }, false);
    })();


// ===================================================================================


function validateForm() {
    var count = 0;
    for(let i = 1; i <= a.length; i++) {
        var index = document.forms["submit-to-google-sheet"][`preg${i}`].options.selectedIndex;
        var value = document.forms["submit-to-google-sheet"][`preg${i}`].options[index].value;
        if (value != "") {
            if(count < a.length) {
                count ++;
                if(count === a.length) {
                    document.getElementById("btn_sent").disabled = false;
                }
            }
        }
    }
    
  }

function sortList() {
    // var list, a, b, randArray=[];
    // var max = 1;
    // var min = -1;
    // list = document.getElementById("climaLaboralForm");
    // a = list.getElementsByTagName('LI'); 
    // b = Array.prototype.slice.call( a, 0 ).sort( (x,y) => { 
    //   return Math.floor(Math.random()* (max - min + 1)) + min;
    //  });
    // for ( var i = 0; i < b.length; i++) {
    //   a[i].innerHTML = Array.prototype.;
    // }
    }
    // function sortList() {
    //   var list, a, b, randArray=[];
    //   list = document.getElementById("climaLaboralForm");
    //   a = list.getElementsByTagName('LI'); 
    //   b = JSON.parse(JSON.stringify(Array.prototype.slice.call( a, 0 )));
    //   b.forEach((element) => {
    //     pushToArrays(randArray, element);
    //   });
    //   reSort(randArray, a, b);
    //   // for ( var i = 0; i < randArray.length; i++) {
    //   //   a[randArray[i]].innerHTML = aux[i].innerHTML;
    //   // }
    // }

    // function pushToArrays(randArray, element) {
    //   randNumber = Math.floor(Math.random()*78);
    //   if (!randArray.includes(randNumber)) {
    //     randArray.push(randNumber);
    //   }
    //   else {
    //     pushToArrays(randArray, element);
    //   }
    // }

    // function reSort(randArray, a, b) {
    //   var aux=[]
    //   console.log(a);
    //   randArray.forEach((ind,i) => {
    //     console.log(ind);
    //     console.log(b[i]);
    //     console.log(a[i]);
    //     aux.push(b[ind]);
    //     a[i].innerHTML = JSON.parse(JSON.stringify(aux[i].innerHTML));
    //   });
    // }
