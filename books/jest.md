(1) Karma deinstallieren

npm uninstall karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter @types/jasmine jasmine-core

(2) In angular.json den "test"-Eintrag löschen
"test": { ... )

(3) Jest installieren

npm i --save-dev jest @types/jest jest-preset-angular ts-jest @babel/preset-typescript @jest/globals
npm i ts-node

(4) im Grundverzeichnis eine Datei "setup-jest.ts" anlegen (?)

import 'jest-preset-angular/setup-jest';

(5) jest initialisieren

npm init jest@latest
