export const Button = ({color,text,onClickButton}) => {
  return ( <button style={{ backgroundColor:color }} className='btn' onClick={onClickButton}>{text}</button> )
}
