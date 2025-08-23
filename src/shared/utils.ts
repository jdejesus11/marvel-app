export function isStringEmpty(value: string): boolean{
    return value.match(/\S/) === null;
}