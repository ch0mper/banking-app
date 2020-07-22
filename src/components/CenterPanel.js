import React from 'react'
import { ReactComponent as SearchLogo } from '../logos/Search.svg'

const CenterPanel = () => (
  <div className='center-panel'>
    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 24 }}>
      <span style={{ width: 20, marginRight: 8 }}>
        <SearchLogo />
      </span>
      <input style={{ marginBottom: 8 }} placeholder='Search...' />
    </div>
    <div className='title'>
      Card Selection
    </div>
    <div style={{ marginBottom: 24, color: '#404040' }}>
      Personal Loan Selection
    </div>
    <div className='card-container'>
      <div className='credit-card'>a credit card</div>
      <div className='credit-card'>a credit card</div>
    </div>
    <div className='title'>
      Transactions
    </div>
    <table style={{ width: '100%', padding: 16 }}>
      {[
        {
          name: 'Media World',
          status: 'Attention',
          date: 'Jan 8, 2020',
          amount: -67.2,
        },
        {
          name: 'Rental Cars',
          status: 'Attention',
          date: 'Jan 11, 2020',
          amount: -34.25,
        },
        {
          name: 'Instacart',
          status: 'Attention',
          date: 'Jan 16, 2020',
          amount: -53.6,
        },
        {
          name: 'Ryanair',
          status: 'Attention',
          date: 'Jan 18, 2020',
          amount: -34.25,
        },
      ].map((transaction) => (
        <tr>
          <td>{transaction.name}</td>
          <td>{transaction.status}</td>
          <td>{transaction.date}</td>
          <td>{transaction.amount}</td>
        </tr>
      ))}
    </table>
  </div>
)

export default CenterPanel
