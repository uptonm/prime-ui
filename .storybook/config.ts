import { configure } from "@storybook/react";
import "loki/configure-react";

const req = require.context("../src", true, /story.(tsx|mdx)$/);

configure(req, module);
