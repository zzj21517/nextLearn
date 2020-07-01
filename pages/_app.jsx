import App from 'next/app'
import '../styles/index.scss'
class MyApp extends App{
    render(){
        console.log('_app')
        const {Component,pageProps}=this.props
        return (<Component {...pageProps} />)
    }
}
  
  export default MyApp