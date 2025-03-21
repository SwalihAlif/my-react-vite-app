import {useState, useEffect} from 'react';

function RandomUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => setUser(data.results[0]));

        return () => console.log("Component Unmounted");
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <h2>Random User</h2>
                    <img src={user.picture.large} alt="User Avatar" />
                    <p>Name: {user.name.first} {user.name.last}</p>
                    <p>Email: {user.email}</p>
                </div>

            ): (
                <h3>Loading...</h3>
            )}
        </div>
    )
}

export default RandomUser;