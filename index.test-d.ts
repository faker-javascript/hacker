import {expectType} from 'tsd';
import hacker from './index.js';

expectType<string>(hacker({locale: 'en_US'}).noun());
expectType<string>(hacker().noun());
expectType<string>(hacker().verb());
expectType<string>(hacker().ingverb());
expectType<string>(hacker().adjective());
expectType<string>(hacker().abbreviation());