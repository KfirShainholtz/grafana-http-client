export enum UrlParseMethod {
    Default = 'default', DuplicateArrayEntries = 'duplicatedArrayEntries',
}

class UrlParsing {
    parseMethodMap: Map<string, (pair: any) => string>;

    constructor() {
        this.parseMethodMap = new Map();
        this.parseMethodMap.set(UrlParseMethod.Default, this.defaultParse.bind(this));
        this.parseMethodMap.set(UrlParseMethod.DuplicateArrayEntries, this.duplicateArrayEntriesParse.bind(this));
    }

    parseUrlParams(urlParams: {}, urlParseMethod: UrlParseMethod = UrlParseMethod.Default) {
        const parse = this.parseMethodMap.get(urlParseMethod) || this.defaultParse.bind(this);
        const params = Object.entries(urlParams).map(parse).join('&');
        if (params) {
            return `?${params}`;
        }
        return '';
    }

    private defaultParse(pair: [any, any]) : string {
        return pair.join('=');
    }

    private duplicateArrayEntriesParse(pair: [any, any]) : string {
        const arr = pair[1];
        if (Array.isArray(arr)) {
            return arr.map(p => this.defaultParse([pair[0], p])).join('&');
        }
        return this.defaultParse(pair);
    }
}

export default new UrlParsing();
