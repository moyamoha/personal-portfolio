import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function Notif({ msg }) {
  const [showNotif, setShowNotif] = useState(true)
  useEffect(() => {
    if (window) {
      const showBigUpdate = window.localStorage.getItem('bigUpdate')
      if (showBigUpdate) setShowNotif(JSON.parse(showBigUpdate))
    } 
  }, [setShowNotif])

  const hideNotif = () => {
    window.localStorage.setItem("bigUpdate", "false")
    setShowNotif(false)
  }
  return (
    showNotif ? <div className="container-fluid d-md-flex px-sm-0 pt-2 notif-snacker">
      <span>{msg}</span>
      <AiOutlineClose className="close-notif-icon" onClick={hideNotif}></AiOutlineClose>
    </div> : <></>
  );
}
