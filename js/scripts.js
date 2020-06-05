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
      let mercury = 0;
      let venus = 0;
      let earth = 0;
      let mars = 0;
      let jupiter = 0;
      let saturn = 0;
      let uranus = 0;
      let neptune = 0;

      if (Q1 === 1) {
        raven += 1;
      } else if (Q1 === 2) {
        gryff += 1;
      } else if (Q1 === 3) {
        huff += 1;
      } else if (Q1 === 4) {
        slyth += 1;
      }
      if (Q2 === 1) {
        huff += 1;
      } else if (Q2 === 2) {
        gryff += 1;
      } else if (Q2 === 3) {
        raven += 1;
      } else if (Q2 === 4) {
        slyth += 1;
      }
      if (Q3 === 1) {
        raven += 1;
      } else if (Q3 === 2) {
        slyth += 1;
      } else if (Q3 === 3) {
        huff += 1;
      } else if (Q3 === 4) {
        gryff += 1;
        
      if (Q4 === 1) {
        raven += 1;
      } else if (Q3 === 2) {
        slyth += 1;
      } else if (Q3 === 3) {
        huff += 1;
      } else if (Q3 === 4) {
        gryff += 1;
        
      if (Q5 === 1) {
        raven += 1;
      } else if (Q3 === 2) {
        slyth += 1;
      } else if (Q3 === 3) {
        huff += 1;
      } else if (Q3 === 4) {
        gryff += 1;
        
      if (Q6 === 1) {
        raven += 1;
      } else if (Q3 === 2) {
        slyth += 1;
      } else if (Q3 === 3) {
        huff += 1;
      } else if (Q3 === 4) {
        gryff += 1;
        
      if (Q7 === 1) {
        raven += 1;
      } else if (Q3 === 2) {
        slyth += 1;
      } else if (Q3 === 3) {
        huff += 1;
      } else if (Q3 === 4) {
        gryff += 1;
        
      if (Q8 === 1) {
        raven += 1;
      } else if (Q3 === 2) {
        slyth += 1;
      } else if (Q3 === 3) {
        huff += 1;
      } else if (Q3 === 4) {
        gryff += 1;
        
      if (Q9 === 1) {
        raven += 1;
      } else if (Q3 === 2) {
        slyth += 1;
      } else if (Q3 === 3) {
        huff += 1;
      } else if (Q3 === 4) {
        gryff += 1;
        
      if (Q10 === 1) {
        raven += 1;
      } else if (Q3 === 2) {
        slyth += 1;
      } else if (Q3 === 3) {
        huff += 1;
      } else if (Q3 === 4) {
        gryff += 1;
        
              
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