import React from 'react'
import { ReactComponent as CalendarLogo } from '../logos/Calendar.svg'
import { ReactComponent as ChartLogo } from '../logos/Chart.svg'
import { ReactComponent as HomeLogo } from '../logos/Home.svg'
import { ReactComponent as SettingsLogo } from '../logos/Settings.svg'

const SideBar = () => {
  const [select, setSelect] = React.useState('home')
  return (
    <div className='sidebar'>
      <div style={{ paddingLeft: 24 }}>logo</div>
      <div>
        <div
          style={{
            marginBottom: 16,
            display: 'flex',
            flexDirection: 'row',
            cursor: 'pointer',
          }}
          onClick={() => setSelect('home')}
        >
          {select === 'home' ? (
            <div className='select-marker' />
          ) : (
            <div style={{ width: 24 }} />
          )}
          <span style={{ width: 32 }}>
            <HomeLogo
              style={{ fill: select === 'home' ? '#222DD1' : '#000000' }}
            />
          </span>
        </div>
        <div
          style={{
            marginBottom: 16,
            display: 'flex',
            flexDirection: 'row',
            cursor: 'pointer',
          }}
          onClick={() => setSelect('chart')}
        >
          {select === 'chart' ? (
            <div className='select-marker' />
          ) : (
            <div style={{ width: 24 }} />
          )}
          <span style={{ width: 32 }}>
            <ChartLogo
              style={{ fill: select === 'chart' ? '#222DD1' : '#000000' }}
            />
          </span>
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'row', cursor: 'pointer' }}
          onClick={() => setSelect('calendar')}
        >
          {select === 'calendar' ? (
            <div className='select-marker' />
          ) : (
            <div style={{ width: 24 }} />
          )}
          <span style={{ width: 32 }}>
            <CalendarLogo
              style={{ fill: select === 'calendar' ? '#222DD1' : '#000000' }}
            />
          </span>
        </div>
      </div>
      <SettingsLogo style={{ paddingLeft: 24, cursor: 'pointer' }} />
    </div>
  )
}

export default SideBar
