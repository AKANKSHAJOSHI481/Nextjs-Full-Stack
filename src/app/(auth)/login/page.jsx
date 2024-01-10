
import {handleGithubLogin} from '../../../lib/action'
const loginPage = async ()=> {
  return (
    <div>
      <form action = {handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  )
}

export default loginPage
