import {Coordinates} from "./Coordinates";

export class Plateau {
  public topRightCoordinates: Coordinates = new Coordinates(0, 0);
  public bottomLeftCoordinates: Coordinates = new Coordinates(0, 0);

  constructor(topRightXCoordinate: number, topRightYCoordinate: number) {
    this.topRightCoordinates = new Coordinates(topRightXCoordinate, topRightYCoordinate);
  }
}
