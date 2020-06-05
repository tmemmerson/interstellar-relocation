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
    
    if (!Q1 || !Q2 || !Q3 || !Q4 || !Q5 || !Q6 || !Q7 || !Q8 || !Q9 || !Q10) {
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

// close to the sun?
      if (Q1 === 1) {
        stepMercury, stepVenus += 1;
      } else if (Q1 === 2) {
        stepEarth, stepMars, stepJupiter, stepSaturn, stepUranus, stepNeptune += 1;
      }

// gas or rock giant?
      if (Q2 === 1) {
        stepUranus, stepNeptune, stepJupiter, stepSaturn += 1;
      } else if (Q2 === 2) {
        stepMercury, stepVenus, stepEarth, stepMars += 1;
      }

// how do you feel about moons?      
      if (Q3 === 1) {
        stepJupiter, stepSaturn += 1;
      } else if (Q3 === 2) {
        stepNeptune, stepUranus, stepEarth, stepMars, stepVenus, stepMercury += 1;
      }

// do you like rings?
      if (Q4 === 1) {
        stepNeptune, stepUranus, stepJupiter, stepSaturn += 1;
      } else if (Q4 === 2) {
        stepEarth, stepMars, stepVenus, stepMercury += 1;
      } 

// do you like big planets?
      if (Q5 === 1) {
        stepVenus, stepEarth, stepJupiter, stepSaturn += 1;
      } else if (Q5 === 2) {
        stepUranus, stepNeptune, stepMars, stepMercury += 1;
      } 

// do you like long days?
      if (Q6 === 1) {
        stepMercury, stepVenus += 1;
      } else if (Q6 === 2) {
        stepUranus, stepEarth, stepMars, stepJupiter, stepSaturn, stepNeptune += 1;
      } 

// do you like living close to main asteroid belt?
      if (Q7 === 1) {
        stepMars, stepJupiter += 1;
      } else if (Q7 === 2) {
        stepUranus, stepMercury, stepVenus, stepEarth, stepNeptune, stepSaturn += 1;
      }

// do you want to stay close to earth?
      if (Q8 === 1) {
        stepVenus, stepEarth, stepMars += 1;
      } else if (Q8 === 2) {
        stepUranus, stepJupiter, stepNeptune, stepSaturn, stepMercury += 1;
      }

// close to kuiper belt?
      if (Q9 === 1) {
        stepNeptune, stepUranus += 1;
      } else if (Q9 === 2) {
        stepMercury, stepVenus, stepEarth, stepMars, stepJupiter, stepSaturn += 1;
      }

// similar weather, hotter, or colder?
      if (Q10 === 1) {
        stepEarth, stepMars += 1;
      } else if (Q10 === 2) {
        stepMercury, stepVenus += 1;
      } else if (Q10 === 3) {
        stepNeptune, stepJupiter, stepSaturn, stepUranus += 1;
      }

      if (stepMercury >= stepVenus && stepMercury >= stepEarth && stepMercury >= stepMars && stepMercury >= stepJupiter && stepMercury >= stepSaturn && stepMercury >= stepUranus && stepMercury >= stepNeptune) {
        $("#mercury").show();

      } else if (stepVenus >= stepMercury && stepVenus >= stepEarth && stepVenus >= stepMars && stepVenus >= stepJupiter && stepVenus >= stepSaturn && stepVenus >= stepUranus && stepVenus >= stepNeptune) {
        $("#venus").show();

        else if (stepEarth >= stepVenus && stepEarth >= stepMercury && stepEarth >= stepMars && stepEarth >= stepJupiter && stepEarth >= stepSaturn && stepEarth >= stepUranus && stepEarth >= stepNeptune) {
          $("#earth").show();

        else if (stepMercury >= stepVenus && stepMercury >= stepEarth && stepMercury >= stepMars && stepMercury >= stepJupiter && stepMercury >= stepSaturn && stepMercury >= stepUranus && stepMercury >= stepNeptune) {
        $("#mars").show();

        else if (stepMercury >= stepVenus && stepMercury >= stepEarth && stepMercury >= stepMars && stepMercury >= stepJupiter && stepMercury >= stepSaturn && stepMercury >= stepUranus && stepMercury >= stepNeptune) {
          $("#jupiter").show();

        else if (stepMercury >= stepVenus && stepMercury >= stepEarth && stepMercury >= stepMars && stepMercury >= stepJupiter && stepMercury >= stepSaturn && stepMercury >= stepUranus && stepMercury >= stepNeptune) {
          $("#saturn").show();
        
        else if (stepMercury >= stepVenus && stepMercury >= stepEarth && stepMercury >= stepMars && stepMercury >= stepJupiter && stepMercury >= stepSaturn && stepMercury >= stepUranus && stepMercury >= stepNeptune) {
          $("#uranus").show();

        else if (stepMercury >= stepVenus && stepMercury >= stepEarth && stepMercury >= stepMars && stepMercury >= stepJupiter && stepMercury >= stepSaturn && stepMercury >= stepUranus && stepMercury >= stepNeptune) {
          $("#neptune").show();

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
  });
});