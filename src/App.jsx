import Student from "./Student.jsx";
function App() {
    return (
        <div>
            <Student name="Spongebob" age={30} isStudent={true} />
            <Student name="Patrick" age={42} isStudent={false} />
            <Student name="Sqidward" age={50} isStudent={false} />
            <Student name="Sandy" age={27} isStudent={true} />
            <Student name="Larry" />
        </div>
    );
}

export default App;
