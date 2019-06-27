import {expect} from "chai";
import {Plateau} from "../Plateau";

describe("Plateau", () => {
  it("when new instance of plateau is created, topRight and bottomLeft Coordinate properties should exist", () => {
    const plateau = new Plateau(5, 5);
    expect(plateau.bottomLeftCoordinates).deep.equal(
      {
        xCoordinate: 0,
        yCoordinate: 0,
      });
    expect(plateau.topRightCoordinates).deep.equal(
      {
        xCoordinate: 5,
        yCoordinate: 5,
      });
  });
});
