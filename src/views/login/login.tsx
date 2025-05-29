import {Card, Flex, Form} from "antd";
import style from './login.module.scss'
const Login = () => {
  return (
      <Flex vertical className={style.loginContainer}>
          <div className={style.loginContainerLeft}>
              cgbshj
          </div>
          <div className={style.loginContainerRight}>
              <Card title="Card title" variant="borderless">

                  Card content
              </Card>
          </div>
      </Flex>
  )
};

export default  Login;
