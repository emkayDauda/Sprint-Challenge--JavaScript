// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakers {
  constructor(length, width, height) {
    this.length = length;
    this.height = height;
    this.width = width;
  }
  getVolume() {
    return this.length * this.height * this.width;
  }
  getSurfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}
var cuboids = new CuboidMakers(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboids.getVolume()); // 100
console.log(cuboids.getSurfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakers {
  constructor(length) {
    super(length, length, length);
  }
  getVolume() {
    return Math.pow(this.length, 3);
  }

  getSurfaceArea(){
      return 6 * Math.pow(this.length, 2)
  }
}

var aCube = new CubeMaker(4);
console.log(aCube.getVolume());
console.log(aCube.getSurfaceArea());