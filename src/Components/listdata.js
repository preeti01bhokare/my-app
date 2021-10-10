import React from 'react' 
import {OutTable, ExcelRenderer} from 'react-excel-renderer';

export default class Listdata extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          selectVal : this.props.location.state.value,
          csvFileVal :  this.props.location.state.csvFileData,
          cols:'',
          rows:''
        }
    }


    componentDidMount(){

        console.log(this.state.selectVal)
        console.log(this.state.csvFileVal)

        ExcelRenderer(this.state.csvFileVal, (err, resp) => {
            if(err){
              console.log(err);            
            }
            else{
                console.log("response= ",resp.rows)
                this.setState({
                    cols: resp.cols,
                    rows: resp.rows
                });
            }
          });     
    }

  
    render(){
        return(
            <>
            <section className="commonbanner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                        {this.state.uploadFile ?
                         <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
                        :null} 

                        {/* <table>
                            {this.state.rows.map((col,index) =>(
                            <tr>
                                <tr><td key={index}>{col.index}</td></tr>
                            </tr>
                             ))}
                            {this.state.rows.map((row,index) =>(
                                <tr><td key={index}>{row.index}</td></tr>
                            ))}
                        </table> */}

                    </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
    }