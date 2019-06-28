import {Coordinates} from "./Coordinates";
import {Direction} from "./Direction";
import {ICommand} from "./ICommand";
import {Plateau} from "./Plateau";
import {StringCommandParser} from "./StringCommandParser";

export class MarsRover {
    private currentCoordinates: Coordinates;
    private currentDirection: Direction;
    private plateau: Plateau;

    constructor(plateau: Plateau, currentCoordinates: Coordinates, currentDirection: Direction) {
        this.plateau = plateau;
        this.currentCoordinates = currentCoordinates;
        this.currentDirection = currentDirection;
    }

    public run = (commandString: string): ICommand[] => {
        const roverCommands = new StringCommandParser(commandString).getCommands();

        roverCommands.forEach(
            (command: ICommand) => {
                command.execute(this);
            });
        return roverCommands;
    }
}
