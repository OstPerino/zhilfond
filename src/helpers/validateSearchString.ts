export function validateSearchString(str: string): string {
    const matched = str.match(/[a-zA-Z0-9\s]+/g);

    if (!matched) {
        return capitalizeFirstLetter(str);
    }

    return matched.join('');
}

function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}