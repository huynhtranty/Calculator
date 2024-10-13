const nameNumber1 = 'Số thứ nhất';
const nameNumber2 = 'Số thứ hai';

function handleCalculateKeyDown(event) {
    if (event.key === 'Enter') {
        calculate();
    }
}
function calculate() {    
    var selectedOperation = document.querySelector('input[name="operation"]:checked');
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;

    if (isNaN(num1)) {
        document.getElementById('info').innerHTML = 'Giá trị nhập ở ô <em>' + nameNumber1 + '</em> không phải là số';
        return;
    }
    if (isNaN(num2)) {
        document.getElementById('info').innerHTML = 'Giá trị nhập ở ô <em>'+ nameNumber2 +'</em> không phải là số';
        return;
    }
  
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1)) {
        document.getElementById('info').innerHTML = 'Nhập giá trị ở ô <em>' + nameNumber1 +'</em>';
        return;
    }
    if (isNaN(num2)) {
        document.getElementById('info').innerHTML = 'Nhập giá trị ở ô <em>' + nameNumber2 + '</em>';
        return;
    }
    let res = 0;
    if (selectedOperation) {
        document.getElementById('info').textContent = '';
        document.getElementById('result').textContent = 'Selected Operation: ' + selectedOperation.value;
        switch (selectedOperation.value) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num1 / num2;
                break;
            default:
                document.getElementById('info').textContent = 'Vui lòng chọn phép toán';
            
        }
        document.getElementById('result').textContent = res.toString();
    } else {
        document.getElementById('info').textContent = 'Vui lòng chọn phép toán';
    }
}