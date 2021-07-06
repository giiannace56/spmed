import { Component } from 'react'
import axios from 'axios'
import { parseJWT} from '../../services/auth'

class Login extends Component
{
  constructor(props){
    super(props);
    this.state = {
      email : '',
      senha : '',
      errorMensage : ''
    }
  }
  efetuarLogin = (event) =>
  {
    event.preventDefault()

    this.setState({errorMensage : ''})

    axios.post('http://localhost:5000/api/Login/Login', 
    {
      email : this.state.email,
      senha : this.state.senha
    })

    .then(resp => 
      {
          if (resp.status === 200) {
              localStorage.setItem('usuario-login', resp.data.token)

              console.log('Meu token é: ' + resp.data.token);

              let base64 = localStorage.getItem('usuario-login').split('.')[1]

              console.log(JSON.parse(window.atob(base64)).role)

              console.log(parseJWT().role)

              if(parseJWT().role === "2")
              {

                this.props.history.push('/user')

              } else if(parseJWT().role === "3")
              {

                this.props.history.push('/adm')

              }else if(parseJWT().role === "1")
              {

                this.props.history.push('/medico')

              }
          }
      })

      .catch( () => 
        {
            this.setState({ errorMensage : "Email ou senha inválidos!! tente novamente"})
        })
  }

  atualizarCampos = (campo) =>
  {
    this.setState({ [campo.target.name] : campo.target.value })
  }

  render()
  {
    return(

      <div>
        <main className="main-log">
            <section className="imgLogin-log">
                <div className="header-log">
                    <h1>login</h1>
                </div>
 
                <div className="img-log">
                    <img className="img-log" src={login} alt=""/>
                </div>
            </section>
 
        <section className="login-log">
            <div className="logo-log"></div>
 
            <div className="qlqLogo-log">
                    
                    <form onSubmit={this.efetuarLogin}>
                        
                        <input className="namezin-log" type="email" name="email" value={this.state.email} onChange={this.atualizarCampos} placeholder="Email"/>
                        
                        <input className="namezin-log" type="password" name="senha" value={this.state.senha} onChange={this.atualizarCampos} placeholder="Senha"/>
                        
                        <button className="botaum-log">Login</button>

                        <p className="erro-log">{this.state.errorMensage}</p>
   
                    </form>

             </div>
 
            <div className="icon-log">
                <img src={logo} alt=""/>
            </div>
        </section>
    </main>
      </div>

    );
  }
}


export default Login;
