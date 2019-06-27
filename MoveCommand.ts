import {ICommand} from "./ICommand";
import {MarsRover} from "./MarsRover";

export class MoveCommand implements ICommand {
  public execute(marsRover: MarsRover): void {
    // marsRover.move();
  }
}
