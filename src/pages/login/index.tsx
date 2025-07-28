import styles from "../auth.module.css";
import logo from "../../assets/uxbet-footer.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../../types/loginSchema";
import { Link, useNavigate } from "react-router";

import arrow from "../../assets/arrow.png";

export function Login() {
  const navigate = useNavigate();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  function handleForm(data: LoginSchema) {
    const stored = localStorage.getItem("account");
    if (!stored) return;
    const user = JSON.parse(stored);
    if (data.email === user.email && data.password === user.password) {
      navigate("/");
    } else {
      setError("root", { message: "Email ou senha errado" });
    }
  }

  return (
    <div className={styles.login}>
      <Link to={"/"}>
        <img src={arrow} alt="" className={styles.arrow} />
      </Link>

      <img src={logo} alt="logo da UXbet" />
      <div>
        <div className={styles.containerForm}>
          <div className={styles.headerForm}>
            <h3>Boas Vindas</h3>
            <p>Faça Login com seu email e senha</p>
          </div>

          <form onSubmit={handleSubmit(handleForm)} className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="eu@exemplo.com"
                {...register("email")}
              />
              <p className={styles.error}>{errors.email?.message}</p>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="************"
                {...register("password")}
              />
              <p className={styles.error}>{errors.password?.message}</p>
              <p className={`${styles.error} ${styles.root}`}>
                {errors.root?.message}
              </p>
            </div>

            <button disabled={isSubmitting}>
              {isSubmitting ? "Entrando.." : "Entrar"}
            </button>
          </form>
        </div>
        <Link to={"/register"}>
          <p className={styles.link}>
            Não possui cadastro? <span>Registre-se</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
