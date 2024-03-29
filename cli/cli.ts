import { program, Option } from "commander";
import { copyAddresses, prepareConfig } from "./actions";

program
  .command("prepare")
  .addOption(new Option("-n, --network <network>", "network to prepare config"))
  .addOption(new Option("-t, --template <file>", "template"))
  .action(prepareConfig);

  program
  .command("copy-addresses")
  .addOption(new Option("-n, --network <network>", "network to prepare config"))
  .addOption(new Option("-t, --template <file>", "template"))
  .action(copyAddresses);


if (process.argv.length > 2) {
  program.parse();
} else {
  program.help();
}