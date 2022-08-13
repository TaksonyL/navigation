import React, { FocusEventHandler, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.less';

interface Props {
  lineHeight?: string,
  type?: 'text' | 'number' | 'select',
  placeholder?: string,
  className?: string
}

// 选择器下拉处理
const inputHandler = () => {
  const [selectShow, setSelectShow] = useState(false);
  const [focusTime, setFocusTime] = useState(0);

  const onInpBlur = () => {
    setSelectShow(false)
  }

  const onInpFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocusTime(e.timeStamp)
    setSelectShow(true)
  }

  const onInpClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const clickTime = e.timeStamp
    if(clickTime > focusTime + 150) {
      setSelectShow(!selectShow)
    }
  }

  return { selectShow, onInpBlur, onInpFocus, onInpClick }
}


const InputWrap: React.FC<Props> = (props) => {

  const animationDuration = 300
  const type = props.type==='select'?'text':props.type
  const styles = {
    lineHeight: props.lineHeight
  }

  const { selectShow, onInpBlur, onInpClick, onInpFocus } = inputHandler()

  return props.type === 'select'?
    (
      // 选择器
      <div className={`input-wrap-component input-select-wrap-component ${props.className}`}>
        <input type={type} placeholder={props.placeholder} style={styles}
         onBlur={onInpBlur} onFocus={onInpFocus} onClick={onInpClick} />
        <CSSTransition in={selectShow} timeout={animationDuration} classNames="input-icon" appear>
          <i className='iconfont icon-arrow-down' style={{lineHeight: props.lineHeight}}></i>
        </CSSTransition>
        <CSSTransition in={selectShow} timeout={animationDuration} classNames="input-select" unmountOnExit>
          <div className='input-select-wrap' style={{marginTop: props.lineHeight}}>
            <ul>
              <li>测试</li>
              <li>测试</li>
              <li>测试</li>
              <li>测试</li>
              <li>测试</li>
              <li>测试</li>
              <li>测试</li>
            </ul>  
          </div>  
        </CSSTransition>
      </div>
    ):
    (
      // 输入框
      <div className={`input-wrap-component ${props.className}`}>
        <input type={type} placeholder={props.placeholder} style={styles}/>
      </div>
    )
}

InputWrap.defaultProps = {
  lineHeight: '35px',
  type: 'text',
  placeholder: '请输入',
  className: ''
}

export default InputWrap