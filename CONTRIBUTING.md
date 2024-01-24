# Visu Contributing Guide

Hello! We are very excited that you are interested in contributing with Visu. However, before submitting your contribution, be sure to take a moment and read the following guidelines.

- [Code of Conduct](https://github.com/Coaktion/Droz-Visu/blob/main/CODE_OF_CONDUCT.md)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Styling Guidelines](#styling-guidelines)
- [Visual Changes](#visual-changes)
- [Documentation](#documentation)
- [Tests](#tests)
- [Breaking Changes](#breaking-changes)

### Tooling

- [NPM](https://www.npmjs.com/) to manage packages and dependencies. Following [Turborepo guide](https://turbo.build/repo/docs/handbook/package-installation);
- [Typescript](https://www.typescriptlang.org/) to write type-safe Javascript;
- [Turborepo](https://turbo.build/repo/docs) to magange monorepo;
- [Vite](https://vitejs.dev/) to manage development server and library build;
- [React](https://reactjs.org/) to build components;
- [TailwindCSS](https://tailwindcss.com/) for styling components and Design System;
- [Storybook](https://storybook.js.org/) to document components;
- [Testing Library](https://testing-library.com/) for testing components;

### Commit Convention

When creating a commit, we kindly ask you to follow the `category: message` convention in your commit message, using one of the following categories:

- `feature / feat`: all changes that introduce completely new code or new features;
- `bugfix / fix`: changes that fix a bug (ideally you will additionally reference an issue if present);
- `refactor`: any code related change that is not a fix nor a feature;
- `docs`: changing existing or creating new documentation (i.e. storybook docs, README, docs for usage of a lib);
- `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies;
- `test`: all changes regarding tests (adding new tests or changing existing ones);
- `ci`: all changes regarding the configuration of continuous integration (i.e. github actions, ci system);
- `chore`: all changes to the repository that do not fit into any of the above categories.

  e.g. `feat: add new prop to the button component` | `fix: fix typo in the button component` | `docs: add usage example to the button component`

Any commit that includes a BREAKING CHANGE must be marked with a `!` after the type/before the `:` and a scope should be provided to add contextual information about the change.

A breaking change can be a fix, feature or anything that will cause the library to behave differently than before.

  e.g.  
```
feat!: remove a prop from the button component

BREAKING CHANGE: the prop 'size' was removed
```
We use the commit convention to make it easier to communicate the nature of changes to other developers and stakeholders, and make it easier for people to contribute to the project.

If you are interested in the detailed specification you can visit https://www.conventionalcommits.org/.

## Pull Request Guidelines

- The `main` branch is basically a snapshot of the latest stable version. All development must be done in dedicated branches.
- Make sure that Github Actions are green
- It is good to have multiple small commits while working on the PR. We'll let GitHub squash it automatically before the merge.
- If you add a new feature:
  - Add the test case that accompanies it.
  - Provide a compelling reason to add this feature. Ideally, I would first open a suggestion topic and green it before working on it.
- If you correct an error:
  - If you are solving a special problem, add (fix #xxxx [, # xxx]) (# xxxx is the problem identification) in your PR title for a better launch record, for example update entities encoding / decoding (fix # 3899).
  - Provide a detailed description of the error in the PR. Favorite live demo.
  - Add the appropriate test coverage, if applicable.

### Branch Convention

Before you create a Pull Request, please check whether your branchs comply with the branch conventions used in this repository.

All the branchs are created from the `main` branch. Follow the convention `[type/scope]` where `scope` is just a short description of the work scope and `type` is one of the following:

- `main`: The main branch. This branch is protected and cannot be directly pushed to. It is only updated through pull requests;
- `feature-*`/`feat-*`: A branch for a new feature;
- `bugfix-*`/`fix-*`: A branch for changes that fix a bug;
- `chore-*`: A branch for changes regarging any code improvements or updates that doesn't affect the usage of the library by third parties;
- `release-*`: A branch to release a new version.

  e.g. `feat-component-button` | `fix-button-change-event` | `chore-add-lint-rule` | `release-1.0.0`

### Steps to PR

1. Fork the repo and create your branch from `main`;

2. Follow the [Branch Convention](#branch-convention) to create your branch;

3. Make commits following the [Commit Convention](#commit-convention). As you develop, you can run `npm run build` and `npm run test` to make sure everything works as expected. You can also use `--filter` option, to know more please refer to the [turborepo docs](https://turbo.build/repo/docs/core-concepts/monorepos/filtering).

## Development Setup

After cloning the repository, execute the following commands in the root folder:

1. Install dependencies

```bash
npm i

#or

npm install
```

2. If you will be working on the components source code, you can use the following command to start the dev server:

```bash
# Start the dev server of Visu components
npm run dev:visu

# optional
npm run dev:docs ## this will start the documentation storybook.js server. The components are based on the package build
npm run dev ## this will start all the environments
```

- If you will be working on the `docs`, you can use the following commands to build Visu components and then start the dev server:

```bash
# Build Visu source components
npm ruin build:visu

# Start documentation dev server
npm run dev:docs
```

> <span style="color: #FFA624">Remember that these commands must be executed in the root folder of the project.</span>

3. Create a branch for your feature or fix:

```bash
# Move into a new branch for your feature
git checkout -b feat-thing
```

```bash
# Move into a new branch for your fix
git checkout -b fix-something
```

4. Be sure the tests are passing. To run the tests, you can use the following commands:

```bash
# Run all component tests
npm run test

# To test isolated component code you must access the package folder and run the tests
npm run test package/src/__tests__/Button 

```

5. Be sure the package builds. You can use the following commands to build:

```bash
# Build all packages code
npm run build

# Build isolated packages
npm run build:docs ## build docs
npm run build:visu ## build package
```

> <span style="color: #FFA624">Note: ensure your version of Node is 16 or higher to run scripts</span>

6. Send your pull request:

- Send your pull request to the `main` branch
- Your pull request will be reviewed by the maintainers and the maintainers will decide if it is accepted or not
- Once the pull request is accepted, the maintainers will merge it to the `main` branch

## Styling Guidelines

The stylization of the components is done using [TailwindCSS](https://tailwindcss.com/). The library has its own Design System located in the directory `package/src/theme`. The Design System is a TailwindCSS plugin. All the theme configuration is defined in the plugin, and the plugin is used in `tailwind.config.ts` file.

### Classes

Use only TailwindCSS classes to stylize the components. If you need to create a new config, add it to the plugin in `package/src/theme/theme-plugin.js` file.

```js
className="flex flex-row"
```

### Class variants

Sometimes we need stylization with a lot of variants, like size, color, etc. In these cases, we can create an object with the variants and use the `clsx` function to generate the classes.

```js
const sizeClassVariants: SizeClass = {
  sm: 'py-2.5 px-6 text-sm min-h-10',
  md: 'py-3 px-10 min-h-12',
  lg: 'py-9 px-12 text-lg min-h-28 [&_div]:h-10 [&_div]:w-10',
}

className={clsx(sizeClassVariants[size], 'flex flex-row')}
```

> <span style="color: #FFA624">Note: In this case, we are using the type SizeClass to define the type of the object. The type must be defined in</span> `package/src/library/types`.

### clsx

Like the example above, we can use the `clsx` function to generate the classes. The `clsx` function is a utility for constructing className strings conditionally.

If you need to use some class modifier, you should put them in a separate string using `clsx`. For example:

```js
className={clsx(
  'flex flex-row bg-primary-500',
  'hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700',
)}
```

> <span style="color: #FFA624">Note: All the modifiers must be in the same string, separated from the normal classes.</span>

## Visual Changes

When making a visual change, please provide screenshots
and/or screencasts of the proposed change. This will help us to understand the
desired change easier.

## Documentation

Please update the docs, the code and docs should always be in sync.

The main documentation lives in the `docs` folder, the project uses Storybook and `Visu` is used as dependency.

## Tests

Please update the tests, the code and tests should always be in sync.

The tests are in the `package/src/__tests__` folder, the project uses [Testing Library](https://testing-library.com/) for testing components.

## Breaking changes

Breaking changes should be accompanied with deprecations of removed functionality. The deprecated should not be removed until the major release after that.
