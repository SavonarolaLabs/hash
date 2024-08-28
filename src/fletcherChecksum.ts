export function fletcherChecksum(data: string): number {
    let sum1 = 0xFF, sum2 = 0xFF;
    for (let i = 0; i < data.length; i++) {
        sum1 = (sum1 + data.charCodeAt(i)) % 255;
        sum2 = (sum2 + sum1) % 255;
    }
    return (sum2 << 8) | sum1;
}
