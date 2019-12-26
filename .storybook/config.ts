import { configure } from "@storybook/react";

const req = require.context("../src", true, /story.tsx$/);

configure(req, module);
