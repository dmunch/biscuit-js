export function base64urlEncode(buffer: ArrayBuffer): string {
    return btoa(Array.from(new Uint8Array(buffer), b => String.fromCharCode(b)).join(''))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

export function base64urlDecode(value: string): Uint8Array {
    const m = value.length % 4;
    return Uint8Array.from(atob(
        value.replace(/-/g, '+')
            .replace(/_/g, '/')
            .padEnd(value.length + (m === 0 ? 0 : 4 - m), '=')
    ), c => c.charCodeAt(0))
}

export function hexToBytes(hex: string) : Uint8Array {
    let bytes = new Uint8Array(hex.length / 2);
    
    for (let c = 0; c < hex.length; c += 2)
        bytes[c/2] = parseInt(hex.substr(c, 2), 16);

    return bytes;
}
