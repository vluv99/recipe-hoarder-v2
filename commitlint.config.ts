import { RuleConfigSeverity, type UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],

  rules: {
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "wip",
      ],
    ],
    "subject-case": [RuleConfigSeverity.Disabled],
  },

  defaultIgnores: false,
};

export default Configuration;
