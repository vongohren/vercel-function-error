import {useEffect } from 'react';
import { useRouter } from 'next/router'


export default () => {

  const router = useRouter();
  useEffect(() => {
    router.push('/login')
  }, [])
  return <div>hei world</div>;
}

