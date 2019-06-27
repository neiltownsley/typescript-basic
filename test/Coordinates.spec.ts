import {expect} from "chai";
import {Coordinates} from "../Coordinates";

describe.only("Coordinates", () => {
  it("when a new instance of Coordinates is created, x any y coordinate properties should exists", () => {
    const coordinates = new Coordinates(0, 0);
    expect(coordinates).to.deep.equal({xCoordinate: 0, yCoordinate: 0});
  });
});
