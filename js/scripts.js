$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    const Q1 = parseInt($("input:radio[name=question1]:checked").val());
    const Q2 = parseInt($("input:radio[name=question2]:checked").val());
    const Q3 = parseInt($("input:radio[name=question3]:checked").val());
    const Q4 = parseInt($("input:radio[name=question4]:checked").val());
    const Q5 = parseInt($("input:radio[name=question5]:checked").val());
    const Q6 = parseInt($("input:radio[name=question6]:checked").val());
    const Q7 = parseInt($("input:radio[name=question7]:checked").val());
    const Q8 = parseInt($("input:radio[name=question8]:checked").val());
    const Q9 = parseInt($("input:radio[name=question9]:checked").val());
    const Q10 = parseInt($("input:radio[name=question10]:checked").val());
    const Q11 = parseInt($("input:radio[name=question11]:checked").val());
    const Q12 = parseInt($("input:radio[name=question12]:checked").val());
    const Q13 = parseInt($("input:radio[name=question13]:checked").val());
    const Q14 = parseInt($("input:radio[name=question14]:checked").val());
    const Q15 = parseInt($("input:radio[name=question15]:checked").val());
    const Q16 = parseInt($("input:radio[name=question16]:checked").val());
    
    if (!Q1 || !Q2 || !Q3 || !Q4 || !Q5 || !Q6 || !Q7 || !Q8 || !Q9 || !Q10|| !Q11|| !Q12|| !Q13|| !Q14|| !Q15|| !Q16) {
      alert("Answer all the questions!");
    } else {
      let stepMercury = 0;
      let stepVenus = 0;
      let stepEarth = 0;
      let stepMars = 0;
      let stepJupiter = 0;
      let stepSaturn = 0;
      let stepUranus = 0;
      let stepNeptune = 0;
      if (Q1 === 1) {
        stepMercury, stepVenus += 1;
      } else if (Q1 === 2) {
        stepEarth, stepMars, stepJupiter, stepSaturn, stepUranus, stepNeptune += 1;
      }
      if (Q2 === 1) {
        stepUranus, stepNeptune, stepJupiter, stepSaturn += 1;
      } else if (Q2 === 2) {
        stepMercury, stepVenus, stepEarth, stepMars += 1;
      }
      if (Q3 === 1) {
        stepJupiter, stepSaturn += 1;
      } else if (Q3 === 2) {
        stepNeptune, stepUranus, stepEarth, stepMars, stepVenus, stepMercury += 1;
      }

      if (Q4 === 1) {
        stepNeptune, stepUranus, stepJupiter, stepSaturn += 1;
      } else if (Q4 === 2) {
        stepEarth, stepMars, stepVenus, stepMercury += 1;
      } 

      if (Q5 === 1) {
        stepVenus, stepEarth, stepJupiter, stepSaturn += 1;
      } else if (Q5 === 2) {
        stepUranus, stepNeptune, stepMars, stepMercury += 1;
      } 

      if (Q6 === 1) {
        stepMercury, stepVenus += 1;
      } else if (Q6 === 2) {
        stepUranus, stepEarth, stepMars, stepJupiter, stepSaturn, stepNeptune += 1;
      } 

      if (Q7 === 1) {
        stepMars, stepJupiter += 1;
      } else if (Q7 === 2) {
        stepUranus, stepMercury, stepVenus, stepEarth, stepNeptune, stepSaturn += 1;
      }

      if (Q8 === 1) {
        stepVenus, stepEarth, stepMars += 1;
      } else if (Q8 === 2) {
        stepUranus, stepJupiter, stepNeptune, stepSaturn, stepMercury += 1;
      }

      if (Q9 === 1) {
        stepNeptune, stepUranus += 1;
      } else if (Q9 === 2) {
        stepMercury, stepVenus, stepEarth, stepMars, stepJupiter, stepSaturn += 1;
      }

      if (Q10 === 1) {
        stepEarth, stepMars += 1;
      } else if (Q10 === 2) {
        stepMercury, stepVenus += 1;
      } else if (Q10 === 3) {
        stepNeptune, stepJupiter, stepSaturn, stepUranus += 1;
      }
      
      if (Q11 === 1) {
        stepVenus += 2;
      } else if (Q11 === 2) {
        stepVenus += -1;
      }

      if (Q12 === 1) {
        stepMars += 3;
      } else if (Q12 === 2) {
        stepVenus += 2;
      } else if (Q12 === 3) {
        stepMars, stepVenus += -2;
      }

      if (Q13 === 1) {
        stepUranus += 3;
      } else if (Q13 === 2) {
        stepUranus += -2;
      }

      if (Q14 === 1) {
        stepVenus += 2;
      } else if (Q14 === 2) {
        stepVenus += -1;
      }

      if (Q15 === 1) {
        stepEarth += 3;
      } else if (Q15 === 2) {
        stepEarth += -2;
      }

      if (Q16 === 1) {
        stepEarth, stepMars, stepNeptune, stepJupiter += 1;
      } else if (Q16 === 2) {
        stepMercury, stepVenus, stepSaturn, stepUranus += 1;
      }

      if (stepMercury >= stepVenus && stepMercury >= stepEarth && stepMercury >= stepMars && stepMercury >= stepJupiter && stepMercury >= stepSaturn && stepMercury >= stepUranus && stepMercury >= stepNeptune) {
        $("#mercury").show();

      } else if (stepVenus >= stepMercury && stepVenus >= stepEarth && stepVenus >= stepMars && stepVenus >= stepJupiter && stepVenus >= stepSaturn && stepVenus >= stepUranus && stepVenus >= stepNeptune) {
        $("#venus").show();
      }
        else if (stepEarth >= stepVenus && stepEarth >= stepMercury && stepEarth >= stepMars && stepEarth >= stepJupiter && stepEarth >= stepSaturn && stepEarth >= stepUranus && stepEarth >= stepNeptune) {
          $("#earth").show();
      }
        else if (stepMars >= stepVenus && stepMars >= stepEarth && stepMars >= stepMercury && stepMars >= stepJupiter && stepMars >= stepSaturn && stepMars >= stepUranus && stepMars >= stepNeptune) {
        $("#mars").show();
      }
        else if (stepJupiter >= stepVenus && stepJupiter >= stepEarth && stepJupiter >= stepMars && stepJupiter >= stepMercury && stepJupiter >= stepSaturn && stepJupiter >= stepUranus && stepJupiter >= stepNeptune) {
          $("#jupiter").show();
      }
        else if (stepSaturn >= stepVenus && stepSaturn >= stepEarth && stepSaturn >= stepMars && stepSaturn >= stepJupiter && stepSaturn >= stepMercury && stepSaturn >= stepUranus && stepSaturn >= stepNeptune) {
          $("#saturn").show();
      }  
        else if (stepUranus >= stepVenus && stepUranus >= stepEarth && stepUranus >= stepMars && stepUranus >= stepJupiter && stepUranus >= stepSaturn && stepUranus >= stepMercury && stepUranus >= stepNeptune) {
          $("#uranus").show();
      }
        else if (stepNeptune >= stepVenus && stepNeptune >= stepEarth && stepNeptune >= stepMars && stepNeptune >= stepJupiter && stepNeptune >= stepSaturn && stepNeptune >= stepUranus && stepNeptune >= stepMercury) {
          $("#neptune").show();
      };
    };

  $("button#reset").click(function() {
    $("#mercury").hide();
    $("#venus").hide();
    $("#earth").hide();
    $("#mars").hide();
    $("#jupiter").hide();
    $("#saturn").hide();
    $("#uranus").hide();
    $("#neptune").hide();
  })
  })
})