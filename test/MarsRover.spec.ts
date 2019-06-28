import {expect} from "chai";
import {Coordinates} from "../Coordinates";
import {MarsRover} from "../MarsRover";
import {MoveCommand} from "../MoveCommand";
import {Plateau} from "../Plateau";
import {RotateLeftCommand} from "../RotateLeftCommand";
import {Direction} from "../Direction";


describe.only("MarsRover", () => {
    it("when run is called, with command string the correct command list should be returned ", () => {
        const currentTopRightCoordinates: Coordinates = new Coordinates(5, 5);
        const plateau: Plateau = new Plateau(5, 5);
        const marsRover: MarsRover = new MarsRover(plateau, currentTopRightCoordinates, Direction.N);
        expect(marsRover.run("ML")).to.deep.equal([new MoveCommand(), new RotateLeftCommand()]);
    });

});
