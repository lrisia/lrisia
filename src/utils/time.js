export class Time {
  /**
   * Find the number of weeks between two dates
   * @param {Date} d1 Before date
   * @param {Date} d2 After date
   * @returns {number} Number of weeks between two dates
   */
  static weeksBetween(d1, d2) {
    d1 = d1.getTime();
    d2 = d2.getTime();
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
  }
}
