import './style.css'

export default function Container({ children, className }) {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  )
}

export { Container }
