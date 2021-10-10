import React from 'react' 

export default class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            uploadFile : null,
            selectValue : 1
        }
        this.handleFileChange = this.handleFileChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleFileChange=(evt)=> {
        this.setState({uploadFile: evt.target.files[0]})
        // console.log("file ==",evt.target.files[0])
    }

    handleChange=(evt)=>{
        // console.log("value==",evt.target.value)
        this.setState({selectValue : evt.target.value})
       // console.log("value==",this.state.selectValue)
    }

    handleSubmit=(evt)=>{
        evt.preventDefault()
        this.props.history.push({
            pathname: "/listdata",
            state: {
                value : this.state.selectValue,
                csvFileData : this.state.uploadFile
            }
        });

    }
    

render(){
    return(
        <>
        <section className="commonbanner">
            <div className="container">
                <form className="form-wrapper" autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-sm-4">
                            <select onChange={this.handleChange} required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                    </div>
                    <div className="col-sm-4">
                        <input type="file" id="upload_design" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={this.handleFileChange} required />
                    </div>
                    <div className="col-sm-4">
                        <button className="submit-btn" type="submit">submit</button>
                    </div>
                </div>
                </form>
            </div>
        </section>
        </>
    )
}
}