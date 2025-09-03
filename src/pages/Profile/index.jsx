import { useState, useEffect } from "react";
import ProfileCard from "../../components/ProfileCard";

function Profile() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const response = await res.json();
                setUser(response);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);
    return (
        <div className="profile-container">
            <h2>Profile!</h2>
            <ProfileCard loading={loading} error={error} user={user} />
        </div>
    )
}

export default Profile;