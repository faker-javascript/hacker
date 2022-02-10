interface Options {
    locale?: string;
}
type Items = Record<string, string>;
declare class Hacker {
    _abbreviationItems: Items;
    _adjectiveItems: Items;
    _ingverbItems: Items;
    _verbItems: Items;
    _nounItems: Items;
    _defaultLocale: string;
    _options?: Options;
    abbreviation(): string;
    adjective(): string;
    ingverb(): string;
    verb(): string;
    noun(): string;
    _selectRandom(items: Items): string;
}
export default function hacker(options?: Options): Hacker;
