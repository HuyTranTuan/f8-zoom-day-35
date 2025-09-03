function ProfileCard({ loading, error, user }) {
    return (
        <div className="profile-card">
            {loading
                ? <span>Loading...</span>
                : (error
                    ? <span>Error: {error}</span>
                    : user && (
                        <div className="profile-card-body">
                            <h1>{user.name}</h1>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Website:</strong> {user.website}</p>
                            {user.address && (
                                <div>
                                    <h3>Address:</h3>
                                    <p>{user.address.street}, {user.address.suite}</p>
                                    <p>{user.address.city}, {user.address.zipcode}</p>
                                </div>
                            )}
                        </div>
                    )
                )
            }
        </div>
    )
}

export default ProfileCard;