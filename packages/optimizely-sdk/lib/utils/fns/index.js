/**
 * Copyright 2017, 2019-2020, Optimizely
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var uuid = require('uuid');
var MAX_SAFE_INTEGER_LIMIT = Math.pow(2, 53);
var keyBy = require('@optimizely/js-sdk-utils').keyBy;
module.exports = {
  assign: function(target) {
    if (!target) {
      return {};
    }
    if (typeof Object.assign === 'function') {
      return Object.assign.apply(Object, arguments);
    } else {
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    }
  },
  currentTimestamp: function() {
    return Math.round(new Date().getTime());
  },
  isSafeInteger: function(number) {
    return typeof number == 'number' && Math.abs(number) <= MAX_SAFE_INTEGER_LIMIT;
  },
  keyBy: function(arr, key) {
    if (!arr) return {};
    return keyBy(arr, function(item) {
      return item[key];
    });
  },
  uuid: function() {
    return uuid.v4();
  },
  isNumber: function(value) {
    return typeof value === 'number';
  },
};
