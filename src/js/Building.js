class Building {
  maxFloor = 5;

  constructor(maxFloor) {
    this.maxFloor = maxFloor;
  }

  paintFloors() {
    const floors = document.querySelector('.floors');

    for (let i = 0; i < this.maxFloor; i++) {
      const floor = document.createElement('div');
      floor.setAttribute('data-floor', i);
      floor.classList.add('floor');
      floor.style.height = `calc(100% / ${this.maxFloor})`;
      floors.append(floor);
    }
  }

  paintButtons() {
    const buttons = document.querySelector('.buttons');

    for (let i = 0; i < this.maxFloor; i++) {
      const button = document.createElement('button');
      button.setAttribute('data-btn', i);
      button.classList.add('button');
      button.style.height = `calc(100% / ${this.maxFloor})`;
      button.textContent = i + 1;
      buttons.append(button);
    }
  }

  setElevatorHeight() {
    const elevator = document.querySelector('#elevator');
    elevator.style.height = `calc(100% / ${this.maxFloor} - 15px)`;
  }
}

export default Building;
