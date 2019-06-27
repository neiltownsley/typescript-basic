import {Coordinates} from "./Coordinates";
import {ICommand} from "./ICommand";
import {Plateau} from "./Plateau";
import {StringCommandParser} from "./StringCommandParser";
import {Direction} from "./test/Direction";

export class MarsRover {
  private currentCoordinates: Coordinates;
  private currentDirection: Direction;
  private plateau: Plateau;

  constructor(currentCoordinates: Coordinates, currentDirection: Direction, plateau: Plateau) {
    this.currentCoordinates = currentCoordinates;
    this.currentDirection = currentDirection;
    this.plateau = plateau;
  }

  public run = (commandString: string): ICommand[] => {
    const roverCommands = new StringCommandParser(commandString).toCommands();

    roverCommands.forEach(
      (command: ICommand) => {
        command.execute(this);
      });
    return roverCommands;
  }
}
