import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated, onSignOut } from '../api/userApi'
const LayoutTodos = ({ children }) => {
  const history = useHistory()
  const user = isAuthenticated()
  const [isLogged, setIsLogged] = useState(false);
  const { pathname } = useLocation()
  useEffect(() => {
    isAuthenticated() && setIsLogged(true)
  }, [pathname, isLogged])
  return (
    <div className="bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100")' }}>
      <div className="sticky top-0">
        <div className="flex justify-between text-white p-3">
          {isLogged && (
            <>
              <div>Xin chào {user.username}!</div>
              <Link className=" hover:underline" onClick={() => onSignOut(() => {
                setIsLogged(false)
                history.push("/login")
              })}>
                Đăng xuất</Link>
            </>
          )}
          {!isLogged && (
           null
          )}

        </div>
      </div>
      <div className="contenair bg-cover min-h-screen w-full flex justify-center items-center" >
        <div className="w-1/2  bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
          {/* card */}
          {children}
        </div>
        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <div>
            <a title="Buy me a beer" href="https://www.buymeacoffee.com/emichel" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
              <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LayoutTodos
