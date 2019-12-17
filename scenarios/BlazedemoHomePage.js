import { group, check } from 'k6';
import http from 'k6/http';
import { k6_options } from '../support/utils.js';
import { config } from '../support/constants.js';

export const options = k6_options;

export default function() {
  group('BlazedemoHomePage', function() {
    let res;
    res = http.get(`${config.baseUrl}`);
    check(res, {
      'status was 200': r => r.status === 200,
    });
  });
}
