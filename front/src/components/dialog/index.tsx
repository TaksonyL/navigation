import { Children, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.less';

interface Props {
  width?: string,
  title?: string,
  show: boolean,
  onClose: () => void,
  onConfirm?: () => void
}

type PropsType = React.PropsWithChildren<Props>

const Dialog: React.FC<PropsType> = (props) => {

  const animationDuration = 300;

  useEffect(() => {
    console.log('dialog show ===>', props.show)
  }, [props.show])

  return (
    <CSSTransition in={props.show} timeout={animationDuration} classNames="dialog-component" unmountOnExit>
      <div className="dialog-component">
        <div className='dialog-mask' onClick={props.onClose}></div>
        <div className='dialog-wrap' style={{width: props.width}}>
          <div className="dialog-header">
            {props.title}
            {/* <i className='iconfont icon-close' onClick={props.onClose}></i> */}
          </div>
          {props.children}
          <div className='dialog-footer'>
            <button onClick={props.onClose}>取消</button>
            <button onClick={props.onConfirm}>确定</button>
          </div>
        </div>  
      </div>
    </CSSTransition>
  )
}

Dialog.defaultProps = {
  title: '标题'
}

export default Dialog