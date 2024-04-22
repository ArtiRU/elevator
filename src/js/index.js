import Building from './Building.js';
import Controls from './Controls.js';
import { MAX_FLOOR } from '../utils/consts.js';

const building = new Building(MAX_FLOOR);
const controls = new Controls(MAX_FLOOR);

building.paintFloors();
building.paintButtons();
building.setElevatorHeight();

const elevator = document.getElementById('elevator');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    const currentFloor = this.getAttribute('data-btn');
    const currentActive = document.querySelector('.active');

    this.classList.add('active');
    currentActive?.classList.remove('active');
    elevator.style.bottom = `calc(${currentFloor} * (100% / ${MAX_FLOOR} + 2px))`;
  });
});

