import { LogoIcon } from "@constants/icons";
import { EButtons } from "@enums/Button.enum";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "./Login.hooks";
import styles from "./Login.module.scss";
import { IFormLoginFields } from "./Login.type";
import { InputText } from "@components/Inputs/InputText/InputText";
export const LoginView = () => {
	const [values, setValues] = useState({
		password: "",
		showPassword: false,
	});
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormLoginFields>();
	const onSubmit = async (data: any) => {
		await login(data);
	};
	const { login } = useLogin();
	return (
		<section className={styles.Cover}>
			<div className={styles.CoverMain}>
				<div className={styles.CoverMainContent}>
					<h2 className="e-subtitle">Bienvenido</h2>
					<div className={`${styles.Content}`}>
						<figure className={styles.Logo}>
							<LogoIcon className={styles.LogoIcon} />
						</figure>
					</div>
				</div>
				<div className={`${styles.CoverMainForm} ${styles.CoverMainContent}`}>
					<h2 className="e-subtitle" style={{ color: "white" }}>
						Iniciar sesión
					</h2>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={`${styles.Form} ${styles.Content}`}
					>
						<Controller
							control={control}
							name={"username"}
							rules={{ required: "este campo es requerido" }}
							render={({ field: { value, onChange } }) => (
								<InputText
									value={value}
									label="Username"
									borderColor="white"
									borderWidth="xs"
									borderRadius="sm"
									className={styles.FormInput}
									onChange={onChange}
									error={errors.username ? true : false}
									helperText={errors.username && errors.username.message}
								/>
							)}
						/>
						<Controller
							control={control}
							name={"password"}
							rules={{ required: "este campo es requerido" }}
							render={({ field: { value, onChange } }) => (
								<InputText
									value={value}
									onChange={onChange}
									label="Password"
									borderColor="white"
									borderWidth="xs"
									borderRadius="sm"
									className={styles.FormInput}
									type={values.showPassword ? "text" : "password"}
									error={errors.password ? true : false}
									helperText={errors.password && errors.password.message}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={() =>
														setValues({
															...values,
															showPassword: !values.showPassword,
														})
													}
													sx={{ color: "white" }}
													edge="end"
												>
													{values.showPassword ? (
														<VisibilityOff />
													) : (
														<Visibility />
													)}
												</IconButton>
											</InputAdornment>
										),
									}}
								/>
							)}
						/>
						<button
							className={styles.FormButton}
							// variant={EButtons.containedBasic}
							type="submit"
						>
							Ingresar
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default LoginView;
