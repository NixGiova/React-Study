import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUsersActions";

export default function CreateNewUser() {
	const { addUser } = useUserActions();

	const [result, setResult] = useState<"ok" | "ko" | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
		event.preventDefault();
		const form = event.target;
		const formDate = new FormData(form);

		setResult(null);

		const name = formDate.get("name") as string;
		const email = formDate.get("email") as string;
		const github = formDate.get("github") as string;

		if (!name || !email || !github) {
			// validaciones que tu quieras
			return setResult("ko");
		}

		addUser({ name, email, github });
		setResult("ok");
		form.reset();
	};

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>
			<form className="" onSubmit={handleSubmit}>
				<TextInput name="name" placeholder="Aquí el nombre" />
				<TextInput name="email" placeholder="Aquí el email" />
				<TextInput name="github" placeholder="Aquí el usuario de GitHub" />

				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Crear Usuario
					</Button>
					<span>
						{result === "ok" && (
							<Badge color="green">Usuario creado con éxito</Badge>
						)}
						{result === "ko" && (
							<Badge color="red">Por favor complete todos los campos</Badge>
						)}
						{result === null && <></>}
					</span>
				</div>
			</form>
		</Card>
	);
}
