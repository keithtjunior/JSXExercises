const Person = ({ name, age, hobbies }) => {
    return (
        <div style={{ marginBottom: "3rem" }}>
            <p>Learn some information about this person</p>
            <h2>Name: {name.length > 8 ? name.substring(0, 6) : name}</h2>
            <p>Age: {age}</p>
            <h3>{ age > 18 ? 'please go vote!' : 'you must be 18'}</h3>
            <ul>{hobbies.map(hobby => <li>{hobby}</li>)}</ul>
        </div>
    )
}