import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Change = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div>
            <div className="container pt-3">
                <form onSubmit={handleSubmit}>
                    <h1>CHANGE PASSWORD</h1>
                    <div className="form-group">
                        <input onChange={(e) => e.target.value} type="password" placeholder="********" id="password" name="password" />
                    </div>
                    <br />
                    <div className="form-group">
                        <input onChange={(e) => e.target.value} type="password" placeholder="********" id="password" name="password" />
                    </div>
                    <button type="button">CHANGE</button>
                </form>
            </div>
        </div>
    )
}