import React, { Component } from 'react';
import axios from "axios";

class floatingPopulationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount() {
        this.callFloatPopulListApi()
    }

    callFloatPopulListApi = async () => {
            axios.get('http://localhost:8080/popup/popupList', {
            })
            .then( response => {
                alert( JSON.stringify(response) );
                try {
                    this.setState({ responseFPList: response });
                    this.setState({ append_FPList: this.FloatPopulListAppend() });
                } catch (error) {
                    alert(error)
                }
            })
            .catch( error => {alert(error);return false;} );
    }

    FloatPopulListAppend = () => {
        let result = []
        var FPList = this.state.responseFPList.data
        var jsonString = JSON.stringify(FPList)
        alert("jsonString="+jsonString);
        //jsonString = jsonString.replace(/\(1시간단위\)/g, '')
        //jsonString = jsonString.replace(/\(10세단위\)/g, '')
        var json = JSON.parse(jsonString);
        
        for(let i=0; i<json.popupList.length; i++){
            var data = json.popupList[i]
            var idx = i+1
            result.push(
            <tr class="hidden_type">
            <td>{idx}</td>
            <td>{data.sno}</td>
            <td>{data.sname}</td>
            <td>{data.splc}</td>
            </tr>
            )
        }
        return result
    }

    render () {
        return (
                    <div >
                        <table>
                            <tr>
                                <th>Row</th>
                                <th>deptno</th>
                                <th>dname</th>
                                <th>loc</th>
                            </tr>
                        </table>	
                        <table>
                            {this.state.append_FPList}
                        </table>
                    </div>
        );
    }
}

export default floatingPopulationList;