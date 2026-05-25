 let height = document.querySelector("#height");
      let Weight = document.querySelector("#Weight");
      let Button = document.querySelector(".Cal");
      let text = document.querySelector("#text");
      let report = document.querySelector("#report");

      Button.addEventListener("click", function () {
        let Weight_input = Weight.value;
        let height_input = height.value / 100;

        let BMI = Weight_input / (height_input * height_input);

        text.innerHTML = `YOUR BMI IS :-  ${BMI.toFixed(2)} `;

        if (BMI <18) {
          report.innerHTML = ` :- Underweight: Below 18.5`;
          report.style.color = "red";
        } else if (BMI >=18 && BMI<25) {
          report.innerHTML = ` :- Healthy Weight `;
          report.style.color = "Green";
        } else{
          report.innerHTML = `:- Overweight`;
          report.style.color = "Orange";
        }
      });