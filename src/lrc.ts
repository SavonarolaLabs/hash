export function lrc(data: string): number {
    let lrc = 0;
    for (let i = 0; i < data.length; i++) {
        lrc ^= data.charCodeAt(i);
    }
    return lrc;
}
