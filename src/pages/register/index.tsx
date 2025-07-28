import styles from "../auth.module.css";
import logo from "../../assets/uxbet-footer.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterSchema,
} from "../../types/registerSchema";
import { Link, useNavigate } from "react-router";

import arrow from "../../assets/arrow.png";

export function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  function handleForm(data: RegisterSchema) {
    // ⚠️ AVISO: Este armazenamento no localStorage é APENAS para demonstração! Nunca armazene dados sensíveis no localStorage.
    // O melhor seria utilizar autenticação com backend e tokens (ex: JWT).
    localStorage.setItem("account", JSON.stringify(data));
    navigate("/");
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
            <h3>Cadastre-se</h3>
            <p>Crie sua conta e divirta-se</p>
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
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="seu nome"
                {...register("name")}
              />
              <p className={styles.error}>{errors.name?.message}</p>
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
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="confirm">Confirmar senha</label>
              <input
                type="password"
                id="confirm"
                placeholder="************"
                {...register("confirm")}
              />
              <p className={styles.error}>{errors.confirm?.message}</p>
            </div>

            <button disabled={isSubmitting}>
              {isSubmitting ? "Criando.." : "Fazer cadastro"}
            </button>
          </form>
        </div>
        <Link to={"/login"}>
          <p className={styles.link}>
            Já possui cadastro? <span>Faça Login</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
