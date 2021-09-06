import Header from "./components/header/header.component";
import Note from "./components/note/note.component";
import Footer from "./components/footer/footer.component";
import notes from "./notes";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			{notes.map((noteItem) => (
				<Note
					key={noteItem.key}
					title={noteItem.title}
					content={noteItem.content}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
