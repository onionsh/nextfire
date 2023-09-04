export default function UserProfile({ user }) {
    return (
        <div>
            <img src={user.photoURL} className="card-img-center" />
            <p>
                <i>@{user.username}</i>
            </p>
            <h1>{user.displayName}</h1>
        </div>
    );
}