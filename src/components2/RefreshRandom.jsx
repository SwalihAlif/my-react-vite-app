import {useState, useEffect} from 'react';

function RefreshRandomUser() {
    const [user, setUser] = useState(null);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => setUser(data.results[0]));

        return () => console.log("Component Unmounted");
    }, [refresh]);

    return (
        <div>
            <h2>Random User</h2>
            {user ? (
                <div>
                    <img src={user.picture.large} alt="User Avatar" />
                    <p>Name: {user.name.first} {user.name.last}</p>
                    <p>Email: {user.email} </p>
                </div>
            ) : (
                <p>Loading....</p>
            )}

            {/*Button to refresh user */}
            <button onClick={() => setRefresh(refresh + 1)}>Refresh</button>
        </div>
    );
}

export default RefreshRandomUser;