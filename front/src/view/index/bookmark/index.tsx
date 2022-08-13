import './index.less';
import { getBookmark, bookmarkType } from '@/api/bookmark';
import { useEffect, useState } from 'react';
import Dialog from '@/components/dialog';
import InputWrap from '@/components/inputWrap';

const addDialog = () => {
  const [show, setShow] = useState(false);
  return { show, setShow }
}

const Bookmark = () => {
  const [marks, setMarks] = useState<bookmarkType[]>([]);
  const category = [
    { title: '分类', value: 0 }
  ]
  const [cateIndex, setCateIndex] = useState(0);
  const addHandler = addDialog();

  const getData = () => {
    getBookmark().then(res => {
      console.log('请求返回 ===>', res)
      setMarks(res.data)
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="bookmark-wrap-container">
      <div className="bookmark-wrap">
        <div className='bookmark-category flex-block-center'>
          {category.map((item, index) => {
            return <span className={item.value===cateIndex?'bookmark-category-item bookmark-category-item-act':'bookmark-category-item'}
            key={index} onClick={() => { setCateIndex(item.value) }}>{item.title}</span>
          })}
          <div className='bookmark-setting flex-block-center'>
            <i className='iconfont icon-collection' onClick={() => { addHandler.setShow(true) }}></i>
            <i className='iconfont icon-set'></i>
          </div>
        </div>
        <div className="bookmark-content flex-block-between">
          {marks.map((item, index) => {
            return <div className='bookmark-item' key={index}>
              <img src={item.icon || '/vite.svg'} alt="" />
              <span className='text-hide'>{item.title}</span>
            </div>
          })}
        </div>
      </div>

      <Dialog show={addHandler.show} title="添加" width="400px" onClose={() => { addHandler.setShow(false) }}>
        <div className='add-dialog-wrap'>
          <div className='add-dialog-item flex-block-between'>
            <div className='add-dialog-item-text'>网址</div>
            <InputWrap className='add-dialog-item-inp'/>
          </div>
          <div className='add-dialog-item flex-block-between'>
            <div className='add-dialog-item-text'>分类</div>
            <InputWrap type="select" className='add-dialog-item-inp'/>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default Bookmark