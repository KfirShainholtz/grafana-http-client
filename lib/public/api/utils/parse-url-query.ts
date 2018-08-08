export function parseUrlParams(urlParams: {}) {
    const joinByEquals = (pair: any) => pair.join('=');
    const params = Object.entries(urlParams).map(joinByEquals).join('&');
    if (params) {
        return `?${params}`;
    }
    return '';
}
