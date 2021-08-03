function InputForm(props){
    return (
        <div>
            <h3>{props.title}</h3>
            <br/>
            <form onSubmit={props.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label>Name</label>
                        <input
                            onChange={props.handleChange}
                            value={props.data.name}
                            name="name"
                            className="form-control"
                            placeholder="Enter place name"
                        />
                        </div>
                        <div className="form-group col-md-6">
                        <label>Country</label>
                        <input
                            onChange={props.handleChange} 
                            value={props.data.country}
                            name="country" 
                            className="form-control" 
                            placeholder="Enter country name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea 
                            onChange={props.handleChange} 
                            value={props.data.description} 
                            name="description"
                            className="form-control" 
                            rows="3" 
                            placeholder="Place Details here">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                        <input
                            onChange={props.handleChange} 
                            value={props.data.visited} 
                            name="visited"
                            className="form-check-input" 
                            type="checkbox"/>
                        <label className="form-check-label">
                            Visited
                        </label>
                        </div>
                    </div>
                    <button className="btn btn-primary">{props.btnText}</button>
                    <br/><br/><br/>
                </form>
        </div>
    )
}

export default InputForm