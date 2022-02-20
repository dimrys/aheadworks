import './App.css';
import {NotesList} from "./components/NotesList/NotesList";
import {Input} from "./components/Input/Input";

export const App = () => {
    return (
        <div className="App">
            <NotesList/>
            <Input/>
        </div>
    );
}


