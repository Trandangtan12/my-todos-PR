import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
const TodoList = (props) => {
  
  const {pagination, onPageChange} = props;
  const {page, totalCount} = pagination;
  const handlePageChange = (newPage) => {
    if(onPageChange){
      onPageChange(newPage);
    }
  }
  const [search, setSearch] = useState("")
  return (
  <div className="">
     
      
  <div className="grid grid-cols-4">
    <div>
  <div className="mt-4 mb-4">
    <div className="font-semibold text-lg">TODO LIST</div>
    <Link to="/todoadd" className="text-blue-500 text-xs">Thêm Todo</Link>
    </div>
    </div>
    <div className="col-span-3">
  <div className="bg-white flex items-center rounded-full">
    <input onChange={(e)=>{setTimeout(() => {setSearch(e.target.value)}, 1000)}} className="rounded-l-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
    <div className="p-2">
      <button className="bg-blue-500 text-white rounded-full p-1 hover:bg-blue-400 focus:outline-none w-10 h-10 flex items-center justify-center">
      <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
  </div>
</div>
          {/* end header */}
         
          <div className="card-content divide-y flex flex-col gap-y-3 mt-5">
          {/* <InfiniteScroll> */}
           {props.todos.filter(val => {
              if(search==""){
                return props.todos;
              }else if(val.content.toLowerCase().includes(search.toLowerCase())){
                return val;
              }
            }).map((item) => 
            <div className="card-content-profil pt-3 flex justify-between items-center">
                <div className=" flex gap-x-2 items-center">
                  <div className="card-name-user text-xs">
                    <h3 className="font-semibold">{item.content}</h3>
                  </div>
                </div>
                <div className="card-action">
                  <Link to={`/todo/${item.id}`}>
                  <button className="flex rounded-md items-center px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    <span className>Chi tiết</span>
                  </button>
                  </Link>
                </div>
              </div>
              
            )}
            {/* </InfiniteScroll> */}
          </div>
          <div className="flex justify-between mt-3">
          <button onClick={()=> handlePageChange(page - 1)} disabled={page <= 1}><i class="fas fa-chevron-left"></i></button>

          <button onClick={()=> handlePageChange(page + 1)} disabled={page >= totalCount}><i class="fas fa-chevron-right"></i></button>
          </div>
        

         </div>
  )
}

export default TodoList
