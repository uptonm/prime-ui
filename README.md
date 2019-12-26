# Prime-UI

This project is attempting to create a reusable component library from the Prime UI Sketch App UI Kit.

All components will be hooked up to Storybook for display, tested with Jest, and Visual Regression will be done using Loki.

## Running Storybook

- First install dependencies with `npm install` or `yarn install`
- Run the Storybook dev server with `npm run storybook` or `yarn storybook`

## Running the Main Application

- You can run the React Dev Server with `npm start` or `yarn start`, this will compile everything and run a local dev server based on the content in `./src/app/Root.tsx`