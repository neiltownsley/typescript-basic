import {MarsRover} from "./MarsRover";

export interface ICommand {
  execute(marsRover: MarsRover): void;
}
