import { useState } from 'react';
import './index.less';

const Search = () => {
  const [searchVal, setSearchVal] = useState<string>('');

  const onSearchChange = (e:any) => {
    setSearchVal(e.target.value)
  }

  const onSearchConfirm = (e:any) => {
    if(e.code === 'NumpadEnter' || e.code === 'Enter') {
      console.log('key up', e.code)
      const url = 'https://www.baidu.com/s?wd='
      window.open( url + searchVal )
    }
  }

  const onSearchClose = () => {
    setSearchVal('');
  }

  return (
    <div className="search-component flex-block-center">
      <div className='search-warp flex-block-between'>
        <i className='iconfont icon-search' />
        <input value={ searchVal } type="text" onInput={ onSearchChange } onKeyUp={ onSearchConfirm } />
        { searchVal ? <i className='iconfont icon-close' onClick={ onSearchClose }/> : null }
      </div>
    </div>
  )
}

export default Search;