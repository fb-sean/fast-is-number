"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
function isNumber(value) {
    if (typeof value === 'number') {
        return !isNaN(value);
    }
    if (typeof value === 'string' && value.trim() !== '') {
        return Number.isFinite(parseFloat(value));
    }
    return false;
}
exports.isNumber = isNumber;
