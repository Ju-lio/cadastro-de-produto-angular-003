  1 Configurar eslint:
    ng add @angular-eslint/schematics

  2 Instalar o prettier:
    npm install prettier --save-dev

  3 Criar o arquivo
    .prettierrc.json na raiz do projeto

    exemplo de formatação:
    
    {
      "tabWidth": 2,
      "useTabs": false,
      "singleQuote": true,
      "semi": true,
      "bracketSpacing": true,
      "arrowParens": "avoid",
      "trailingComma": "es5",
      "bracketSameLine": true,
      "printWidth": 80
    }

  4 Criar o arquivo
    .prettierignore
    
  5 Copiar o conteúdo do arquivo .gitignore e colar no arquivo .prettierignore
  
  6 Configurar o prettier como plugin do eslint: npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev

  7 Colar no arquivo ".eslintrc.json" após a primeira linha q conter: 
    "extends": [
      "plugin:@angular-eslint/recommended",
      "plugin:@angular-eslint/template/process-inline-templates",
      ## Colar aqui ## ---> "plugin:prettier/recommended"
    ],