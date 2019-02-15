/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
 * =============================================================================
 */
import * as tf from '@tensorflow/tfjs';
import {describeWithFlags} from '@tensorflow/tfjs-core/dist/jasmine_util';
import {padInput} from './util';

describeWithFlags('Toxicity classifier util', tf.test_util.NODE_ENVS, () => {
  it('should pad inputs of different lengths', () => {
    const inputs = [[1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]];

    expect(inputs.map(d => padInput(d))).toEqual([
      [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7, 8]
    ]);
  });
});