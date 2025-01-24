# was ist Jest?

• Testframework von Facebook, bekannt aus dem React-Ökosystem.
• Seit Angular 16 als Alternative zu Karma einsetzbar - noch experimentell.
• Vorteile von Jest:
• Geschwindigkeit
• Integrierte Funktionen wie Snapshot-Tests und Code Coverage
• Headless Testing mit JSDOM: Simuliert die Browser-Umgebung für Tests ohne echten Browser.

• Nachteile von Jest:
• Einrichtung komplex
• noch experimentelle Unterstützung in Angular
• Doku zur Integration widersprüchlich

## Einrichtung von Jest in einem Angular-Projekt

(1) Karma deinstallieren

npm uninstall karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter @types/jasmine jasmine-core

(2) In angular.json den "test"-Eintrag löschen
"test": { ... )

(3) Jest installieren

npm i --save-dev jest @types/jest jest-preset-angular ts-jest @babel/preset-typescript @jest/globals ts-node

(4) im Grundverzeichnis eine Datei "setup-jest.ts" anlegen (?)

import 'jest-preset-angular/setup-jest';

(5) tsconfig.spec.json file anlegen / anpassen

{
"extends": "./tsconfig.json",
"compilerOptions": {
"outDir": "./out-tsc/spec",
"types": [
"jest" // 1
],
"esModuleInterop": true, // 2
"emitDecoratorMetadata": true // 3
},
"include": [
"src/**/*.spec.ts",
"src/**/*.d.ts"
]
}

(5) jest initialisieren

npm init jest@latest

(6) package.json anpassen

"test": "jest --verbose",
"test:coverage": "jest --coverage",
"test:watch": "jest --watch"

(7) Beispiel-Test

siehe sum.spec.ts

und

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

beforeEach(async () => {
await TestBed.configureTestingModule({
declarations: [AppComponent],
}).compileComponents();
});

beforeEach(() => {
fixture = TestBed.createComponent(AppComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create the app', () => {
expect(component).toBeTruthy();
});

// ab hier anpassen!

it(`should have as title 'Buchverwaltung'`, () => {
expect(component.title).toEqual('Buchverwaltung');
});

it('should render the title', () => {
const compiled = fixture.nativeElement as HTMLElement;
expect(compiled.querySelector('.content p')?.textContent).toContain('Hallo books');
});

});
