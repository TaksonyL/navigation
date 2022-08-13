import request from '@/utils/request';

export type bookmarkType = {
  id: number,
  icon: string,
  title: string,
  url: string
}

/**
 * 获取书签
 * @returns 
 */
export function getBookmark() {
  return request.get('/bookmark')
}

/**
 * 添加书签
 * @returns 
 */
export function addBookmark(param:Partial<bookmarkType>) {
  return request.post('/bookmark', {param})
}