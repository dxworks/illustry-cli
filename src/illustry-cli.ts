import { Command } from 'commander'
import { _package } from './utils'

const subComand = new Command()
    .name("subcomand")
export const mainCommand = new Command()
    .name('illustry-cli')
    .description(_package.description)
    .version(_package.version, '-v, -version, --version, -V')
    .action(() => console.log("asdada"))
    .addCommand(subComand)
