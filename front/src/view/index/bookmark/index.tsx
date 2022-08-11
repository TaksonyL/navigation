import './index.less';

const Bookmark = () => {
  const marks = [
    { 
      title: 'Vant Weapp - 轻量、可靠的小程序 UI 组件库',
      icon: 'https://img.yzcdn.cn/vant/logo.png',
      url: 'https://vant-contrib.gitee.io/vant-weapp/#/intro'
    },
    { 
      title: 'TinyPNG – Compress PNG images while preserving transparency',
      icon: 'https://tinypng.com/images/favicon.ico',
      url: 'https://tinypng.com/'
    },
    { 
      title: '序言 · ThinkPHP5.0完全开发手册 · 看云',
      icon: 'https://tinypng.com/images/favicon.ico',
      url: 'https://www.kancloud.cn/manual/thinkphp5/118003'
    },
    { 
      title: '序言 · ThinkPHP5.0完全开发手册 · 看云',
      icon: 'https://tinypng.com/images/favicon.ico',
      url: 'https://www.kancloud.cn/manual/thinkphp5/118003'
    }
  ]

  return (
    <div className="bookmark-wrap">
      
      <div className="bookmark-content flex-block-between">
        {marks.map(item => {
          return <div className='bookmark-item'>
            <img src={item.icon} alt="" />
            <span className='text-hide'>{item.title}</span>
            
          </div>
        })}
      </div>

    </div>
  )
}

export default Bookmark