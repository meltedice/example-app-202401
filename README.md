# Example App 2024/01

```
% volta install node@v20.11.0
% node -v
v20.11.0
% npm create vite@latest example-app-202401 -- --template react-ts
% cd example-app-202401
% git init
% git config --local --list
% git config --local user.email "ise.yohei@classmethod.jp"
% git config --local user.name "ice"
% npm i -D @vitejs/plugin-react-swc
%   echo "replace @vitejs/plugin-react with @vitejs/plugin-react-swc in package.json"
% npm install eslint eslint-plugin-react --save-dev
%   echo "configure eslintrc.cjs as described in the README.md"
% npm install prettier --save-dev
% npm install eslint-plugin-prettier@latest --save-dev
%   echo "add prettierrc.json"
% npm run format
% npx install-peerdeps --dev eslint-config-airbnb-base
%   echo "configure .eslintrc.json"
% npm run format
% npm install --save-dev eslint-plugin-unused-imports
%   echo "add unused-imports configuration"
% npm install --save-dev cspell@latest
%   echo "configure cspell"
%   echo "add path aliases config into tsconfig.json"
% npm install devcert --save-dev
%   echo "configure vite.config.ts to support https on localhost"
```
