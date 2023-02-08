module.exports = function check(str, bracketsConfig) {
    let stuck = [];
    const OPEN_BRACKETS = ['(', '{', '[', '1', '3', '5',];
    const BRACKETS_PAIR = {
        [')']: '(',
        ['}']: '{',
        [']']: '[',
        ['2']: '1',
        ['4']: '3',
        ['6']: '5',
    };
    const POLINDROM_BRACKTS = ['|', '7', '8'];

    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];
        let topElement = stuck[stuck.length - 1];
        if (bracketsConfig.includes(currentSymbol) || OPEN_BRACKETS.includes(currentSymbol) || POLINDROM_BRACKTS.includes(currentSymbol)) {
            if (currentSymbol === topElement && POLINDROM_BRACKTS.includes(currentSymbol)) {
                stuck.pop();
            } else {
                stuck.push(currentSymbol);
            }

        } else {
            if (stuck.length === 0) {
                return false;
            }

            if (BRACKETS_PAIR[currentSymbol] === topElement) {
                stuck.pop();
            } else {
                return false;
            }
        }

    }

    return stuck.length === 0;
}
