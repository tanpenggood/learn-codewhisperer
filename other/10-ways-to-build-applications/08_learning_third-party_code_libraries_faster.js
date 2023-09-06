import pako from "pako";
/**
 * Accepts a base64-encoded, gzip-compressed JSON string and returns
 * a parsed JSON object.
 */

export function decompressJson(compressedJson) {
    var decompressedJson = pako.inflate(compressedJson, { to: "string" });
    return JSON.parse(decompressedJson);
}

// test decompressJson
