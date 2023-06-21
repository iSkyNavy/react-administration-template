export function classNames(classoObject: object) {
    return Object.entries(classoObject)
        .filter(arr => arr[1])
        .map(arr => arr[0])
        .join(" ");
}
