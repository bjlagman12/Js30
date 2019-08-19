console.log('Initialize App')

const inputs = document.querySelectorAll('.controls input');

let handleUpdate = (e) => {
  let change = e.target.value;
  let unit = e.target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${e.target.name}`, change + unit)


}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

