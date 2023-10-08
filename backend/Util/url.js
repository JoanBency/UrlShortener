function validateLongUrl(url) {
    var urlRegex = new RegExp(
        "^" + // Start of string
        "(?:(?:https?|ftp)://)" + // Protocol
        "(?:\\S+(?::\\S*)?@)?" + // User:pass authentication
        "(?:" + // Hostname or IP
        "(?!(?:10|127)(?:\\.\\d{1,3}){3})" + // IP address cannot start with 10 or 127
        "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" + // IP address cannot start with 169.254 or 192.168
        "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + // IP address first octet 1-223
        "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + // IP address second and third octet 0-255
        "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + // IP address fourth octet 1-254
        "|" + // or
        "(?:" + // Hostname
        "(?:" + // Domain name
        "[a-z0-9\\u00a1-\\uffff]" + // First character of domain name
        "[a-z0-9\\u00a1-\\uffff_-]{0,62}" + // Subsequent characters of domain name
        ")?" + // Domain name is optional
        "[a-z0-9\\u00a1-\\uffff]\\." + // Second level domain name
        "(?:[a-z\\u00a1-\\uffff]{2,}\\.?)" + // First level domain name
        ")" + // End of domain name
        "(?::\\d{2,5})?" + // Port
        "(?:[/?#]\\S*)?" + // Query string
        "$", // End of string
        "i"
    );
    return urlRegex.test(url); // Test longUrl against regex    
}

module.exports = validateLongUrl;