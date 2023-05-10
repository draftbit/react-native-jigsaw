#! /usr/bin/env node

/**
 * Custom Git Merge Driver
 * ----------------------------------------------
 * Checks if expo version of both branches is different
 * if so, skip merging of package.json(s) and yarn.lock
 *
 * Makes it easier to merge a branch of one expo version into another
 * without having to handle conflicts cause by version mismatches (which are expected)
 */

const fs = require("fs");
const argv = require("yargs").argv;

const ours = argv[1];
const theirs = argv[3];
const filename = argv[4];

try {
  if (filename === "package.json") {
    const ourPackageJson = JSON.parse(fs.readFileSync(ours));
    const theirPackageJson = JSON.parse(fs.readFileSync(theirs));
    const ourExpoVersion = ourPackageJson.version.split(".")[0];
    const theirExpoVersion = theirPackageJson.version.split(".")[0];
    if (ourExpoVersion !== theirExpoVersion) {
      console.log(
        "Using current version of",
        ours,
        "due to different expo versions:",
        ourExpoVersion,
        ",",
        theirExpoVersion
      );
      console.log(
        "Please inspect the changes manually and apply them according to current expo version if needed"
      );
      process.exit(0);
    }
  } else if (filename === "yarn.lock") {
    const examplePackageJson = JSON.parse(
      fs.readFileSync(require("../example/package.json"))
    );
    const expoVersion = examplePackageJson.dependencies.expo;
    const expoYarnLock = `expo@${expoVersion}`;
    if (!theirs.includes(expoYarnLock)) {
      console.log(
        "Using current version of",
        ours,
        "due to different expo versions. Incoming yarn.lock does not include",
        expoYarnLock
      );
      console.log(
        "Please inspect the changes manually and apply them according to current expo version if needed"
      );
      process.exit(0);
    }
  }
} catch (e) {
  console.error("Failed checking expo versions of", ours);
}

process.exit(1);
