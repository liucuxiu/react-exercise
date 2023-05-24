import { ReactNode } from 'react';

interface Props {
  children: ReactNode
  onClose: () => void
}

function Alert({ children, onClose }: Props) {
  return (
    <>
      <div className="alert alert-primary alert-dismissible" role="alert">
        {children}
      </div>

      <button className="btn btn-close" onClick={onClose}>Close</button>
    </>

  )
}
export default Alert;