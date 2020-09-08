import fetch from '@lib/fetch'


const Login = () => {

  const signIn2 = async () => {
    const user = await fetch('/api/getsomething', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return (
    <div>
      Ready for google
      <button onClick={signIn2}>Google login</button>
    </div>
  )
}

export default () =>
  <Login />

