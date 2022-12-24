import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Forgot = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div>
            <div className="container pt-3">
                <form onSubmit={handleSubmit}>
                    <h1>FORGOT PASSWORD</h1>
                    <div className="form-group">
                        <input onChange={(e) => e.target.value}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    </div>
                    <button type="button">Login</button>
                </form>
            </div>
        </div>
    )
}