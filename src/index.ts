export function isNumber(value: any)
{
    if (typeof value === 'number') 
    {
        return !isNaN(value);
    }

    if (typeof value === 'string' && value.trim() !== '')
    {
        return Number.isFinite(parseFloat(value));
    }

    return false;
}