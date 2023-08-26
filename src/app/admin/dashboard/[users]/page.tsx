'use client';
import React, { useEffect, useState } from 'react'
import User_table from '../../components/table/User_table';
import { useDatabase } from '@/app/components/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '@/app/components/auth';

export default function page({ params }: any) {
  const { admin } = useDatabase()
  const [data, setData]: any = useState([])
  const [loader, setLoader] = useState(true)
  const [mode, setMode] = useState('')
  const { logout } = useAuth()
  const [refresh, setRefresh] = useState(false)

  async function get_data() {
    const response = await admin();
    if (response.error) {
      logout()
    } else {
      switch (params.users) {
        case 'users':
          setData(response.users)
          setMode('all')
          console.log(response)
          break;
        case 'request':
          setData(response.request)
          setMode('request')
          console.log(response)
          break;
      }
    }


    setLoader(false)
  }

  useEffect(() => {
    get_data()

  }, [refresh])





  return (
    <div className='w-100 h-100'>
      {loader ? (
        <div className='h-100 is-flex is-justify-content-center is-align-items-center'>
          <FontAwesomeIcon icon={faCog} spin />

        </div>
      ) : (<>

        {(data.length !== 0) ? <User_table users={data} mode={mode} setRefresh={setRefresh} refresh={refresh}></User_table> :
          (<>
            <h1 className='has-text-centered is-size-2'>No Activity Here</h1>
            {/* <h3 className='has-text-centered is-size-4'>{data.details}</h3> */}
          </>)
        }

      </>)}


    </div>
  )
}

