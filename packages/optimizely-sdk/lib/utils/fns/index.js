/**
 * Copyright 2017, 2019, Optimizely
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
var MAX_NUMBER_LIMIT = Math.pow(2, 53);
var assign = require('core-js-pure/features/object/assign');
var numberIsFinite = require('core-js-pure/features/number/is-finite');

module.exports = {
  assign: assign,
  cloneDeep: require('lodash/cloneDeep'),
  currentTimestamp: function() {
    return Math.round(new Date().getTime());
  },
  isFinite: function(number) {
    return numberIsFinite(number) && Math.abs(number) <= MAX_NUMBER_LIMIT;
  },
  keyBy: function(items, itemKeyKey) {
    var itemsByKey = {};
    (items || []).forEach(function(item) {
      var itemKey = item[itemKeyKey];
      itemsByKey[itemKey] = item;
    });
    return itemsByKey;
  },
  uuid: function() {
    return uuid.v4();
  },
};
