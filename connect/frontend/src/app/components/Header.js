import React from 'react';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <div className="logo items-center justify-center">
          <ImportantDevicesIcon style={{ fontSize: '2.5rem' }} />
        </div>
        <div className="items-center justify-center">
          <h1 style={{ fontSize: '30px' }} >りすきる</h1>
        </div>

        <nav>
          <ul className="flex">
            <li className='py-5 flex flex-col items-center'>
              <Link href="#" prefetch={false}>
                <button type="submit" className="btn btn-primary">ログイン</button>
              </Link>
            </li>
            <li className='py-5 pl-3 flex flex-col items-center'>
              <Link href="/customers" prefetch={false}>
                <button type="submit" className="btn btn-primary">登録情報修正</button>
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;