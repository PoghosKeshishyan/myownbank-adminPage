import '../css/Loading.css';

export function Loading() {
  return (
    <div className='Loading'>
      <div className='lds-spinner'>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      <p className='loading_sms'>Server connection...</p>
    </div>
  )
}
