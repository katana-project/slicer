export const escape = (str: string): string => {
    return str.replace(/[\\\n\r\t\x00]/g, (match) => {
        switch (match) {
            case "\\":
                return "\\\\";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\t":
                return "\\t";
            case "\0":
                return "\\0";
            default:
                return match;
        }
    });
};
