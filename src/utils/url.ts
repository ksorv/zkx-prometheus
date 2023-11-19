export function urlReplacer(url: string, replacerArray: string[][]): string {
    return replacerArray.reduce((acc, [key, value]) => {
        const val = acc.replace(key, value);
        return val;
    }, url);
}

type UrlCreatorQuery = {
    [key: string]:
    | string
    | number
    | boolean
    | Array<string>
    | Array<number>
    | Array<boolean>
    | Array<{ [key: string]: string | number }>
    | undefined
    | null;
};

export function urlCreator({
    baseUrl,
    query = {},
    params = {},
}: {
    baseUrl: string;
    query?: UrlCreatorQuery;
    params?: Record<string, string | number | boolean>;
}): string {
    const queryStr = Object.entries(query).reduce((acc, [key, value]) => {
        if (
            value === undefined ||
            value === null ||
            ((typeof value === 'string' || Array.isArray(value)) && !value.length)
        ) {
            return acc;
        }

        if (Array.isArray(value)) {
            const encodeQuery = `${key}=${encodeURI(value.join(','))}`;

            return acc ? acc + `&${encodeQuery}` : `?${encodeQuery}`;
        }

        const encodeQuery = `${key}=${encodeURI(value.toString())}`;

        return acc ? acc + `&${encodeQuery}` : `?${encodeQuery}`;
    }, '');

    const urlWithParams = Object.entries(params).reduce((acc, [key, value]) => {
        return acc.replace(`:${key}`, encodeURI(value.toString()));
    }, baseUrl);

    return urlWithParams + queryStr;
}
