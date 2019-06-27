import {ICommand} from "./ICommand";
import {MoveCommand} from "./MoveCommand";
import {RotateLeftCommand} from "./RotateLeftCommand";
import {RotateRightCommand} from "./RotateRightCommand";

export class StringCommandParser {
  private commandString: string;

  constructor(commandString: string) {
    this.commandString = commandString;
  }

  public toCommands = (): ICommand[] => {
    if (!this.commandString) {
      return [];
    }
    return this.buildCommandsList(this.commandString);
  }

  private stringToCommandMap = (): Map<string, ICommand> => {
    const stringToCommandMap = new Map();
    stringToCommandMap.set("L", new RotateLeftCommand());
    stringToCommandMap.set("R", new RotateRightCommand());
    stringToCommandMap.set("M", new MoveCommand());
    return stringToCommandMap;
  }

  private buildCommandsList = (commandString: string): ICommand[] => {
    const commandList: ICommand[] = [];
    const commands = commandString.split("");
    console.log(commands)

    commands.forEach((command: string) => {
      const commandFound = this.lookupEquivalentCommand(command)
      if (commandFound) {
        commandList.push(commandFound);
      }
    });
    return commandList;
  }

  private lookupEquivalentCommand = (commandString: string): ICommand | undefined => {
    // console.log(commandString);
    //  console.log(this.stringToCommandMap().get(commandString));
    return this.stringToCommandMap().get(commandString);
  }
}
