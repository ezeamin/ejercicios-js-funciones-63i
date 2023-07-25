/*
5- Ingresar la cantidad de horas trabajadas por un empleado durante el mes a fin de calcular el monto de su salario mensual, el que se liquida de la siguiente manera:
✓ Si trabaja 180 horas o menos, se le paga $ 560,00 la hora.
✓ Si trabaja más de 180 se le paga un plus de $ 200,00 por cada hora adicional.
*/

function calcularSalarioMensual(horasTrabajadas, salarioPorHora) {
    const horasPorMes = 160; // Suponiendo que hay 160 horas de trabajo en un mes estándar (puedes ajustar este valor según tus necesidades)
    let salarioMensual = horasTrabajadas * salarioPorHora;
  
    if (horasTrabajadas > horasPorMes) {
      // Si el empleado trabajó horas extras, calculamos el salario con el pago correspondiente a las horas extras.
      const horasExtras = horasTrabajadas - horasPorMes;
      const salarioHoraExtra = salarioPorHora * 1.5; // Suponiendo un 50% de aumento para horas extras
      const salarioPorHorasExtras = horasExtras * salarioHoraExtra;
      salarioMensual += salarioPorHorasExtras;
    }
  
    return salarioMensual;
  }
  
  // Ejemplo de uso:
  const horasTrabajadas = 180;
  const salarioPorHora = 10;
  const salarioMensual = calcularSalarioMensual(horasTrabajadas, salarioPorHora);
  console.log(`El salario mensual del empleado es: $${salarioMensual}`);