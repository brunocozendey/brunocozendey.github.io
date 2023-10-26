        function calculate() {
            // Get the values from the input fields
            var pla_cost = parseFloat(document.getElementById("pla_cost").value);
          	var power_cost = parseFloat(document.getElementById("power_cost").value);
            var print_time = parseFloat(document.getElementById("print_time").value);
						var weight = parseFloat(document.getElementById("weight").value);

            if (isNaN(pla_cost) || isNaN(power_cost) || isNaN(print_time) || isNaN(weight)) {
                document.getElementById("cost").textContent = "Entre com valores válidos.";
            } else {
                // Perform the calculation and display the result
                var cost = pla_cost*weight+power_cost*0.36*print_time;
                document.getElementById("cost").textContent = "Custo R$: " + cost.toFixed(2);
            }
        }
