const ventas = [
    [5, 16, 10, 12, 24],
    [40, 55, 10, 11, 18],
    [15, 41, 78, 14, 51],
    [35, 22, 81, 15, 12],
    [50, 12, 71, 10, 20],
    [70, 40, 60, 28, 22],
    [50, 50, 50, 36, 25],
    [40, 70, 40, 11, 20],
    [20, 20, 30, 12, 18],
    [10, 40, 32, 13, 16],
    [50, 3, 24, 15, 82],
    [40, 46, 15, 46, 22]
];

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function generarTabla() {
    const tbody = document.getElementById('tabla-body');
    ventas.forEach((fila, i) => {
        const tr = document.createElement('tr');
        const tdMes = document.createElement('td');
        tdMes.textContent = meses[i];
        tr.appendChild(tdMes);

        fila.forEach(venta => {
            const td = document.createElement('td');
            td.textContent = venta;
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
}

function calcularVentas() {
    let menorVenta = Number.MAX_VALUE;
    let mayorVenta = Number.MIN_VALUE;
    let totalVentas = 0;
    let diaMenor, mesMenor, diaMayor, mesMayor;
    let ventasPorDia = Array(5).fill(0);

    // Calcular la menor, mayor venta y total de ventas
    ventas.forEach((fila, i) => {
        fila.forEach((venta, j) => {
            totalVentas += venta;
            if (venta < menorVenta) {
                menorVenta = venta;
                diaMenor = diasSemana[j];
                mesMenor = meses[i];
            }
            if (venta > mayorVenta) {
                mayorVenta = venta;
                diaMayor = diasSemana[j];
                mesMayor = meses[i];
            }
            ventasPorDia[j] += venta; // Acumular ventas por día
        });
    });

    // Mostrar resultados
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p><strong>Menor venta:</strong> $${menorVenta}, realizada el ${diaMenor} de ${mesMenor}.</p>
        <p><strong>Mayor venta:</strong> $${mayorVenta}, realizada el ${diaMayor} de ${mesMayor}.</p>
        <p><strong>Venta total:</strong> $${totalVentas}.</p>
        <h2>Ventas por día:</h2>
        <ul>
            ${ventasPorDia.map((venta, i) => `<li>${diasSemana[i]}: $${venta}.00</li>`).join('')}
        </ul>
    `;
}

// Generar la tabla al cargar la página
window.onload = generarTabla;
