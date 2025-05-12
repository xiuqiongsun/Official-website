import request from '@/utils/request';

/**
 * 模拟数据
 * @param data
 * @returns {*}
 */
export function bannerList() {
  return request({
    url: '/web/getBanners',
    dataType: 'json',
    method: 'get',
  });
}
