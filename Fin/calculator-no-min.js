"use strict";
(function() {
    window.onload = function() {
        const log = document.querySelector('.values');
        const calculatorButton = document.querySelector('.calculator-button')
        const clearButton = document.querySelector('.clear-button')
        const input = document.querySelector('.calculator-input');

        calculatorButton.addEventListener('click', calculateLongestZeros);
        clearButton.addEventListener('click', clearCalculatorInput);

        function clearCalculatorInput() {
            input.value = '';
            log.textContent = 0;
        }

        function calculateLongestZeros() {
            const binary = input.value.toString();
            let listIdx = []
            let result = [];
            let lastIndex = -1
            while ((lastIndex = binary.indexOf(1, lastIndex + 1)) !== -1) {
              listIdx.push(lastIndex)
            }
              for (let i= 1; i < listIdx.length; ++i) {
                      result.push(listIdx[i] - listIdx[i-1]);
              }
            return log.textContent=`${result.toString() ? (Math.max(...result) - 1) : '0'}`;
          }
    };
})();