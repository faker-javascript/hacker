import path from 'node:path';
import fs from 'node:fs';
import {loadJsonFileSync} from 'load-json-file';

class Hacker {
    _abbreviationItems = {};
    _adjectiveItems = {};
    _ingverbItems = {};
    _verbItems = {};
    _nounItems = {};
    _defaultLocale = 'en_US';
    _options = {};

    constructor(options) {
        this._options = options || {};
        const abbreviationFilePath = `./locales/${this._options.locale || this._defaultLocale}/abbreviation.json`;
        const adjectiveFilePath = `./locales/${this._options.locale || this._defaultLocale}/adjective.json`;
        const ingverbFilePath = `./locales/${this._options.locale || this._defaultLocale}/ingverb.json`;
        const verbFilePath = `./locales/${this._options.locale || this._defaultLocale}/verb.json`;
        const nounFilePath = `./locales/${this._options.locale || this._defaultLocale}/noun.json`;
        this._abbreviationItems = fs.existsSync(path.resolve(abbreviationFilePath)) ? loadJsonFileSync(abbreviationFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/hacker/', abbreviationFilePath));
        this._adjectiveItems = fs.existsSync(path.resolve(adjectiveFilePath)) ? loadJsonFileSync(adjectiveFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/hacker/', adjectiveFilePath));
        this._ingverbItems = fs.existsSync(path.resolve(ingverbFilePath)) ? loadJsonFileSync(ingverbFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/hacker/', ingverbFilePath));
        this._verbItems = fs.existsSync(path.resolve(verbFilePath)) ? loadJsonFileSync(verbFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/hacker/', verbFilePath));
        this._nounItems = fs.existsSync(path.resolve(nounFilePath)) ? loadJsonFileSync(nounFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/hacker/', nounFilePath));
    }

    _selectRandom(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    abbreviation() {
        return this._selectRandom(this._abbreviationItems);
    }

    adjective() {
        return this._selectRandom(this._adjectiveItems);
    }

    ingverb() {
        return this._selectRandom(this._ingverbItems);
    }

    verb() {
        return this._selectRandom(this._verbItems);
    }

    noun() {
        return this._selectRandom(this._nounItems);
    }
}

export default function Hacker(options) {
    return new Hacker(options);
}
