class Validator {

  /**
   * Based on a set of rules, is the input valid?
   * TODO: Define the rules ... how do we send them in? How do we identify?
   * @param input
   * @param rules
   * @returns {boolean}
   */

  isValid(){
    return true;
  }

  isString(input) {
    return typeof input === 'string';
  }

  isNumber(input) {
    return typeof input === 'number';
  }

  isObject(input) {
    return typeof input === 'object';
  }

  isBoolean(input) {
    return typeof input === 'boolean';
  }

  isArray(input) {
    return Array.isArray(input);
  }

  isFunction(input) {
    return typeof input === 'function';
  }

}


module.exports = Validator;