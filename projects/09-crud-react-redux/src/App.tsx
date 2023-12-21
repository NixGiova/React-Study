import { Toaster } from "sonner";
import "./App.css";
import CreateNewUser from "./components/CreateNewUser";
import ListOfUsers from "./components/ListOfUser";

function App() {
	return (
		<>
			<ListOfUsers />
			<CreateNewUser />
			<Toaster richColors />
		</>
	);
}

export default App;
