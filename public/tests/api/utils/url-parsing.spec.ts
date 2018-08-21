import UrlParsing, { UrlParseMethod } from '../../../api/utils/url-parsing';
import { expect } from 'chai';
import * as sinon from 'sinon';

describe('Url parsing spec', () => {
    describe('Default url params parsing', () => {
        it('should return an empty string when no urlParams provided', () => {
            const result = UrlParsing.parseUrlParams({});
            expect(result).to.equal('');
        });

        it('should return a proper query string when defined urlParams provided', () => {
            const obj = {
                hello: 'world',
            };

            const result = UrlParsing.parseUrlParams(obj);

            expect(result).to.equal('?hello=world');
        });
    });

    describe('duplicated array parse formatter', () => {
        it('should duplicate array entries when provided', () => {
            const obj = { hello: ['world', 'and', 'another'] };
            const result = UrlParsing.parseUrlParams(obj, UrlParseMethod.DuplicateArrayEntries);
            expect(result).to.equal('?hello=world&hello=and&hello=another');
        });

        it('should only duplicate arrays', () => {
            const obj = { hello: 'world', another: ['world', 'and', 'another'] };
            const result = UrlParsing.parseUrlParams(obj, UrlParseMethod.DuplicateArrayEntries);
            expect(result).to.contain('another=world');
            expect(result).to.contain('another=and');
            expect(result).to.contain('another=another');
            expect(result).to.contain('hello=world');
        });
    });
});
