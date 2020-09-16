Repro: Regex Works in Dev Mode, but Breaks in Production Build
==============================================================

The following statement evaluates differently when run in React Dev mode versus
a production optimized build produced by `create-react-app`:

```js
/[^\d\-a-z]/iu.exec("a")
```

## Repro Steps

1. Clone and navigate to repo:

   ```
   $ git@github.com:rwoll/repro-create-react-app-regex.git
   $ cd repro-create-react-app-regex
   ```

2. Install dependencies:
   ```
   $ npm i
   ```

3. Launch the app in dev mode:

   ```
   $ npm start
   ```

  **Observe** `true` is displayed.

4. Build the production optimized version of the app, and launch on port 4000:

   ```
   $ npm run build
   $ npx serve -s build -l tcp://localhost:4000
   ```

  **Observe** `false` is displayed.

Both cases should be consistent and display `true`; however, something as part of
the production build (Terser?) is making the code wrong.

## Build Env

```
node: v14.7.0
macOS: 10.15.6
chrome: 85.0.4183.102
```
