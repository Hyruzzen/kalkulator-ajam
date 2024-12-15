function getMatrixValues(matrixId) {
    return [
        [
            parseInt(document.getElementById(`${matrixId}_11`).value) || 0,
            parseInt(document.getElementById(`${matrixId}_12`).value) || 0,
        ],
        [
            parseInt(document.getElementById(`${matrixId}_21`).value) || 0,
            parseInt(document.getElementById(`${matrixId}_22`).value) || 0,
        ]
    ];
}

function addMatrices() {
    let matrix1 = getMatrixValues("m1");
    let matrix2 = getMatrixValues("m2");

    let result = [
        [matrix1[0][0] + matrix2[0][0], matrix1[0][1] + matrix2[0][1]],
        [matrix1[1][0] + matrix2[1][0], matrix1[1][1] + matrix2[1][1]],
    ];

    displayResult(result, 'Hasil Penjumlahan Matriks');
}

function subtractMatrices() {
    let matrix1 = getMatrixValues("m1");
    let matrix2 = getMatrixValues("m2");

    let result = [
        [matrix1[0][0] - matrix2[0][0], matrix1[0][1] - matrix2[0][1]],
        [matrix1[1][0] - matrix2[1][0], matrix1[1][1] - matrix2[1][1]],
    ];

    displayResult(result, 'Hasil Pengurangan Matriks');
}

function multiplyMatrices() {
    let matrix1 = getMatrixValues("m1");
    let matrix2 = getMatrixValues("m2");

    let result = [
        [
            matrix1[0][0] * matrix2[0][0] + matrix1[0][1] * matrix2[1][0],
            matrix1[0][0] * matrix2[0][1] + matrix1[0][1] * matrix2[1][1],
        ],
        [
            matrix1[1][0] * matrix2[0][0] + matrix1[1][1] * matrix2[1][0],
            matrix1[1][0] * matrix2[0][1] + matrix1[1][1] * matrix2[1][1],
        ]
    ];

    displayResult(result, 'Hasil Perkalian Matriks');
}

function displayResult(result, operation) {
    let resultHtml = `<h3>${operation}</h3><table class="matrix-table">`;

    result.forEach(row => {
        resultHtml += `<tr>`;
        row.forEach(value => {
            resultHtml += `<td class="matrix-item">${value}</td>`;
        });
        resultHtml += `</tr>`;
    });

    resultHtml += '</table>';
    document.getElementById('resultContainer').innerHTML = resultHtml;
}
