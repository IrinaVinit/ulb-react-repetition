import { useNavigate } from "react-router-dom";

import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";



function Login() {
  let navigate = useNavigate();
  
  return (
    <div className="post">
      <h1>Страница для логина</h1>
      <form>
        <MyInput type="text" placeholder="Введите логин"/>
        <MyInput type="password" placeholder="Введите пароль"/>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}
export default Login;
