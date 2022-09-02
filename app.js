// https://www.omnicalculator.com/finance/operating-cash-flow-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const operatingcashflowratioRadio = document.getElementById('operatingcashflowratioRadio');
const currentliabilitiesRadio = document.getElementById('currentliabilitiesRadio');
const operatingcashflowTTMRadio = document.getElementById('operatingcashflowTTMRadio');

let operatingcashflowratio;
let currentliabilities = v1;
let operatingcashflowTTM = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

operatingcashflowratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Current liabilities';
  variable2.textContent = 'Operating cash flow TTM';
  currentliabilities = v1;
  operatingcashflowTTM = v2;
  result.textContent = '';
});

currentliabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating cash flow ratio';
  variable2.textContent = 'Operating cash flow TTM';
  operatingcashflowratio = v1;
  operatingcashflowTTM = v2;
  result.textContent = '';
});

operatingcashflowTTMRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating cash flow ratio';
  variable2.textContent = 'Current liabilities';
  operatingcashflowratio = v1;
  currentliabilities = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(operatingcashflowratioRadio.checked)
    result.textContent = `Operating cash flow ratio = ${computeoperatingcashflowratio().toFixed(2)}`;

  else if(currentliabilitiesRadio.checked)
    result.textContent = `Current liabilities = ${computecurrentliabilities().toFixed(2)}`;

  else if(operatingcashflowTTMRadio.checked)
    result.textContent = `Operating cash flow TTM = ${computeoperatingcashflowTTM().toFixed(2)}`;
})

// calculation

function computeoperatingcashflowratio() {
  return Number(operatingcashflowTTM.value) / Number(currentliabilities.value);
}

function computecurrentliabilities() {
  return Number(operatingcashflowTTM.value) / Number(operatingcashflowratio.value);
}

function computeoperatingcashflowTTM() {
  return Number(operatingcashflowratio.value) * Number(currentliabilities.value);
}