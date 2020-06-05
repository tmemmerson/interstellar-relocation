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
        stepMercury, stepVenus,  stepEarth, stepMars, stepJupiter, stepSaturn += 1;
      } else if (Q2 === 2) {
        stepUranus += 1;
      } else if (Q2 === 3) {
        stepNeptune += 1;
      }

      if (Q3 === 1) {
        stepMercury, stepVenus, stepEarth, stepMars, stepJupiter, stepSaturn += 1;
      } else if (Q3 === 2) {
        stepUranus += 1;
      } else if (Q3 === 3) {
        stepNeptune += 1;
      }

      if (Q4 === 1) {
        stepMercury, stepVenus, stepEarth, stepMars, stepJupiter, stepSaturn += 1;
      } else if (Q4 === 2) {
        stepUranus += 1;
      } else if (Q4 === 3) {
        stepNeptune += 1;
      }

      if (Q5 === 1) {
        stepMercury, stepVenus, stepEarth, stepMars, stepJupiter, stepSaturn += 1;
      } else if (Q5 === 2) {
        stepUranus += 1;
      } else if (Q5 === 3) {
        stepNeptune += 1;
      }

      if (Q6 === 1) {
        stepMercury, stepVenus, stepEarth, stepMars, stepJupiter, stepSaturn += 1;
      } else if (Q6 === 2) {
        stepUranus += 1;
      } else if (Q6 === 3) {
        stepNeptune += 1;
      }

      if (Q7 === 1) {
        stepMercury, stepVenus, stepEarth, stepMars, stepJupiter, stepSaturn += 1;
      } else if (Q7 === 2) {
        stepUranus += 1;
      } else if (Q7 === 3) {
        stepNeptune += 1;
      }

      if (Q8 === 1) {
        stepMercury, stepVenus, stepEarth, stepMars, stepJupiter, stepSaturn += 1;
      } else if (Q8 === 2) {
        stepUranus += 1;
      } else if (Q8 === 3) {
        stepNeptune += 1;
      }

      if (Q9 === 1) {
        stepMercury, stepVenus, stepEarth, stepMars, stepJupiter, stepSaturn += 1;
      } else if (Q9 === 2) {
        stepUranus += 1;
      } else if (Q9 === 3) {
        stepNeptune += 1;
      }

      if (Q10 === 1) {
        stepMercury, stepVenus, stepEarth, stepMars, stepJupiter, stepSaturn += 1;
      } else if (Q10 === 2) {
        stepUranus += 1;
      } else if (Q10 === 3) {
        stepNeptune += 1;
      }
              
      }
      if (gryff >= huff && gryff >= slyth && gryff >= raven) {
        $("#gryffindor").show();
      } else if (raven >= huff && raven >= slyth) {
        $("#ravenclaw").show();
      } else if (slyth >= huff) {
        $("#slytherin").show();
      } else {
        $("#hufflepuff").show();
      };
    }
  });

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