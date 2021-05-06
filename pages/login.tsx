import Layout from "../components/Layout";
import Form from "../components/form";


const Login = () => {
    return (
        <Layout>
            <div className="login">
                <Form islogin errorMessage={errorMsg} onSubmit={handleSubmit} />
            </div>
            <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
        </Layout>
    )
}

export default Login